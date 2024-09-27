import { BlockResponse } from "@/lib/types";
import { collectPaginatedAPI, isFullBlock } from "@notionhq/client";
import { notion } from "./notion";
import { unstable_cache } from "next/cache";

const cleanBlock = (object: BlockResponse) => {
  delete object.object;
  delete object.archived;
  delete object.created_by;
  delete object.last_edited_by;
  delete object.parent;
  delete object.created_time;
  delete object.last_edited_time;
};

export const getBlocks = async (
  parentBlockId: string
): Promise<Array<BlockResponse>> => {
  console.log("getAllBlocks", parentBlockId);
  const blocks = await collectPaginatedAPI(notion.blocks.children.list, {
    block_id: parentBlockId,
  });

  const fullBlocks = await Promise.all(
    blocks.filter(isFullBlock).map(async (block) => {
      const object: BlockResponse = block;
      cleanBlock(object);
      const { has_children } = object;
      delete object.has_children;
      if (has_children && object.id) {
        return {
          ...object,
          children: await getBlocks(object.id),
        };
      }
      return {
        ...object,
        children: [],
      };
    })
  );

  return fullBlocks as BlockResponse[];
};

export const getCachedBlocks = unstable_cache(getBlocks, ["blocks"], {
  revalidate: 3600,
  tags: ["blocks"],
});

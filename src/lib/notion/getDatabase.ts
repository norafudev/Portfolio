import { NotionPageProps, PageObjectResponse } from "@/lib/types";
import { notion, databaseId } from "./notion";
import { unstable_cache } from "next/cache";

const transformNotionData = (
  pages: PageObjectResponse[]
): NotionPageProps[] => {
  return pages.map(({ id, last_edited_time, cover, properties }) => ({
    id,
    title:
      (properties.title as { title: Array<{ plain_text: string }> }).title[0]
        ?.plain_text ?? "",
    last_edited_time,
    cover: cover
      ? cover.type === "external"
        ? cover.external.url
        : cover.file?.url
      : "/images/placeholder.webp",
    category:
      (properties.category as { select?: { name: string } }).select?.name ?? "",
    description:
      (properties.description as { rich_text: Array<{ plain_text: string }> })
        .rich_text[0]?.plain_text ?? "",
    status: (properties.status as { status?: { name: string } }).status?.name,
    published_at:
      (properties.published_at as { date?: { start: string } }).date?.start ??
      "",
    updated_at: last_edited_time,
    slug:
      (properties.slug as { rich_text: Array<{ plain_text: string }> })
        .rich_text[0]?.plain_text ?? "",
  }));
};

const getDatabase = async (): Promise<NotionPageProps[]> => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "status",
      status: {
        equals: "Published",
      },
    },
    sorts: [
      {
        property: "published_at",
        direction: "ascending",
      },
    ],
  });
  return transformNotionData(response.results as PageObjectResponse[]);
};

export const getCachedDatabase = unstable_cache(getDatabase, ["database"], {
  revalidate: 3600,
  tags: ["database"],
});

import React from "react";
import { BlockResponse } from "../types";
import { Heading1, Paragraph } from "@/components/blocks";

type BlockComponentType = React.FC<{ data: BlockResponse }>;

class NotionRenderer {
  private renderers: Record<string, BlockComponentType>;

  constructor() {
    this.renderers = {
      heading_1: Heading1,
      paragraph: Paragraph,
    };
  }

  renderBlock(block: BlockResponse): React.ReactElement | null {
    const Component = this.renderers[block.type];
    if (Component !== undefined) {
      return React.createElement(Component, { key: block.id, data: block });
    } else {
      console.warn(`No renderer for block type: ${block.type}`);
      return null;
    }
  }

  renderBlocks(blocks: BlockResponse[]): React.ReactElement[] {
    return blocks
      .map((block) => this.renderBlock(block))
      .filter((element): element is React.ReactElement => element !== null);
  }
}

export default NotionRenderer;

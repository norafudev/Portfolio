import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type {
  DatabaseObjectResponse,
  GetDatabaseResponse,
  PageObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type NotionPageProps = {
  id: string;
  title: string;
  last_edited_time: string;
  cover: string;
  category: string;
  description: string;
  status: string | undefined;
  published_at: string;
  updated_at: string;
  slug: string;
};

export type BlockType =
  | "paragraph"
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "bulleted_list_item"
  | "numbered_list_item"
  | "to_do"
  | "toggle"
  | "child_page"
  | "child_database"
  | "embed"
  | "image"
  | "video"
  | "audio"
  | "file"
  | "pdf"
  | "bookmark"
  | "code"
  | "breadcrumb"
  | "callout"
  | "quote"
  | "equation"
  | "divider"
  | "table_of_contents"
  | "column"
  | "column_list"
  | "link_preview"
  | "synced_block"
  | "template"
  | "link_to_page"
  | "table"
  | "table_row"
  | "unsupported"
  | "bulleted_list"
  | "numbered_list";

export type BlockResponse = Partial<BlockObjectResponse> & {
  id: string;
  type: BlockType;
  children?: BlockResponse[];
};

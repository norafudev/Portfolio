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

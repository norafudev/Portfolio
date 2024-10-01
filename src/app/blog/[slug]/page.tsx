import { getCachedDatabase } from "@/lib/notion_client/getDatabase";
import { getCachedBlocks } from "@/lib/notion_client/getBlocks";
import NotionRenderer from "@/lib/notion_renderer/NotionRenderer";
import Toggle from "@/components/Toggle";

const Page = async ({ params }: { params: { slug: string } }) => {
  const database = await getCachedDatabase();
  const page = database.find((page) => page.slug === params.slug);
  if (page) {
    const blocks = await getCachedBlocks(page?.id);
    const renderer = new NotionRenderer();
    const renderedBlocks = renderer.renderBlocks(blocks);

    return (
      <article>
        <h1>{page?.title}</h1>
        <main className="max-w-3xl mx-auto">{renderedBlocks}</main>
        <Toggle label="JSON">
          <pre>{JSON.stringify(blocks, null, 2)}</pre>
        </Toggle>
      </article>
    );
  }
};

export default Page;

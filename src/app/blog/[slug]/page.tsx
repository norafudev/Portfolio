import { getCachedDatabase } from "@/lib/notion/getDatabase";
import { getCachedBlocks } from "@/lib/notion/getBlocks";

const page = async ({ params }: { params: { slug: string } }) => {
  const database = await getCachedDatabase();
  const page = database.find((page) => page.slug === params.slug);
  if (page) {
    const blocks = await getCachedBlocks(page?.id);
    return (
      <div>
        {page?.title}-{page?.id}
        <pre>{JSON.stringify(blocks, null, 2)}</pre>
      </div>
    );
  }
};

export default page;

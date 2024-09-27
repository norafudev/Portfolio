import { getCachedDatabase } from "@/lib/notion/getDatabase";

const page = async ({ params }: { params: { slug: string } }) => {
  const database = await getCachedDatabase();
  const page = database.find((page) => page.slug === params.slug);
  return (
    <div>
      {page?.title}-{page?.id}
    </div>
  );
};

export default page;

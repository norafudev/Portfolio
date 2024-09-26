import { getDatabase } from "@/lib/notion/getDatabase";
import BlogCard from "@/components/blog/BlogCard";

export default async function Home() {
  const database = await getDatabase();
  return (
    <main>
      <section className="grid grid-cols-3 gap-4">
        {database.map((page) => {
          return <BlogCard key={page.id} {...page} />;
        })}
      </section>
    </main>
  );
}

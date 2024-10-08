import { NotionPageProps } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({
  title,
  description,
  cover,
  category,
  published_at,
  slug,
}: NotionPageProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Link href={`/blog/${slug}`}>
        <h1 className="text-xl font-bold line-clamp-1">{title}</h1>
      </Link>
      <p className="text-sm">{published_at}</p>
      <div className="relative w-full aspect-video">
        <Image
          src={cover}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="text-sm px-2 border rounded-xl w-fit border-slate-800">
        {category}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;

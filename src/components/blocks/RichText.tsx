import { RichTextItemResponse } from "@/lib/types";
import { cn } from "@/utils/cn";

interface RichTextProps {
  richTextArray: RichTextItemResponse[];
  style?: string;
}

const RichText: React.FC<RichTextProps> = ({ richTextArray, style }) => {
  return (
    <>
      {richTextArray.map((richTextItem, index) => {
        if (richTextItem.type === "text") {
          const {
            text: { content, link },
            annotations: {
              bold,
              code,
              italic,
              strikethrough,
              underline,
              color,
            },
          } = richTextItem;

          return (
            <span
              key={index}
              className={cn(
                color,
                bold && "font-bold text-stroke-bold",
                italic && "italic",
                strikethrough && "line-through",
                underline && "underline",
                style
              )}
            >
              {renderContent(content, code, link || undefined)}
            </span>
          );
        }
      })}
    </>
  );
};

const renderContent = (
  content: string,
  isCode: boolean,
  link?: { url: string }
) => {
  if (isCode) {
    return (
      <code className="bg-gray-100 font-lxgw text-sm text-rose-400 rounded px-1">
        {content}
      </code>
    );
  }

  if (link) {
    return (
      <a
        href={link.url}
        className="text-blue-600 hover:underline hover:animate-underline"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default RichText;

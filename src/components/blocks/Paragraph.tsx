// render paragraph block
import { BlockResponse, ParagraphBlockObjectResponse } from "@/lib/types";
import RichText from "./RichText";

const Paragraph: React.FC<{ data: BlockResponse }> = ({ data }) => {
  const paragraph = data as ParagraphBlockObjectResponse;
  return (
    <p className=" leading-relaxed mb-4">
      <RichText richTextArray={paragraph.paragraph.rich_text} />
    </p>
  );
};

export default Paragraph;

import { BlockResponse, Heading1BlockObjectResponse } from "@/lib/types";
import RichText from "./RichText";

const Heading1: React.FC<{ data: BlockResponse }> = ({ data }) => {
  const heading = data as Heading1BlockObjectResponse;
  const { rich_text, color } = heading.heading_1;
  return (
    <h1 className={`my-6 ${color}`}>
      <RichText richTextArray={rich_text} style="text-3xl font-bold" />
    </h1>
  );
};

export default Heading1;

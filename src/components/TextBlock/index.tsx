import { TextBlockSectionBlock } from "@/types/HomePage";
import RichText from "../ui/RichText";

const TextBlock = ({ title, description }: TextBlockSectionBlock) => {
  return (
    <div className="flex flex-col gap-14 mt-16">
      <h1 className="text-2xl lg:text-3xl font-medium">{title}</h1>
      <div className="text-lg lg:text-2.1xl text-secondary font-extralight leading-7.5 tracking-1.5">
        <RichText content={description} />
      </div>
      <hr className="w-1/3 md:w-1/6 lg:w-1/12 border-1 border-primary border-dashed" />
    </div>
  );
};

export default TextBlock;

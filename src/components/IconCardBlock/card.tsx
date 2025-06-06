import Image from "next/image";
import RichText from "../ui/RichText";
import { IconCard } from "@/types/HomePage";

const Card = ({ title, description, icon }: IconCard) => {
  const { url, name, alternativeText } = icon;
  return (
    <div className="flex flex-col h-full gap-5 xl:gap-10 bg-black-300 border-l border-primary px-6 md:px-12 pb-6 md:pb-12 pt-3 min-h-100">
      <Image
        src={url}
        alt={name + alternativeText + "icon"}
        width={80}
        height={80}
      />
      <h1 className="text-2xl lg:text-3xl font-medium">{title}</h1>
      <div className="text-lg lg:text-2.1xl text-secondary font-extralight text-left leading-7.5 tracking-1.5 flex-grow">
        <RichText content={description} />
      </div>
    </div>
  );
};

export default Card;

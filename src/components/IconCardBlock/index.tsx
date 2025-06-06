import { IconCardBlock } from "@/types/HomePage";
import Card from "./card";
import RichText from "../ui/RichText";

const IconCard = ({ Header, Cards }: IconCardBlock) => {
  return (
    <>
      <div className="  py-16">
        <div className="flex flex-col gap-14">
          <h1 className="text-2xl lg:text-3xl font-medium">{Header.title}</h1>
          <div className="text-lg lg:text-2.1xl text-secondary font-extralight">
            <RichText content={Header.description} />
          </div>
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 gap-10 md:gap-20 xl:gap-40">
            {Cards.map((el, index) => (
              <Card key={el.title + index} {...el} />
            ))}
          </div>
        </div>
      </div>
      <hr className="border-1 border-primary w-full" />
    </>
  );
};

export default IconCard;

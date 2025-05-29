import Image from "next/image";

interface CardProps {
  title: string;
  icon: string;
  description: string;
}

const Card = ({ title, icon, description }: CardProps) => {
  return (
    <div className="flex flex-col h-full gap-5 xl:gap-10 bg-black-300 border-l border-primary px-12 pb-12 pt-3 min-h-100">
      <Image src={icon} alt="icon" width={80} height={80} />
      <h1 className="text-2xl lg:text-3xl font-medium">{title}</h1>
      <p className="text-lg lg:text-2.1xl text-secondary font-extralight text-left leading-7.5 tracking-1.5 flex-grow">
        {description}
      </p>
    </div>
  );
};

export default Card;

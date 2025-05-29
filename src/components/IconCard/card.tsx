import Image from "next/image";

interface CardProps {
  title: string;
  icon: string;
  description: string;
}

const Card = ({ title, icon, description }: CardProps) => {
  return (
    <div className="flex flex-col h-full gap-5 xl:gap-10 dark:bg-black-300 bg-primary/30 border-l dark:border-primary border-gray-900 px-6 md:px-12 pb-6 md:pb-12 pt-3 min-h-100">
      <Image src={icon} alt="icon" width={80} height={80} />
      <h1 className="text-2xl lg:text-3xl font-medium">{title}</h1>
      <p className="text-lg lg:text-2.1xl dark:text-secondary text-gray-700 font-extralight text-left leading-7.5 tracking-1.5 flex-grow">
        {description}
      </p>
    </div>
  );
};

export default Card;

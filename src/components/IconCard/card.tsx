import Image from "next/image";

interface CardProps {
  title: string;
  icon: string;
  description: string;
}

const Card = ({ title, icon, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-5 xl:gap-10 bg-black-300 border-l-2 border-primary px-12 pb-12 pt-3">
      <Image src={icon} alt="icon" width={50} height={50} />
      <h1 className="text-2xl lg:text-3xl font-medium">{title}</h1>
      <p className="text-lg lg:text-2.1xl text-secondary font-extralight text-left">
        {description}
      </p>
    </div>
  );
};

export default Card;

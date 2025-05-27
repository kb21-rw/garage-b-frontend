import Card from "./card";
interface CardProps {
  title: string;
  description: string;
  block: {
    title: string;
    icon: string;
    description: string;
  }[];
}

const IconCard = ({ title, description, block }: CardProps) => {
  return (
    <div className=" border-b-2 border-primary py-16">
      <div className="flex flex-col gap-14">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-2xl text-secondary font-extralight">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 xl:gap-x-40">
          {block.map((el, index) => (
            <Card key={el.title + index} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconCard;

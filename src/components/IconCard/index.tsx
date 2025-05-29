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
    <>
      <div className="  py-16">
        <div className="flex flex-col gap-14">
          <h1 className="text-2xl lg:text-3xl font-medium">{title}</h1>
          <p className="text-lg lg:text-2.1xl text-secondary font-extralight">
            {description}
          </p>
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 gap-10 md:gap-20 xl:gap-40">
            {block.map((el, index) => (
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

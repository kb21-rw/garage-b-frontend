interface TextBlockProps {
  title: string;
  description: string;
}

const TextBlock = ({ title, description }: TextBlockProps) => {
  return (
    <div className="flex flex-col gap-14 mt-16">
      <h1 className="text-3xl font-medium">{title}</h1>
      <p className="text-2xl text-secondary font-extralight">{description}</p>
      <hr className="w-1/3 md:w-1/6 lg:w-1/12 border-1 border-primary border-dashed" />
    </div>
  );
};

export default TextBlock;

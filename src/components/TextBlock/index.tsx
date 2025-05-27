interface TextBlockProps {
  title: string;
  description: string;
}

const TextBlock = ({ title, description }: TextBlockProps) => {
  return (
    <div className="flex flex-col gap-14 mt-16">
      <h1 className="text-3xl font-normal">{title}</h1>
      <p className="font-light text-2xl">{description}</p>
      <hr className="w-1/12 border-1 border-primary border-dashed" />
    </div>
  );
};

export default TextBlock;

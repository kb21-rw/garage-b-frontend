import Image from "next/image";

interface CardProps {
  icon: string;
  alt: string;
}

const Card = ({ icon, alt }: CardProps) => {
  return (
    <div className="relative p-6 mx-6 h-32 w-48 border-2 border-primary">
      <Image
        src={icon}
        alt={alt}
        fill
        className="object-contain"
        loading="eager"
      />
    </div>
  );
};

export default Card;

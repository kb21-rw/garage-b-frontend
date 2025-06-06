import Image from "next/image";
import { Icon } from "@/types/HomePage";
import Link from "next/link";

const Card = ({ link, image }: Icon) => {
  const { url, name, alternativeText } = image;
  return (
    <div className="relative p-6 mx-6 h-32 w-48 border border-primary">
      <Link href={link.href} target="_blank">
        <Image
          src={url}
          alt={alternativeText + name + "image"}
          fill
          className="object-contain"
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default Card;

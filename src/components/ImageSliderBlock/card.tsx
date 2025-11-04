import Image from "next/image";
import { Icon } from "@/types/HomePage";
import Link from "next/link";

const Card = ({ link, image }: Icon) => {
  const { url, name, alternativeText } = image;
  return (
    <Link
      href={link?.href}
      target={link?.isExternal ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <div className="relative p-6 mx-6 h-32 w-48">
        <Image
          src={url}
          alt={alternativeText + name + "image"}
          fill
          sizes="100%"
          className="object-contain"
          loading="eager"
        />
      </div>
    </Link>
  );
};

export default Card;

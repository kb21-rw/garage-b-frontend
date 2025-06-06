import Image from "next/image";
import { SocialMedia } from "@/types/SiteConfig";
import Link from "next/link";

const Media = ({ link, image }: SocialMedia) => {
  const { url, alternativeText } = image;
  return (
    <Link href={link.href} target="_blank" rel="noopener noreferrer">
      <Image
        src={url}
        alt={alternativeText + "image"}
        width={40}
        height={40}
        className="cursor-pointer  object-contain"
      />
    </Link>
  );
};

export default Media;

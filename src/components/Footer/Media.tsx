import Image from "next/image";
import { SocialMedia } from "@/types/SiteConfig";
import Link from "next/link";

const Media = ({ link, image }: SocialMedia) => {
  const { url, alternativeText } = image;
  return (
    <Link
      href={link.href}
      target={link?.isExternal ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <div className="relative w-10 h-10">
        <Image
          src={url}
          alt={alternativeText + "image"}
          fill
          sizes="100%"
          className="cursor-pointer  object-contain"
        />
      </div>
    </Link>
  );
};

export default Media;

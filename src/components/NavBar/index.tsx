import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/types/SiteConfig";

const Navbar = ({ logo, menuIcon }: NavBar) => {
  const { url: logoUrl, alternativeText: logoAlt, name: logoName } = logo.image;
  const {
    url: menuIconUrl,
    alternativeText: menuIconAlt,
    name: menuIconName,
  } = menuIcon.image;
  return (
    <nav className="navbar-container shadow-md">
      <div className="flex justify-between items-center">
        <Link href={logo.link.href}>
          <div className="relative w-25 h-15">
            <Image
              src={logoUrl}
              alt={`${logoAlt} logo ${logoName}`}
              fill
              className="object-contain cursor-pointer"
            />
          </div>
        </Link>
        <Link href={menuIcon.link.href}>
          <Image
            src={menuIconUrl}
            alt={`${menuIconAlt}+logo+${menuIconName}`}
            width={30}
            height={30}
            className="cursor-pointer object-contain"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

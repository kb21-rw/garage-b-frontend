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
          <Image
            src={logoUrl}
            alt={`${logoAlt}+logo+${logoName}`}
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <Link href={menuIcon.link.href}>
          <Image
            src={menuIconUrl}
            alt={`${menuIconAlt}+logo+${menuIconName}`}
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

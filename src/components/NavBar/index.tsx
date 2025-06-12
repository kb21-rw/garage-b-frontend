import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/types/SiteConfig";

const Navbar = ({ logo, menuIcon }: NavBar) => {
  return (
    <nav className="navbar-container shadow-md">
      <div className="flex justify-between items-center">
        {logo && (
          <Link href={logo.link.href}>
            <div className="relative w-40 h-15">
              <Image
                src={logo.image.url}
                alt={`${logo.image.alternativeText} logo ${logo.image.name}`}
                fill
                className="object-contain cursor-pointer"
              />
            </div>
          </Link>
        )}
        {menuIcon && (
          <Link href={menuIcon.link.href}>
            <Image
              src={menuIcon.image.url}
              alt={`${menuIcon.image.alternativeText}+logo+${menuIcon.image.name}`}
              width={30}
              height={30}
              className="cursor-pointer object-contain"
            />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

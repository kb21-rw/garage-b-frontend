import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar-container shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="image/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <Image
          src="image/menu.svg"
          alt="Logo"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;

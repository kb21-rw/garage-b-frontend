"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/types/SiteConfig";

<<<<<<< HEAD
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("darkMode");
      return stored ? stored === "true" : true;
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

=======
const Navbar = ({ logo, menuIcon }: NavBar) => {
>>>>>>> main
  return (
    <nav className="navbar-container shadow-md ">
      <div className="flex justify-between items-center">
<<<<<<< HEAD
        <Link href="/">
          <Image
            src="image/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        {/* <Image
          src="image/menu.svg"
          alt="Logo"
          width={30}
          height={30}
          className="cursor-pointer"
        /> */}
        <button
          className="bg-background px-4 py-2 rounded text-secondary border dark:text-secondary  dark:border-primary border-secondary"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☼" : "☽"}
        </button>
=======
        {logo && (
          <Link href={logo.link.href}>
            <div className="relative w-40 h-12">
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
>>>>>>> main
      </div>
    </nav>
  );
};

export default Navbar;

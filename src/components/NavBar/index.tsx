"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
        {/* <Image
          src="image/menu.svg"
          alt="Logo"
          width={30}
          height={30}
          className="cursor-pointer"
        /> */}
        <button
          className="bg-background dark:bg-primary px-4 py-2 rounded text-white"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☼" : "☽"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

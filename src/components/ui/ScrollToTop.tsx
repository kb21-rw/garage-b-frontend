"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-md dark:bg-primary bg-background dark:hover:bg-primary/20 hover:bg-background/20   transition shadow-lg"
      aria-label="Scroll to top"
    >
      <Image src="image/up-arrow.svg" alt="Up-arrow" width={24} height={24} />
    </button>
  ) : null;
};
export default ScrollToTop;

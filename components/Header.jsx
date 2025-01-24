"use client";

import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  }, [pathname]);

  return (
    <header
    className={`${
      header ? "bg-white shadow-lg dark:bg-black/95 delay-100" : "bg-transparent dark:bg-transparent"
    } sticky top-0 z-30 transition-all duration-300 ${pathname === "/" ? "bg-[#fef9f5]" : ""}`}
  >
    <div className="container mx-auto px-4 py-0">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex xl:flex items-center gap-x-8">
          <Nav
            containerStyles="flex items-center gap-x-6 lg:gap-x-8"
            linkStyles="text-base font-medium relative hover:text-primary transition-all duration-300"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <ThemeToggler className="ml-2" />
        </div>

        {/* Mobile Navigation */}
        <div className="flex h-10 items-center gap-x-4 lg:hidden xl:hidden">
          <ThemeToggler />
          <MobileNav />
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;

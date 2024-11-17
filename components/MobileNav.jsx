"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/service",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "about",
    path: "/about",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* Logo */}
          <div className="mt-32 mb-43 text-2xl text-center">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                UriSat <span className="text-accent">*</span>
              </h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`${
                    link.path === usePathname && "text-accent border-b-2 "
                  } text-xl capitalize border-accent hover:border-b-2 hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;

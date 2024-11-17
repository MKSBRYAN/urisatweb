"use server";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

//components

const Header = () => {
  return (
    <header className="py-8 xl-py-12 text-white">
      <div className="container nx-auto flex justify-between items-center">
        {/* logo */}
        <Link
          href="/"
          className=""
        >
          <h1 className="text-4xl font-semibold">
            UriSat <span className="text-accent">*</span>
          </h1>
        </Link>
        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent p-2 px-3 border-2 border-spacing-2">
              Here Ous
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

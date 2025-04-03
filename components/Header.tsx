"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl  pl-10">
          <Image
            src="/icon.png" // Change this to your logo path
            alt="N3Events Logo"
            width={40}
            height={40}
            className="h-15 w-18"
          />
          {/* N3Events */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {["Home", "About", "Contact"].map((item, index) => (
              <li key={index}>
              <Link
  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
  className="relative text-sm font-medium transition-colors hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 bg-clip-text
  after:absolute after:left-0 after:top-full after:translate-y-2 after:h-0.5 after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700 
  after:transition-transform after:duration-300 hover:after:scale-x-100"
>
  {item}
</Link>


              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 p-4">
            {["Home", "About", "Events", "Robotics Event", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-medium transition-colors hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 bg-clip-text"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

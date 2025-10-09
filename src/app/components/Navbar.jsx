"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "https://about.tiffinservice.app/about", external: true },
    { name: "Forum", href: "https://about.tiffinservice.app/forum", external: true },
    { name: "Blogs", href: "https://about.tiffinservice.app/blog", external: true },
    { name: "Partner", href: "https://about.tiffinservice.app/partner-with-us", external: true },
    { name: "Contact", href: "https://about.tiffinservice.app/contact", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-black/40"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a
              href="/"
              aria-label="TiffinService Home"
              className="flex items-center space-x-2"
            >
              <Image
                src="/logo.svg"
                alt="TiffinService Logo"
                width={36}
                height={36}
                priority
              />
              <span className="sr-only">TiffinService</span>
            </a>

            <ul className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-white text-sm lg:text-base hover:text-yellow-300 transition duration-200"
                    aria-label={item.name}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-md text-white transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block w-full text-center hover:text-yellow-300 transition duration-200 text-base"
                  onClick={() => setMenuOpen(false)}
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

 const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "https://about.tiffinservice.app/about", external: true },
    { name: "Forum", href: "https://about.tiffinservice.app/forum" , external: true},
    { name: "Blogs", href: "https://about.tiffinservice.app/blog", external: true },
    { name: "Partner", href: "https://about.tiffinservice.app/partner-with-us", external: true },
    { name: "Contact", href: "https://about.tiffinservice.app/contact", external: true },
  ];

  // Navbar scroll effect (adds subtle background)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-black/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="TiffinService Logo"
              className="h-8 w-auto sm:h-9"
            />
            {/* <span className="text-white font-semibold text-lg sm:text-xl">TiffinService</span> */}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white text-sm lg:text-base hover:text-yellow-300 transition duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-black/90 backdrop-blur-md text-white transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block w-full text-center hover:text-yellow-300 transition duration-200 text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

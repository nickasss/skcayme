"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/works", label: "WORKS" },
    { href: "/services", label: "SERVICES" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Main Navbar Bar */}
      <nav className="bg-[#070707] shadow-md px-4 lg:px-8 sticky top-0 z-40">
        <div className="mx-auto">
          <div className="flex items-center justify-end h-16">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-xl font-medium hover:text-red-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)} // Open the menu
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-neutral-800 focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Slide-in Menu --- */}
      {/* 1. Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)} // Close menu on overlay click
      />

      {/* 2. Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-3/5 max-w-sm bg-[#070707] shadow-xl z-[100] transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* Menu Header with Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)} // Close the menu
              className="p-2 rounded-md text-white hover:bg-neutral-800"
            >
              {/* Close (X) Icon */}
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className="text-white text-xl p-3 text-center rounded-md hover:bg-neutral-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/course", label: "Course" },
    { href: "/services", label: "Blogs" },
    { href: "/about-us", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/reviews", label: "Reviews" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-primary/80 backdrop-opacity-90 shadow-md"
          : "bg-transparent backdrop-grayscale"
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <div
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-white" : "text-primary"
          }`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:underline hover:font-semibold transition-all duration-200 ${
                scrolled ? "hover:text-gray-200" : "hover:text-primary/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 hidden md:flex">
          <Link href="/enroll-now">
            <Button
              variant="outline"
              className="bg-red-600 text-white hover:bg-transparent hover:border font-medium px-6 py-3 rounded-md shadow-md transition cursor-pointer"
            >
              Enroll Now
            </Button>
          </Link>

          <Link href="/contact-us">
            <Button
              variant="outline"
              className="hover:bg-red-600 text-black hover:text-white bg-transparent hover:border font-medium px-6 py-3 rounded-md shadow-md transition cursor-pointer"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                className="text-gray-500 bg-white hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-700 px-5 hover:underline font-medium text-lg hover:text-primary hover:font-semibold transition-all duration-200 py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

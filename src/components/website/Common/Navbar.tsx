"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out backdrop-blur-md    inset-0 bg-[linear-gradient(135deg,rgba(46,28,28,1)_0%,rgba(32,32,32,1)_40%)] opacity-100${
        scrolled ? "bg-black/60 shadow-md" : "bg-transparent"
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

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-xl">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-red-500 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <Link href="/course">
            <Button className="bg-red-600 text-white hover:bg-red-700 font-medium px-6 py-5 rounded-md shadow-md transition cursor-pointer">
              Enroll Now
            </Button>
          </Link>

          <Link href="/contact-us">
            <Button className="border border-white text-white hover:border-red-500 hover:text-red-500 font-medium px-6 py-5 rounded-md shadow-md transition cursor-pointer hover:bg-transparent">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                className="text-white bg-transparent border border-white hover:bg-white hover:text-black transition-colors"
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
                    className="text-white px-5 hover:text-red-500 font-medium text-lg transition-all duration-200 py-2"
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

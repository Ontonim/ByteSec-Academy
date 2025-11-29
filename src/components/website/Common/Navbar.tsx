"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/course", label: "Course" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-linear-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={55}
                height={55}
                className="cursor-pointer transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-medium text-[15px] tracking-wide group transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-red-500"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-red-600 to-red-400 transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/course">
              <Button className="relative bg-linear-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 font-semibold px-6 py-2.5 rounded-lg shadow-lg shadow-red-600/30 transition-all duration-300 hover:shadow-red-600/50 hover:scale-105 overflow-hidden group cursor-pointer">
                <span className="relative z-10">Enroll Now</span>
                <div className="absolute inset-0 bg-linear-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>

            <Link href="/contact-us">
              <Button className="relative border-2 border-white/20 text-white hover:border-red-500 hover:text-red-400 font-semibold px-6 py-2.5 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  className="text-white bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  size="icon"
                  aria-label="Toggle menu"
                >
                  {open ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] sm:w-[400px] bg-[#291E1E] border-l border-white/10 backdrop-blur-xl"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-center py-8 border-b border-white/10">
                    <Image
                      src="/images/logo.png"
                      alt="logo"
                      width={60}
                      height={60}
                    />
                  </div>

                  {/* Mobile Menu Items */}
                  <nav className="flex flex-col space-y-2 mt-8 flex-1 p-4">
                    {menuItems.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`font-medium text-lg px-6 py-4 rounded-lg transition-all duration-200 ${
                          pathname === item.href
                            ? "text-white bg-red-600 border border-red-500"
                            : "text-gray-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
                        }`}
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile CTA Buttons */}
                  <div className="flex flex-col gap-3 pb-8 border-t border-white/10 p-4">
                    <Link href="/course" onClick={() => setOpen(false)}>
                      <Button className="w-full border-2 border-white/20 text-white hover:border-red-500 hover:text-red-400 font-semibold py-6 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all duration-300">
                        Enroll Now
                      </Button>
                    </Link>
                    <Link href="/contact-us" onClick={() => setOpen(false)}>
                      <Button className="w-full border-2 border-white/20 text-white hover:border-red-500 hover:text-red-400 font-semibold py-6 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-all duration-300">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

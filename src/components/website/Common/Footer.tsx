import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full text-white py-12 overflow-hidden">
      {/* 🔹 Background Layer (blurred & darkened) */}
      <div className="absolute inset-0 bg-cover bg-red-400 bg-center bg-no-repeat blur-sm brightness-50"></div>
      {/* <div className="absolute inset-0 bg-red/40"></div> */}

      {/* 🔹 Optional dark overlay for extra contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Content Layer */}
      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <Link href="/" className="w-24 h-20">
            <Image
              src="/images/logo.png"
              alt="Footer Logo"
              width={90}
              height={80}
              className="mb-2 w-24 h-20  object-cover"
            />
          </Link>
          <p className="text-gray-200">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
 
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-white text-3xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link
                href="/"
                className="hover:text-white hover:underline transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white hover:underline transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-white hover:underline transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-white hover:underline transition"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-white hover:underline transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-3xl text-white mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-200">
            {/* Phone */}
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#CA9520]" />
              <a
                href="tel:480-432-9579"
                className="hover:underline text-[10px] sm:text-xs md:text-sm transition-colors"
              >
                480-432-9579
              </a>
            </li>

            {/* Email */}
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#CA9520]" />
              <a
                href="mailto:example@example.com"
                className="hover:underline text-[10px] sm:text-xs md:text-sm transition-colors"
              >
                example@example.com
              </a>
            </li>

            {/* Location */}
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#CA9520]" />
              <span className="text-[10px] sm:text-xs md:text-sm">
                Mesa, AZ
              </span>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-semibold text-3xl text-white mb-4">Hours</h3>

          <div className="flex items-center gap-4 mt-2">
            <div className="">
              <Button
                variant="outline"
                className="w-8  text-white bg-[#CA9520] rounded-lg font-medium
                             transition-all duration-300
                              "
              >
                <CalendarDays className="w-10 h-10 sm:w-5 sm:h-5" />
              </Button>
            </div>
            <div className="">
              <div className="">
                <p>Monday - Friday</p>
                <p>6:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative mt-12 border-t container mx-auto border-gray-600 pt-6 text-center text-gray-300 text-sm">
        © 2025 ByteSec Academy v1.0 By Rabee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

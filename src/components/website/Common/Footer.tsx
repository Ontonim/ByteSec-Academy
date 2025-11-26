import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full text-white py-16 bg-[#1E1E1E] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1e1e1e] via-[#2a1d1a] to-black opacity-70"></div>

      {/* Decorative Left Image */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <Image
          src="/images/about-section2-left-img.png"
          alt="Decorative"
          width={200} // adjust size
          height={200} // adjust size
          className="object-contain"
        />
      </div>

      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1 - Logo + About */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={80}
              className="object-contain"
            />
          </Link>

          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempororem ipsum dolor sit amet ametconsectetetur.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Link
              href="#"
              className="p-2 bg-[#2c2c2c] rounded-md hover:bg-red-500 transition"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              className="p-2 bg-[#2c2c2c] rounded-md hover:bg-red-500 transition"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              className="p-2 bg-[#2c2c2c] rounded-md hover:bg-red-500 transition"
            >
              <Linkedin />
            </Link>
          </div>
        </div>

        {/* Column 2 – Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-5">Services</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-red-500 cursor-pointer">
              Security Training
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Cloud Security
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Secure Managed IT
            </li>
            <li className="hover:text-red-500 cursor-pointer">Data Privacy</li>
            {/* <li className="hover:text-red-500 cursor-pointer">
              Industry Certified
            </li> */}
            {/* <li className="hover:text-red-500 cursor-pointer">
              Threat Intelligence
            </li> */}
          </ul>
        </div>

        {/* Column 3 – Support */}
        <div>
          <h3 className="text-2xl font-semibold mb-5">Support</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-red-500 cursor-pointer">Support</li>
            <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-red-500 cursor-pointer">About Us</li>
            <li className="hover:text-red-500 cursor-pointer">FAQ</li>
            {/* <li className="hover:text-red-500 cursor-pointer">Partnerships</li> */}
          </ul>
        </div>

        {/* Column 4 – Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-5">Get in Touch</h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-2">
              <span className="font-bold text-red-500">Email:</span>
              info@bytesec.com
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-red-500">Phone:</span>
              +880 1722 222 222
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-red-500">Address:</span>
              King Street, 3000, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-16 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        Copyright © ByteSec 2025. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

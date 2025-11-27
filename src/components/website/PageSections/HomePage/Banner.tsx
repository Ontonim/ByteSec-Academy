"use client";

import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Paintbrush as Pinterest,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative text-white overflow-hidden h-[85vh] flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,28,28,1)_0%,rgba(32,32,32,1)_40%)] opacity-100"></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-2 tracking-wide">
              Born to Hack. Trained to Secure.
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Cyber Security Training for </span>
              {/* <br /> */}
              <span className="text-red-500">Future Professionals</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            Empowering the Next Generation of Ethical Hackers and Security
            Experts. Gain real-world skills in Web, Network, API, Server & AD
            Pentesting through hands-on labs and live attack simulations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link href={"/course"}>
              <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded transition-colors duration-200 cursor-pointer">
                Start Learning
              </Button>
            </Link>
            <button className="border-2 border-slate-400 hover:border-red-500 text-slate-400 hover:text-red-500 p-3 rounded transition-colors duration-200 cursor-pointer">
              <Play size={20} fill="currentColor" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-4">
            <div className="h-px w-12 bg-slate-600" />
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <Pinterest size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="mt-12 lg:mt-0">
          <Image
            src="https://designingmedia.com/redlight/wp-content/uploads/2023/12/banner-img.png"
            alt="Cyber security illustration"
            width={550}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

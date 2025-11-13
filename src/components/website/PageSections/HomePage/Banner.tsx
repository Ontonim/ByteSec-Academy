"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative bg-[#141414] text-white overflow-hidden h-screen flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:gap-12">
        {/* Left Content */}
        <div className="max-w-2xl space-y-6">
          <p className="text-red-500 font-semibold uppercase tracking-wide">
            Born to Hack. Trained to Secure.
          </p>
          <h1 className="text-4xl font-extrabold sm:text-5xl leading-tight">
            Cyber Security Training for <br />
            <span className="text-white">Future Professionals</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Empowering the Next Generation of Ethical Hackers and Security
            Experts. Gain real-world skills in Web, Network, API, Server & AD
            Pentesting through hands-on labs and live attack simulations.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="bg-red-600 text-white hover:bg-transparent hover:border font-medium px-6 py-3 rounded-md shadow-md transition "
            >
              Start Learning
            </a>
            <button className="border border-white text-gray-300 hover:bg-red-700 px-4 py-3 rounded-md flex items-center gap-2 transition cursor-pointer">
              <Play className="w-4 h-4 fill-current" />
              Watch Video
            </button>
          </div>

        </div>

        {/* Right Illustration */}
        <div className="mt-12 lg:mt-0">
          <Image
            src="/images/undraw_dev-productivity_5wps-removebg-preview.png"
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

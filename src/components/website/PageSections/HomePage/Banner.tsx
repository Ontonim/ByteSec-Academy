"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin, Paintbrush as Pinterest ,Play} from 'lucide-react'

export default function Banner() {
  return (
    <section className="relative bg-[#141414] text-white overflow-hidden h-screen flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:gap-12">
         <div className="flex flex-col justify-center space-y-8">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-2 tracking-wide">
              ENTERPRISE SECURITY SOLUTIONS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Cyber Security Solutions for</span>
              <br />
              <span className="text-white">Organizations with</span>
              <br />
              <span className="text-red-500">Critical Infrastructure</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            Protect your organization's most valuable assets with enterprise-grade cybersecurity solutions. Our advanced threat detection and incident response systems safeguard critical infrastructure from evolving security threats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded transition-colors duration-200">
              Discover More
            </button>
            <button className="border-2 border-slate-400 hover:border-red-500 text-slate-400 hover:text-red-500 p-3 rounded transition-colors duration-200">
              <Play size={20} fill="currentColor" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-4">
            <div className="h-px w-12 bg-slate-600" />
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-red-500 transition-colors">
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

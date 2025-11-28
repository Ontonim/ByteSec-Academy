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
    <section
      className="relative text-white overflow-hidden 
      h-auto lg:h-[85vh] flex items-center pt-24 pb-12"
    >
      <div
        className="absolute inset-0 
        bg-[linear-gradient(135deg,rgba(46,28,28,1)_0%,rgba(32,32,32,1)_40%)]
        opacity-100"
      ></div>

      <div
        className="relative z-10 mx-auto max-w-7xl px-4 
        flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12"
      >
        <div className="space-y-8">
          <div>
            <p className="text-slate-400 text-sm font-medium mb-2 tracking-wide">
              Born to Hack. Trained to Secure.
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Cyber Security Training for </span>
              <span className="text-red-500">Future Professionals</span>
            </h1>
          </div>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            Empowering the Next Generation of Ethical Hackers and Security
            Experts. Gain real-world skills in Web, Network, API, Server & AD
            Pentesting through hands-on labs and live attack simulations.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href={"/course"}>
              <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded">
                Start Learning
              </Button>
            </Link>

            <button
              className="border-2 border-slate-400 hover:border-red-500 
              text-slate-400 hover:text-red-500 p-3 rounded transition-colors"
            >
              <Play size={20} fill="currentColor" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-4">
            <div className="h-px w-12 bg-slate-600" />
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-red-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-red-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-red-500">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-red-500">
                <Pinterest size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="https://designingmedia.com/redlight/wp-content/uploads/2023/12/banner-img.png"
            alt="Cyber security illustration"
            width={500}
            height={400}
            className="object-contain w-full max-w-[350px] md:max-w-[450px] lg:max-w-[550px]"
          />
        </div>
      </div>
    </section>
  );
}

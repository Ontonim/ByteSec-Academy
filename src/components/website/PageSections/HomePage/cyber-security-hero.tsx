import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CyberSecurityHero() {
  return (
    <section className="relative bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-3xl top-20 -left-48"></div>
        <div className="absolute w-96 h-96 bg-slate-800/40 rounded-full blur-3xl bottom-20 -right-48"></div>
      </div> */}

      {/* Content container */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Skewed image container with perspective */}
              <div className="relative transform lg:-skew-y-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cyber-security-left-img-Vzrgw0GYFignQsDCfRBs1VXDBSsfuo.png"
                  alt="Advanced cybersecurity with mobile and laptop security payment interface"
                  width={400}
                  height={500}
                  className="w-full h-auto "
                  priority
                />
              </div>

              <div className="absolute top-1/2 -left-12 w-16 h-16 bg-slate-700 rounded-full opacity-50 blur-lg"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-white">Advanced</span>{" "}
                <span className="text-red-500">Cyber Security</span>{" "}
                <span className="text-white">Provider</span>
              </h1>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing eliteanean commo
              doligula eget dolorenean massa. In enim justo, rhoncus ut,
              imperdiet avene natis vitae justo nullam dictum felis eu pede
              mollis pretium Inte ger tincid unt cras dapibus
            </p>

            <p className="text-base text-slate-500 leading-relaxed max-w-lg">
              Vamus elementum semper nisi aenean vulputate eleife nd tellus
              onsec tet ueradip.
            </p>

            <div className="pt-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 cursor-pointer">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

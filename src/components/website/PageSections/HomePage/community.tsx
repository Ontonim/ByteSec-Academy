import { Button } from "@/components/ui/button";
import Image from "next/image";

const Community = () => {
  return (
    <section className="relative py-10">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-red-600/20 to-transparent rounded-2xl blur-2xl"></div>
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Community and Support"
                className="relative rounded-2xl w-full max-w-lg h-auto object-cover shadow-2xl border border-red-500/30"
                width={700}
                height={700}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-px bg-red-600"></div>
              <span className="text-red-600 font-semibold text-sm tracking-widest uppercase">
                Community
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Always Here for Our{" "}
                <span className="text-red-600">Students</span>
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Community & Support
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-lg">
              We provide unlimited support on any topic or question, ensuring no
              student is left behind. Every week, there will be a dedicated
              support session, plus active peer groups where students help each
              other. If someone gets stuck, our mentors step in with solutions,
              keeping your learning smooth and continuous.
            </p>

            {/* Features List */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-1 h-1 bg-red-600 rounded-full mt-2.5 shrink-0"></div>
                <p className="text-gray-300">
                  Dedicated weekly support sessions with expert mentors
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-1 h-1 bg-red-600 rounded-full mt-2.5 shrink-0"></div>
                <p className="text-gray-300">
                  Active peer learning groups for collaborative growth
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-1 h-1 bg-red-600 rounded-full mt-2.5 shrink-0"></div>
                <p className="text-gray-300">
                  Unlimited help on any topic anytime you need it
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 cursor-pointer">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;

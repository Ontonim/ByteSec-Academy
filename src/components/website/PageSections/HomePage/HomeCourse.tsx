"use client";

import { Shield, Lock, Code2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Advanced Ethical Hacking & Cybersecurity Training",
    icon: Code2,
    level: "Advanced",
    price: "৳7,500",
    status: "live",
    description: "Master ethical hacking and cybersecurity skills",
    featured: true,
  },
  {
    id: 2,
    title: "Advanced Bug Bounty & Web Exploitation Training",
    icon: Lock,
    level: "Advanced",
    price: "৳15,000",
    status: "live",
    description: "Master bug bounty hunting and web exploitation techniques",
    featured: true,
  },
  {
    id: 3,
    title: "Professional SOC Analyst Live Training",
    icon: Shield,
    level: "Advanced",
    price: "৳6,000",
    status: "live",
    description: "Master Security Operations Center skills for a pro career",
    featured: true,
  },
  {
    id: 4,
    title: "Certified Enterprise Lateral Movement Expert",
    icon: Database,
    level: "Advanced",
    price: "Coming Soon",
    status: "coming-soon",
    description: "Master lateral movement in enterprise environments",
    featured: false,
  },
];

export default function HomeCourse() {
  return (
    <div className=" px-4 py-16 relative overflow-hidden">
      <div
        className="
    absolute inset-0 
    bg-[radial-gradient(ellipse_at_center,rgba(46,28,28,0.35)_0%,rgba(32,32,32,0)_80%)]
    backdrop-blur-sm
  "
      ></div>

      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-70">
        <Image
          src="/images/about-us-section-right-icon.png"
          alt="Decorative"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 relative z-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Cybersecurity Courses
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Advance your skills with industry-leading courses. From ethical
            hacking to red team operations, boost your cybersecurity career.
          </p>
        </div>

        {/* ----- Courses Grid ----- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 relative z-20">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="
                relative flex flex-col p-8 rounded-3xl
                bg-[rgba(20,20,20,0.65)]
                backdrop-blur-md
                border border-gray-700/60
                shadow-[0_0_25px_rgba(255,0,0,0.08)]
                hover:shadow-[0_0_35px_rgba(255,0,0,0.15)]
                hover:scale-[1.03]
                transition-all duration-300
              "
              >
                {/* Featured Badge */}
                {course.featured && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md tracking-wide">
                    Featured
                  </span>
                )}

                {/* Status Badge */}
                <div className="mb-4">
                  {course.status === "live" ? (
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-sm">
                      Live Now
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded-full shadow-sm">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-20 h-20 bg-gray-800/30 rounded-full mx-auto transition-transform duration-300 hover:scale-110">
                  <IconComponent className="w-8 h-8 text-red-500" />
                </div>

                {/* Title */}
                <h3 className="text-2xl text-white font-semibold mb-1 text-center hover:text-red-500 transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 text-center">
                  {course.level}
                </p>

                <p className="text-gray-300 text-sm mb-6 text-center">
                  {course.description}
                </p>

                {/* Price & CTA */}
                <div className="mt-auto border-t border-gray-700 pt-6 flex flex-col gap-4">
                  <span
                    className={`text-2xl md:text-3xl font-bold text-center ${
                      course.status === "live"
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {course.price}
                  </span>

                  {course.status === "live" ? (
                    <Link href={`/course/${course.id}`}>
                      <Button className="w-full font-semibold border border-red-400 hover:bg-red-700 text-white transition-all cursor-pointer">
                        View Details
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="w-full font-semibold bg-gray-800 text-gray-200 border border-red-400 cursor-not-allowed"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

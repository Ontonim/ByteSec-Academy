"use client";
import { Eye, LoaderPinwheel } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
      {/* Left Image */}
      <div className="flex-shrink-0">
        <Image
          src="/images/approach.jpg"
          alt="About Us"
          width={600}
          height={600}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 text-white space-y-6">
        <p className="text-gray-300 text-lg font-semibold my-10">
          TheTeamPhoenix (TTP) is a Bangladesh-based{" "}
          <span className="text-red-400">
            cybersecurity social enterprise and collective
          </span>{" "}
          dedicated to advancing security, innovation, and community growth. We
          combine research, education, real-world solutions, and career
          development to address cybersecurity challenges in South Asia and
          globally.
        </p>

        {/* Tabs */}
        <div className="space-y-4">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-4 py-2 rounded-full font-semibold flex items-center cursor-pointer ${
                activeTab === "mission"
                  ? "bg-red-500 text-white"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              <LoaderPinwheel size={20} />{" "}
              <span className="ml-2 text-[16px]">Our Mission</span>
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-4 py-2 rounded-full font-semibold flex items-center cursor-pointer  ${
                activeTab === "vision"
                  ? "bg-red-500 text-white"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              <Eye size={20} />{" "}
              <span className="ml-2 text-[16px]">Our Vision</span>
            </button>
          </div>
          <div
            className={`bg-gray-900 p-4 rounded-lg  border-gray-700 py-8 my-4 ${
              activeTab === "mission"
                ? "border-l-4 border-red-500"
                : "border-l-4 border-red-500"
            }`}
          >
            {activeTab === "mission" ? (
              <p>
                To empower individuals, fortify defenses, and ensure sustained
                growth in the ever-evolving realm of Cyber Security and
                Technology.
              </p>
            ) : (
              <p>
                To be a globally recognized force driving innovation, education,
                and research in Cyber Security and Technology, resulting in
                safer and smarter Cyberspace.
              </p>
            )}
          </div>
        </div>

        {/* Follow Section */}
        <div className="mt-6">
          <h2 className="text-gray-400 font-semibold mb-2">
            Follow Our Journey
          </h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full transition hover:bg-red-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full transition hover:bg-red-500"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full  transition hover:bg-red-500"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

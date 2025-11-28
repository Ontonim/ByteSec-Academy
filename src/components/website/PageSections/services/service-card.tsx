"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string | StaticImport;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-8 rounded transition-all duration-300 ${
        isHovered
          ? "bg-neutral-800 border-b-4 border-red-500"
          : "bg-neutral-800/50 border-neutral-700"
      }`}
    >
      {" "}
      <div className={`w-20 mb-6 rounded-lg p-4 group bg-[#202020]`}>
        <Image
          alt={service.title}
          src={service.image}
          width={200}
          height={200}
          className="transition duration-300 group-hover:grayscale group-hover:brightness-200"
        />
      </div>
      <h3
        className={`text-xl font-bold mb-4 transition-colors duration-300 ${isHovered ? "text-white" : "text-white"}`}
      >
        {service.title}
      </h3>
      <p
        className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${
          isHovered ? "text-neutral-300" : "text-neutral-400"
        }`}
      >
        {service.description}
      </p>
      <a
        href="#"
        className={`inline-block text-sm font-medium transition-colors duration-300 ${
          isHovered
            ? "text-red-500 hover:text-red-400"
            : "text-neutral-500 hover:text-neutral-300"
        }`}
      >
        Learn More {">"}
      </a>
    </div>
  );
}

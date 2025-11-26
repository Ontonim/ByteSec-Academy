"use client";

import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
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
      className={`relative p-8 rounded-lg transition-all duration-300 ${
        isHovered
          ? "bg-neutral-800 border-l-4 border-red-500"
          : "bg-neutral-800/50 border-l-4 border-neutral-700"
      }`}
    >
      {" "}
      <div className="text-5xl mb-6">{service.icon}</div>
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

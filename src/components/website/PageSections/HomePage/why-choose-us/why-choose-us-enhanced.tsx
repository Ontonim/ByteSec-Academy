"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, Lock, Award } from "lucide-react";
import Image from "next/image";

interface CardData {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    id: "security",
    icon: <Shield className="w-8 h-8" />,
    title: "Security Services",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
  },
  {
    id: "privacy",
    icon: <Lock className="w-8 h-8" />,
    title: "Data Privacy",
    description:
      "Lorem ipsum dolor sit ametconsectetuer adipiscing elitenean commodo ligula eget dolor aenean massa",
  },
  {
    id: "certified",
    icon: <Award className="w-8 h-8" />,
    title: "Industry Certified",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusenean",
  },
];

export function WhyChooseUsEnhanced() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-10">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>

      {/* Decorative Left Image */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-70">
        <Image
          src="/images/about-us-section-right-icon.png"
          alt="Decorative"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elitanean commodo
            ligula eget dolorenean massa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-8 rounded-lg transition-all duration-500 cursor-pointer transform ${
                hoveredCard === card.id
                  ? "bg-[#191919] shadow-red-600/20 scale-105"
                  : "bg-[#191919] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30"
              }`}
            >
              {/* Icon Container */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 transition-all duration-300 ${
                  hoveredCard === card.id
                    ? "bg-red-600 text-white"
                    : "bg-red-600/10 text-red-500"
                }`}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={`/why-choose-us/${card.id}`}
                className={`inline-flex items-center text-sm font-semibold transition-all duration-300 ${
                  hoveredCard === card.id ? "text-red-400" : "text-slate-400"
                } hover:text-red-400 group`}
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              {/* Bottom border accent */}
              {hoveredCard === card.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

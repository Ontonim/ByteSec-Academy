import React from "react";
import Image from "next/image";

export default function TrustedCompaniesSection() {
  const cards = [
    {
      title: "VIRTUAL EVENTS",
      description:
        "Cum sociis natoque penatibus et magnisd is parturient montes nasc.",
      date: "December 18, 2023",
    },
    {
      title: "NEW REPORT",
      description:
        "Cum sociis natoque penatibus et magnisd is parturient montes nasc.",
      date: "December 18, 2023",
    },
    {
      title: "EXPERT PANEL",
      description:
        "Cum sociis natoque penatibus et magnisd is parturient montes nasc.",
      date: "December 18, 2023",
    },
  ];

  const logos = [
    "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon4.png",
    "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon3.png",
    "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon2.png",
    "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon1.png",
    "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon5.png",
    "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon6.png",
  ];

  return (
    <div className="text-white py-16 px-4 relative">
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>
      {/* Top Cards Section */}
      <div className="max-w-7xl mx-auto mb-20 relative">
        <div className="flex flex-wrap justify-center gap-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-1 min-w-[280px] px-8 py-6"
              style={{
                borderRight:
                  index < cards.length - 1 ? "1px dashed #444" : "none",
              }}
            >
              <h3 className="text-orange-500 font-semibold text-sm mb-4 tracking-wider">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {card.description}
              </p>
              <p className="text-gray-600 text-xs">{card.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Trusted Over 2300+ Companies in the World
        </h2>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Company logo ${index + 1}`}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

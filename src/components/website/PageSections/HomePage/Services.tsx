"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

export default function Services() {
  const services = [
    {
      title: "Our Mission",
      description: `
- Empower individuals and organizations to **defend against real-world cyber threats**.
- Build a **community of ethical hackers and security experts**.
- Bridge the gap between theory and practical cybersecurity skills.
      `,
      date: "CTA: “Discover Our Mission”",
    },
    {
      title: "Courses & Labs",
      description: `
- **Hands-On Training:** Live labs, real-world scenarios, and penetration testing exercises.
- **Certification Prep:** CEH, OSCP, OSCE3, OSWA, OSEE, CRTA, CRTO, and other globally recognized programs.
      `,
      date: "Flexible Learning: Self-paced online courses + live mentoring sessions.",
    },
    {
      title: "Career Pathways",
      description: `
- **Job-Ready Skills:** Prepare for roles like PenTester, SOC Analyst, or Security Engineer.
- **Resume & Interview Guidance:** Tailored support to land top cybersecurity jobs.
- **Internships & Projects:** Real-world experience to boost your portfolio.
      `,
      date: "CTA: “Start Your Career Path”",
    },
  ];

  return (
    <section className="relative bg-[#141414] text-white overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 hover:bg-[#553030] transition-all duration-300"
            >
              <span className="inline-block bg-black text-orange-500 text-sm font-bold px-4 py-1 rounded-sm mb-4">
                {service.title}
              </span>

              <div className="text-gray-300 text-sm mb-4 leading-relaxed space-y-2">
                <ReactMarkdown>{service.description}</ReactMarkdown>
              </div>

              <p className="text-gray-400 text-xs italic">{service.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

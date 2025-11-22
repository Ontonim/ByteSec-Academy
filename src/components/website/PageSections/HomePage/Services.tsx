// "use client";

// import React from "react";
// import ReactMarkdown from "react-markdown";

// export default function Services() {
//   const services = [
//     {
//       title: "Our Mission",
//       description: `
// - Empower individuals and organizations to **defend against real-world cyber threats**.
// - Build a **community of ethical hackers and security experts**.
// - Bridge the gap between theory and practical cybersecurity skills.
//       `,
//       date: "CTA: “Discover Our Mission”",
//     },
//     {
//       title: "Courses & Labs",
//       description: `
// - **Hands-On Training:** Live labs, real-world scenarios, and penetration testing exercises.
// - **Certification Prep:** CEH, OSCP, OSCE3, OSWA, OSEE, CRTA, CRTO, and other globally recognized programs.
//       `,
//       date: "Flexible Learning: Self-paced online courses + live mentoring sessions.",
//     },
//     {
//       title: "Career Pathways",
//       description: `
// - **Job-Ready Skills:** Prepare for roles like PenTester, SOC Analyst, or Security Engineer.
// - **Resume & Interview Guidance:** Tailored support to land top cybersecurity jobs.
// - **Internships & Projects:** Real-world experience to boost your portfolio.
//       `,
//       date: "CTA: “Start Your Career Path”",
//     },
//   ];

//   return (
//     <section className="relative bg-[#141414] text-white overflow-hidden py-20">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div>

//       {/* Content container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-8 hover:bg-[#553030] transition-all duration-300"
//             >
//               <span className="inline-block bg-black text-orange-500 text-sm font-bold px-4 py-1 rounded-sm mb-4">
//                 {service.title}
//               </span>

//               <div className="text-gray-300 text-sm mb-4 leading-relaxed space-y-2">
//                 <ReactMarkdown>{service.description}</ReactMarkdown>
//               </div>

//               <p className="text-gray-400 text-xs italic">{service.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client"

import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Our Mission",
    keyPoints: [
      "Empower individuals and organizations to defend against real-world cyber threats",
      "Build a community of ethical hackers and security experts",
      "Bridge the gap between theory and practical cybersecurity skills",
    ],
    ctaText: "Discover Our Mission",
    icon: Zap,
  },
  {
    title: "Courses & Labs",
    keyPoints: [
      "Hands-On Training: Live labs, real-world scenarios, and penetration testing exercises",
      "Certification Prep: CEH, OSCP, OSCE3, OSWA, OSEE, CRTA, CRTO, and other globally recognized programs",
      "Flexible Learning: Self-paced online courses + live mentoring sessions",
    ],
    ctaText: "Explore Courses",
    icon: Users,
  },
  {
    title: "Career Pathways",
    keyPoints: [
      "Job-Ready Skills: Prepare for roles like PenTester, SOC Analyst, or Security Engineer",
      "Resume & Interview Guidance: Tailored support to land top cybersecurity jobs",
      "Internships & Projects: Real-world experience to boost your portfolio",
    ],
    ctaText: "Start Your Career Path",
    icon: TrendingUp,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden py-20">
      {/* <div className="absolute inset-0 bg-linear-to-r from-[#3f1111] via-[#250505] to-[#141414] opacity-100"></div> */}

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <div
                key={idx}
                className="group relative bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-red-600/20 rounded-lg w-fit group-hover:bg-red-600/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-red-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-red-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Key Points */}
                  <ul className="space-y-4 mb-8 grow">
                    {service.keyPoints.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-3">
                        <span className="text-red-500 mt-1 font-bold text-lg shrink-0">•</span>
                        <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer">
                    {service.ctaText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

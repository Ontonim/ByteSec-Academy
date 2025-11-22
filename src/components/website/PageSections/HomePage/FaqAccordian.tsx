"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Do I need a programming background to join?",
    answer:
      "No, our courses are designed for beginners as well as advanced learners. For those without programming experience, we provide a free basic course to get you started.",
  },
  {
    question: "Are the courses fully online?",
    answer:
      "Yes, all our courses are 100% online and lab-based, so you can learn from anywhere at your own pace.",
  },
  {
    question: "How long will it take to complete the course?",
    answer:
      "Course duration depends on your pace, but typically you can complete within a few months, including labs and projects.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes, upon completing the course, you will receive an international-standard certificate with online verification.",
  },
  {
    question: "Can I get practical experience?",
    answer:
      "Absolutely! We provide real-world projects, internships, and marketplace-based client work, giving you hands-on experience.",
  },
  {
    question: "What kind of support is available?",
    answer:
      "Students get weekly support sessions, active peer groups, and mentor assistance whenever needed.",
  },
  {
    question: "Can I start a career after this course?",
    answer:
      "Yes! Our course prepares you for roles like Ethical Hacker, Cybersecurity Specialist, Security Analyst, Digital Forensics Expert, or even freelance cybersecurity consulting.",
  },
  {
    question: "Is there any lifetime access to course materials?",
    answer:
      "Yes, once enrolled, you get lifetime access to all course materials, labs, and updates.",
  },
  {
    question: "Are these skills in demand internationally?",
    answer:
      "Yes, cybersecurity is a high-demand career globally, and our internationally recognized certifications help you stand out in the job market.",
  },
  {
    question: " Can I pay in installments?",
    answer:
      "Yes, we offer 2-part installment payment options for student convenience.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className={`w-full text-left p-6 transition-all duration-300 flex items-center justify-between cursor-pointer ${
              openIndex === index
                ? "bg-red-600 text-white"
                : "bg-slate-800 text-gray-300 hover:bg-slate-700"
            }`}
          >
            <span className="font-semibold text-lg">{item.question}</span>
            <ChevronDown
              size={24}
              className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <div className="bg-slate-900 px-6 py-4 text-gray-400 border-t border-slate-700">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

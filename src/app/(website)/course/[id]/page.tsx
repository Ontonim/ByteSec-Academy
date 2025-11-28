"use client";

import { useState } from "react";
import {
  ChevronDown,
  Check,
  BookOpen,
  Zap,
  FileCheck,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const courseData = {
  id: 1,
  title: "Certified Ethical Hacking & Bug Bounty Expert",
  tagline: "Master Bug Bounty & Penetration Testing",
  description:
    "Learn from industry experts and become proficient in identifying vulnerabilities, conducting penetration tests, and participating in bug bounty programs. This comprehensive course covers everything from reconnaissance to exploitation.",
  duration: "12 weeks",
  level: "Advanced",
  students: "2,450+",
  rating: "4.9",

  hero: {
    keyPoints: [
      "Real-world penetration testing scenarios",
      "Hands-on lab environments with live targets",
      "Industry-recognized certification",
      "24/7 expert mentorship and support",
      "Career advancement resources",
      "Lifetime access to course materials",
    ],
    image:
      "https://cdn.packtpub.com/article-hub/articles/06c5f82691f91981124df9762de95473.jpg",
  },

  tabs: {
    syllabus: [
      {
        section: "Module 1: Foundations & Reconnaissance",
        lessons: [
          "Networking fundamentals and OSI model",
          "Active and passive reconnaissance techniques",
          "OSINT tools and methodologies",
          "Target scoping and legal considerations",
          "Lab: Reconnaissance Project",
        ],
      },
      {
        section: "Module 2: Scanning & Enumeration",
        lessons: [
          "Network scanning with Nmap",
          "Service enumeration and version detection",
          "Vulnerability scanning tools",
          "Database enumeration techniques",
          "Lab: Full network enumeration",
        ],
      },
      {
        section: "Module 3: Exploitation Techniques",
        lessons: [
          "Web application vulnerabilities (OWASP Top 10)",
          "SQL injection and command injection",
          "Authentication bypass methods",
          "Privilege escalation techniques",
          "Lab: Multi-stage exploitation",
        ],
      },
      {
        section: "Module 4: Post-Exploitation & Reporting",
        lessons: [
          "Maintaining access and persistence",
          "Data exfiltration methods",
          "Covering tracks and forensics evasion",
          "Professional report writing",
          "Lab: Complete penetration test engagement",
        ],
      },
      {
        section: "Module 5: Bug Bounty Specialization",
        lessons: [
          "Finding bugs systematically",
          "Bug bounty program selection",
          "Vulnerability disclosure best practices",
          "Writing effective bug reports",
          "Real-world bug bounty cases",
        ],
      },
    ],

    highlights: [
      {
        title: "Live Lab Environment",
        description:
          "Access to vulnerable VMs and realistic network environments for hands-on practice without risk",
      },
      {
        title: "Industry Experts",
        description:
          "Learn from certified security professionals with 15+ years of penetration testing experience",
      },
      {
        title: "Project-Based Learning",
        description:
          "Complete 5 capstone projects that showcase real penetration testing engagements",
      },
      {
        title: "Career Support",
        description:
          "Resume review, interview prep, and job placement assistance from our career team",
      },
      {
        title: "Certification Ready",
        description:
          "Prepare for CEH, OSCP, and other industry-recognized certifications",
      },
      {
        title: "Community Access",
        description:
          "Join 50,000+ students in our exclusive Discord community and networking events",
      },
    ],

    prerequisites: [
      "Basic understanding of networking concepts (TCP/IP, DNS, HTTP)",
      "Familiarity with Linux command line and bash scripting",
      "Understanding of at least one programming language (Python/JavaScript)",
      "Comfortable troubleshooting technical issues independently",
      "Access to a computer with minimum 8GB RAM for lab VMs",
      "Willingness to follow ethical hacking guidelines and laws",
    ],

    certification: [
      {
        step: "1. Complete All Modules",
        description:
          "Finish all 5 modules with at least 80% quiz scores to be eligible",
      },
      {
        step: "2. Capstone Project",
        description:
          "Submit a complete penetration test report on a simulated engagement",
      },
      {
        step: "3. Certification Exam",
        description:
          "Pass our comprehensive 3-hour practical exam (70% passing score required)",
      },
      {
        step: "4. Receive Certificate",
        description:
          "Get your digital certificate recognized by the industry and employers",
      },
    ],
  },

  faq: [
    {
      question: "What if I have no penetration testing experience?",
      answer:
        "This course is designed for intermediate learners with basic networking knowledge. We provide comprehensive foundational modules, and our mentors offer personalized guidance to help you catch up.",
    },
    {
      question: "Is this course legal and ethical?",
      answer:
        "Absolutely. We strictly follow ethical hacking guidelines and only practice on systems you own or have explicit permission to test. All labs comply with applicable laws and regulations.",
    },
    {
      question: "How long does it take to complete?",
      answer:
        "The course typically takes 12 weeks with 10-15 hours per week of study. However, you have lifetime access, so you can go at your own pace.",
    },
    {
      question: "Will I get a job after completing this course?",
      answer:
        "While we can't guarantee employment, our students have a 85% placement rate within 6 months. We provide career coaching, resume building, and job placement assistance.",
    },
    {
      question: "Can I access the course on mobile?",
      answer:
        "Video lectures and course materials are accessible on mobile, but labs require a desktop/laptop for hands-on practice.",
    },
    {
      question: "What's the refund policy?",
      answer:
        "We offer a 30-day money-back guarantee if you're not satisfied with the course. No questions asked.",
    },
  ],
};

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState("syllabus");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-white relative">
      {/* Navigation */}
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(46,28,28,0.3) 0%, rgba(46,28,28,0.8) 50%, rgba(46,28,28,0.3) 100%)",
        }}
      ></div>

      {/* Decorative Left Image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <Image
          src="/images/about-section2-left-img.png"
          alt="Decorative"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="border-b border-gray-800 px-4 py-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link
              href="/course"
              className="text-gray-400 hover:text-white transition"
            >
              Courses
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-red-500">{courseData.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-red-600/20 text-red-400 text-xs font-semibold rounded-full mb-4">
                LIVE NOW
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
                {courseData.title}
              </h1>
              <p className="text-xl text-gray-400 mb-2">{courseData.tagline}</p>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {courseData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 py-6 border-y border-gray-800">
              <div>
                <p className="text-gray-400 text-sm mb-1">Duration</p>
                <p className="text-2xl font-bold text-white">
                  {courseData.duration}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Students</p>
                <p className="text-2xl font-bold text-white">
                  {courseData.students}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Rating</p>
                <p className="text-2xl font-bold text-red-500">
                  ★ {courseData.rating}
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-3 mb-10">
              {courseData.hero.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="w-full md:w-auto px-8 py-6 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg transition-all cursor-pointer">
              Enroll Now
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-red-600/20 to-red-600/0 rounded-lg blur-3xl"></div>
              <Image
                src={courseData.hero.image || "/placeholder.svg"}
                alt="Course hero"
                className="w-full rounded-lg border border-red-600/30 relative z-10"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Tab Navigation */}
        <div className="flex gap-0 border-b border-gray-800 mb-12 overflow-x-auto">
          {[
            { id: "syllabus", label: "Syllabus", icon: BookOpen },
            { id: "highlights", label: "Highlights", icon: Zap },
            { id: "prerequisites", label: "Prerequisites", icon: FileCheck },
            { id: "certification", label: "Certification", icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "border-red-600 text-red-500"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div>
          {/* Syllabus Tab */}
          {activeTab === "syllabus" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseData.tabs.syllabus.map((module, idx) => (
                <div
                  key={idx}
                  className="bg-[#191919] border border-gray-800 rounded-lg p-6 hover:border-red-600/30 transition-all"
                >
                  <h3 className="text-xl font-bold text-red-500 mb-4">
                    {module.section}
                  </h3>
                  <ul className="space-y-3">
                    {module.lessons.map((lesson, lessonIdx) => (
                      <li key={lessonIdx} className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">→</span>
                        <span className="text-gray-300">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Highlights Tab */}
          {activeTab === "highlights" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseData.tabs.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-[#191919] border border-gray-800 rounded-lg p-6 hover:border-red-600/60 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Prerequisites Tab */}
          {activeTab === "prerequisites" && (
            <div className="bg-[#191919] border border-gray-800 rounded-lg p-8">
              <ul className="space-y-4">
                {courseData.tabs.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-600 flex items-center justify-center flex-linear-0 mt-1">
                      <span className="text-red-500 font-semibold">
                        {idx + 1}
                      </span>
                    </div>
                    <span className="text-gray-300 text-lg pt-1">{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Certification Tab */}
          {activeTab === "certification" && (
            <div>
              <div className="space-y-6">
                {courseData.tabs.certification.map((cert, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/20 border-2 border-red-600 flex items-center justify-center text-red-500 font-bold text-lg">
                        {idx + 1}
                      </div>
                      {idx < courseData.tabs.certification.length - 1 && (
                        <div className="w-1 h-16 bg-linear-to-b from-red-600 to-transparent mt-2"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {cert.step}
                      </h3>
                      <p className="text-gray-400">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {courseData.faq.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#191919] border border-gray-800 rounded-lg overflow-hidden hover:border-red-600/30 transition-all"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition-all cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-white text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-red-500 shrink-0 transition-transform ${
                    expandedFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedFaq === idx && (
                <div className="px-6 pb-4 border-t border-gray-800 pt-4">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6">Ready to start learning?</h2>
        <p className="text-gray-400 text-lg mb-8">
          Join thousands of students who&apos;ve already transformed their
          careers with this course.
        </p>
        <Button className="px-8 py-6 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg transition-all cursor-pointer">
          Enroll Now
        </Button>
      </section>

      {/* Footer Spacing */}
      <div className="py-16"></div>
    </div>
  );
}

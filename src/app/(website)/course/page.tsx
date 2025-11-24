import { Shield, Lock, Code2, Server, Database, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Certified Ethical Hacking & Bug Bounty Expert",
    icon: Code2,
    level: "Advanced",
    price: "৳15,000",
    status: "live",
    description: "Master ethical hacking and bug bounty hunting techniques",
    features: [
      "Comprehensive Bug Bounty Training",
      "Real-world Penetration Testing",
      "Web Application Security",
      "24/7 Live Support",
      "Hands-on Labs Access",
      "Industry Certification Prep",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Certified Active Directory Red Team Expert",
    icon: Lock,
    level: "Advanced",
    price: "Coming Soon",
    status: "coming-soon",
    description: "Advanced Active Directory attack and defense techniques",
    features: [
      "Active Directory Exploitation",
      "Lateral Movement Techniques",
      "Credential Management Attacks",
      "Expert Mentorship",
      "Red Team Simulations",
      "Enterprise Security Focus",
    ],
    featured: false,
  },
  {
    id: 3,
    title: "Certified Red Team Analyst",
    icon: Shield,
    level: "Advanced",
    price: "Coming Soon",
    status: "coming-soon",
    description: "Learn red team analysis and threat modeling",
    features: [
      "Threat Intelligence Analysis",
      "Attack Surface Mapping",
      "Risk Assessment",
      "Priority Support",
      "Advanced Tools Training",
      "Certification Included",
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Certified Enterprise Lateral Movement Expert",
    icon: Database,
    level: "Advanced",
    price: "Coming Soon",
    status: "coming-soon",
    description: "Master lateral movement in enterprise environments",
    features: [
      "Network Traversal Techniques",
      "Privilege Escalation",
      "Post-Exploitation Strategies",
      "Dedicated Mentor",
      "Enterprise Lab Access",
      "Advanced Certification",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Certified Enterprise Security Controls Attack Specialist",
    icon: Server,
    level: "Advanced",
    price: "Coming Soon",
    status: "coming-soon",
    description: "Bypass and test enterprise security controls",
    features: [
      "Security Controls Analysis",
      "Bypass Techniques",
      "Compliance Testing",
      "Expert Q&A Sessions",
      "Real-world Case Studies",
      "Professional Certification",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Certified Exploit Development Professional",
    icon: Network,
    level: "Advanced",
    price: "Coming Soon",
    status: "coming-soon",
    description: "Advanced exploit development and vulnerability research",
    features: [
      "Exploit Writing Fundamentals",
      "Vulnerability Research",
      "Binary Analysis",
      "Expert Guidance",
      "Lab Environment Access",
      "Industry Recognition",
    ],
    featured: false,
  },
  {
    id: 7,
    title: "Certified Red Team Specialist",
    icon: Code2,
    level: "Advanced",
    price: "Coming Soon",
    status: "coming-soon",
    description: "Comprehensive red team operations and strategy",
    features: [
      "Full Red Team Operations",
      "Engagement Planning",
      "Team Coordination",
      "Advanced Support",
      "Command & Control Systems",
      "Strategic Assessment",
    ],
    featured: false,
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen relative">
     <div className="absolute inset-0 bg-[#202020] opacity-100"></div>
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-white">
          Cybersecurity Courses
        </h1>
        <p className="text-gray-100 max-w-2xl mx-auto text-lg mb-8">
          Master advanced cybersecurity skills with industry-leading courses.
          From ethical hacking to red team operations, advance your career.
        </p>
        <div className="flex justify-center gap-2">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-red-500">Courses</span>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className={`rounded-lg p-8 transition-all duration-300 flex flex-col ${
                  course.featured
                    ? "bg-[#191919] border-2 border-red-600 shadow-2xl"
                    : "bg- border border-gray-800 hover:border-gray-700"
                }`}
              >
                {course.status === "live" && (
                  <div className="mb-4 inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                    Live Now
                  </div>
                )}
                {course.status === "coming-soon" && (
                  <div className="mb-4 inline-block px-3 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded-full">
                    Coming Soon
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-gray-800 rounded-lg">
                  <IconComponent className="w-8 h-8 text-red-500" />
                </div>

                {/* Course Title and Level */}
                <h3 className="text-xl text-white font-bold mb-2">{course.title}</h3>
                <p className="text-gray-100 text-sm mb-4">{course.level}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 grow">
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 text-sm flex items-start gap-3"
                    >
                      <span className="text-red-500 mt-1 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="border-t border-gray-800 pt-6">
                  <div className="mb-4">
                    <span
                      className={`text-3xl font-bold ${course.status === "live" ? "text-red-500" : "text-gray-500"}`}
                    >
                      {course.price}
                    </span>
                  </div>
                  {course.status === "live" ? (
                    <Link href={`/course/${course.id}`}>
                      <Button className="w-full font-semibold bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-all">
                        Enroll Now
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="w-full font-semibold bg-gray-800 text-gray-400 cursor-not-allowed transition-all"
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

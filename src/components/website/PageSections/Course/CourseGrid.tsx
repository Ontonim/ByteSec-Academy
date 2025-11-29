import { Shield, Lock, Code2, Server, Database, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Advanced Ethical Hacking & Cybersecurity Training",
    icon: Code2,
    level: "Advanced",
    price: "৳7,500",
    status: "live",
    description: "Master ethical hacking and cybersecurity skills",
    features: [
      "Comprehensive Cybersecurity Training",
      "Real-world Penetration Testing",
      "Network & Web Application Security",
      "24/7 Live Support",
      "Hands-on Labs Access",
      "Industry Certification Prep",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Advanced Bug Bounty & Web Exploitation Training",
    icon: Lock,
    level: "Advanced",
    price: "৳15,000",
    status: "live",
    description: "Master bug bounty hunting and web exploitation techniques",
    features: [
      "Comprehensive Bug Bounty Training",
      "Real-world Vulnerability Exploitation",
      "Web Application Security Testing",
      "24/7 Live Support",
      "Hands-on Labs Access",
      "Industry Certification Prep",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Professional SOC Analyst Live Training",
    icon: Shield,
    level: "Advanced",
    price: "৳6,000",
    status: "live",
    description: "Master Security Operations Center skills for a pro career",
    features: [
      "Comprehensive SOC Analyst Training",
      "Threat Monitoring & Incident Response",
      "SIEM & Security Tools Hands-on",
      "24/7 Live Support",
      "Hands-on Labs Access",
      "Industry Certification Prep",
    ],
    featured: true,
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
];

export default function CoursesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => {
          const IconComponent = course.icon;
          return (
            <div
              key={course.id}
              className={`rounded-lg p-8 transition-all duration-300 flex flex-col ${
                course.featured
                  ? "bg-[#191919] border-2 border-red-400 hover:border-red-600 shadow-2xl"
                  : "bg- border border-red-200 hover:border-red-300"
              }`}
            >
              {course.status === "live" && (
                <div className="mb-4 inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
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
              <h3 className="text-xl text-white font-bold mb-2">
                {course.title}
              </h3>
              <p className="text-gray-100 text-sm mb-4">{course.level}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">{course.description}</p>

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
                    <Button className="w-full font-semibold border border-red-500 hover:bg-red-700 text-white cursor-pointer transition-all">
                      View Details
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className="w-full font-semibold bg-gray-800 text-gray-400 cursor-not-allowed transition-all border border-red-400"
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
  );
}

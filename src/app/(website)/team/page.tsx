"use client"

import { Mail, Linkedin, Twitter, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Eric T. Parker",
    designation: "Network Security",
    bio: "Expert in network infrastructure, penetration testing, and security protocols with 10+ years of experience.",
    image: "https://www.lithasymphony.org/uploads/2/0/9/1/20913348/empheadshot-low-res_orig.jpg",
    social: {
      email: "eric@example.com",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Shira Rubinoff",
    designation: "Security Executive",
    bio: "Leading security initiatives and strategic planning with deep expertise in enterprise cybersecurity governance.",
    image: "https://azurecrazy.com/wp-content/uploads/2020/11/Sarah-Young-Pic-1-1024x1536.jpg",
    social: {
      email: "shira@example.com",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Steve Morgan",
    designation: "Security Technologist",
    bio: "Specializing in emerging security technologies, cloud security, and innovative threat detection systems.",
    image: "https://www.vedp.org/sites/default/files/images/2021-09/Steve_Headshot_color.jpeg",
    social: {
      email: "steve@example.com",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Sarah Chen",
    designation: "Ethical Hacker",
    bio: "Certified ethical hacker with expertise in bug bounty programs and vulnerability assessment.",
    image: "https://cdn.tatlerasia.com/tatlerasia/i/2023/10/18163147-untitled-design-4_cover_1600x938.jpg",
    social: {
      email: "sarah@example.com",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "Michael Torres",
    designation: "Cloud Security Specialist",
    bio: "Expert in securing cloud infrastructures, containerization, and DevSecOps practices.",
    image: "https://adelante.com/wp-content/uploads/2015/05/1-1.jpg",
    social: {
      email: "michael@example.com",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 6,
    name: "Jessica Williams",
    designation: "Incident Response Lead",
    bio: "Leading incident response teams with expertise in digital forensics and threat intelligence.",
    image: "https://clarkebell.com/wp-content/uploads/2023/10/jessica-williams-2.jpg",
    social: {
      email: "jessica@example.com",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Expert Team</h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Meet the exceptional cybersecurity professionals dedicated to protecting your digital assets and ensuring
            organizational security excellence.
          </p>

          {/* Breadcrumb */}
          <div className="flex justify-center items-center gap-2 text-sm">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-red-500 font-medium">Our Expert Team</span>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="group flex flex-col items-center text-center">
              {/* Image Container with Grayscale Hover Effect */}
              <div className="relative w-full mb-6 overflow-hidden rounded-xl">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  width={800}
                  height={800}
                />
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Name - becomes bold on hover */}
              <h3 className="text-xl font-semibold text-white mb-2 transition-all duration-300 group-hover:font-bold">
                {member.name}
              </h3>

              {/* Designation - changes to red on hover */}
              <p className="text-slate-400 font-medium mb-3 transition-colors duration-300 group-hover:text-red-500">
                {member.designation}
              </p>

              {/* Bio */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={`mailto:${member.social.email}`}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a
                  href={member.social.linkedin}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={member.social.github}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

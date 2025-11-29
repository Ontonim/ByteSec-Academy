// import Image from "next/image";
import Link from "next/link";
import { WhyChooseUsEnhanced } from "@/components/website/PageSections/HomePage/why-choose-us/why-choose-us-enhanced";
import { CyberSecurityHero } from "@/components/website/PageSections/HomePage/cyber-security-hero";
// import TeamPage from "../team/page";
// import NewsletterSubscribe from "@/components/website/PageSections/HomePage/newsletter";
import TestimonialCarousel from "@/components/website/PageSections/Review/ReviewCaruosel";
import AboutUs from "@/components/website/PageSections/AboutUs/AboutUs";
import NewsletterSubscribe from "@/components/website/PageSections/HomePage/newsletter";

export default function AboutUsPage() {
  // const services = [
  //   "Website Security Services",
  //   "SIEM Threat Detection",
  //   "Content Delivery Network",
  //   "24/7 Hours services",
  //   "Security Management",
  //   "Instant Malware Removal",
  //   "Website Hack Repair",
  //   "Instant Malware Removal",
  // ];

  return (
    <div className="min-h-screen relative">
      <div className="">
        {/* <div className="absolute inset-0 bg-[#202020] opacity-100"></div> */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,28,28,1)_0%,rgba(32,32,32,1)_40%)] opacity-100"></div>

        {/* Hero Section */}
        <div className="text-center text-white py-10 px-4 relative ">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-16">
            About Us
          </h1>
          <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-3 text-sm">
            <Link href={"/"}>
              <span className="text-gray-300">Home</span>
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-red-500">About Us</span>
          </div>
        </div>

        <AboutUs />
        <WhyChooseUsEnhanced />
        <CyberSecurityHero />
        <div className="relative py-10">
          <TestimonialCarousel />
        </div>
        {/* <TeamPage /> */}
        <NewsletterSubscribe />
      </div>
    </div>
  );
}

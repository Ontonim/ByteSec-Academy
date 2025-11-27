import Image from "next/image";
import Link from "next/link";
import { WhyChooseUsEnhanced } from "@/components/website/PageSections/HomePage/why-choose-us/why-choose-us-enhanced";
import { CyberSecurityHero } from "@/components/website/PageSections/HomePage/cyber-security-hero";
import TeamPage from "../team/page";
// import NewsletterSubscribe from "@/components/website/PageSections/HomePage/newsletter";
import TestimonialCarousel from "@/components/website/PageSections/Review/ReviewCaruosel";

export default function AboutUsPage() {
  const services = [
    "Website Security Services",
    "SIEM Threat Detection",
    "Content Delivery Network",
    "24/7 Hours services",
    "Security Management",
    "Instant Malware Removal",
    "Website Hack Repair",
    "Instant Malware Removal",
  ];

  return (
    <div className="min-h-screen relative">
      {/* <div className="absolute inset-0 bg-[#202020] opacity-100"></div> */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,28,28,1)_0%,rgba(32,32,32,1)_40%)] opacity-100"></div>

      {/* Hero Section */}
      <div className="text-center text-white py-20 px-4 relative">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
        <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed mb-8">
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

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20 relative">
        <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                24/7 Cyber Security Operation Center
              </h2>

              <p className="text-gray-400 text-base mb-10 leading-relaxed">
                Lorem ipsum dolor sit amet consectetuer adipiscing elitenean
                commodoligula egetmassa.
              </p>

              {/* Services List */}
              <div className="space-y-4 mb-10">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-base">{service}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 cursor-pointer">
                  Order Services
                </button>
                <button className="bg-transparent border-2 border-gray-600 hover:border-gray-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 cursor-pointer">
                  Free Quote
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[500px] lg:min-h-full">
              <Image
                src="https://designingmedia.com/redlight/wp-content/uploads/2023/12/about-us-page-right-img.png"
                alt="Cyber Security Operation Center"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute top-20 right-20 w-32 h-32 bg-red-500 rounded-full opacity-60 blur-3xl"></div>
              <div className="absolute bottom-32 right-12 w-20 h-20 bg-red-400 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 right-8 w-16 h-16 bg-gray-700 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUsEnhanced />
      <CyberSecurityHero />
      <div className="relative py-10">
        {/* <div className="text-white text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, quod!
          </p>
        </div> */}
        <TestimonialCarousel />
      </div>
      <TeamPage />
      {/* <NewsletterSubscribe /> */}
    </div>
  );
}

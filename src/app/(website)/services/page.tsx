import NewsletterSubscribe from "@/components/website/PageSections/HomePage/newsletter";
import TestimonialCarousel from "@/components/website/PageSections/Review/ReviewCaruosel";
import { ServiceCard } from "@/components/website/PageSections/services/service-card";
import Image from "next/image";

const logos = [
  "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon4.png",
  "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon3.png",
  "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon2.png",
  "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon1.png",
  "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon5.png",
  "https://designingmedia.com/redlight/wp-content/uploads/2023/12/companies-icon6.png",
];

const servicesKey = [
  "Website Security Services",
  "SIEM Threat Detection",
  "Content Delivery Network",
  "24/7 Hours services",
  "Security Management",
  "Instant Malware Removal",
  "Website Hack Repair",
  "Instant Malware Removal",
];

const services = [
  {
    id: 1,
    title: "Threat Intelligence",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    image:
      "https://designingmedia.com/redlight/wp-content/uploads/2023/12/about-section2-icon1.png",
  },
  {
    id: 2,
    title: "Security Assessment",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    image:
      "https://designingmedia.com/redlight/wp-content/uploads/2023/12/about-section2-icon2.png",
  },
  {
    id: 3,
    title: "Compromise Assessment",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    image:
      "https://designingmedia.com/redlight/wp-content/uploads/2023/12/about-section2-icon3.png",
  },
  {
    id: 4,
    title: "Incident Response",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    image:
      "https://designingmedia.com/redlight/wp-content/uploads/2023/12/about-section2-icon4.png",
  },
  {
    id: 5,
    title: "Cloud Security",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    image:
      "https://designingmedia.com/redlight/wp-content/uploads/2023/12/about-section2-icon6.png",
  },
  {
    id: 6,
    title: "Security Training",
    description:
      "Integer tincidunt Cras dapibus bivamus ele mentum semper nisienean vulputate eleife nd tellusanean",
    image:
      "https://designingmedia.com/redlight/wp-content/uploads/2023/12/about-round-icon1.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#202020] opacity-100"></div>

      {/* PAGE TITLE SECTION */}
      <div className="px-4 py-20 text-center relative">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h1>

        <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-6 px-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex justify-center items-center gap-2 text-sm">
          <a href="#" className="text-neutral-300 hover:text-white transition">
            Home
          </a>
          <span className="text-neutral-600">/</span>
          <span className="text-red-500">Our Services</span>
        </div>
      </div>

      {/* SERVICES GRID */}
      <div className="px-4 py-16 relative">
        {/* Decorative Image - hidden on mobile */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 opacity-70">
          <Image
            src="/images/about-us-section-right-icon.png"
            alt="Decorative"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* COMPANY LOGO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-white">
          Trusted Over 2300+ Companies in the World
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo}
                alt="Company Logo"
                width={90}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* OPERATION CENTER SECTION */}
      <div className="max-w-7xl mx-auto px-4 pb-20 relative">
        <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="p-8 md:p-14 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                24/7 Cyber Security Operation Center
              </h2>

              <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetuer adipiscing elitenean
                commodoligula egetmassa.
              </p>

              {/* Services List */}
              <div className="space-y-3 mb-10">
                {servicesKey.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
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
                    <span className="text-gray-300 text-sm md:text-base">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition">
                  Order Services
                </button>
                <button className="bg-transparent border-2 border-gray-600 hover:border-gray-500 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition">
                  Free Quote
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-[350px] md:min-h-[500px] lg:min-h-full">
              <Image
                src="https://designingmedia.com/redlight/wp-content/uploads/2023/12/about-us-page-right-img.png"
                alt="Cyber Security Operation Center"
                fill
                className="object-cover"
              />

              {/* Decorative Spots */}
              <div className="absolute top-16 right-10 w-24 h-24 bg-red-500 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="px-2 md:px-0">
        <TestimonialCarousel />
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="px-2 md:px-0">
        <NewsletterSubscribe />
      </div>
    </main>
  );
}

import Banner from "@/components/website/PageSections/HomePage/Banner";
import { CyberSecurityHero } from "./cyber-security-hero";
import NewsletterSubscribe from "./newsletter";
import NewsBlogSection from "./BlogSection";
import TestimonialCarousel from "../Review/ReviewCaruosel";
import TrustedCompaniesSection from "./TrustCompany";
import HomeCourse from "./HomeCourse";

export default function HomePage() {
  return (
    <div className="">
      <Banner />
      <TrustedCompaniesSection />
      <div className="relative pt-26">
        <div className="absolute inset-0 bg-[#202020] z-0"></div>
        <HomeCourse />
      </div>
      <TestimonialCarousel />
      <CyberSecurityHero />
      {/* <ServicesPage /> */}
      <NewsBlogSection />
      <NewsletterSubscribe />
    </div>
  );
}

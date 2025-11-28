import Banner from "@/components/website/PageSections/HomePage/Banner";
import { CyberSecurityHero } from "./cyber-security-hero";
import NewsletterSubscribe from "./newsletter";
import NewsBlogSection from "./BlogSection";
import TestimonialCarousel from "../Review/ReviewCaruosel";
// import ServicesPage from "@/app/(website)/services/page";
import TrustedCompaniesSection from "./TrustCompany";
import CoursesGrid from "../Course/CourseGrid";

export default function HomePage() {
  return (
    <div className="">
      <Banner />
      <TrustedCompaniesSection />
      <div className="relative pt-26">
        <div className="absolute inset-0 bg-[#202020] z-0"></div>
        <CoursesGrid />
      </div>
      <TestimonialCarousel />
      <CyberSecurityHero />
      {/* <ServicesPage /> */}
      <NewsBlogSection />
      <NewsletterSubscribe />
    </div>
  );
}

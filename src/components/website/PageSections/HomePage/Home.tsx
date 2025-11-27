import Banner from "@/components/website/PageSections/HomePage/Banner";
import { CyberSecurityHero } from "./cyber-security-hero";
import NewsletterSubscribe from "./newsletter";
import NewsBlogSection from "./BlogSection";
import TestimonialCarousel from "../Review/ReviewCaruosel";
import ServicesPage from "@/app/(website)/services/page";
import CoursesPage from "@/app/(website)/course/page";
import TrustedCompaniesSection from "./TrustCompany";

export default function HomePage() {
  return (
    <div className="">
      <Banner />
      <TrustedCompaniesSection />
      <CoursesPage />
      <TestimonialCarousel />
      <CyberSecurityHero />
      <ServicesPage />
      <NewsBlogSection />
      <NewsletterSubscribe />
    </div>
  );
}

import Banner from "@/components/website/PageSections/HomePage/Banner";
import Services from "@/components/website/PageSections/HomePage/Services";
import { CyberSecurityHero } from "./cyber-security-hero";
import { WhyChooseUsEnhanced } from "./why-choose-us/why-choose-us-enhanced";
import NewsletterSubscribe from "./newsletter";
import SecurityFeatures from "./security-features";
// import StatsSection from "./stats-section";
import Community from "./community";
import Faq from "./Faq";
import TrustedCompaniesSection from "./TrustCompany";
import NewsBlogSection from "./BlogSection";
export default function HomePage() {
  return (
    <div>
      <Banner />
      <TrustedCompaniesSection />
      <Services />
      <WhyChooseUsEnhanced />
      <CyberSecurityHero />
      {/* <StatsSection /> */}
      <SecurityFeatures />
      <Community />
      <NewsBlogSection />
      <Faq />
      <NewsletterSubscribe />
    </div>
  );
}

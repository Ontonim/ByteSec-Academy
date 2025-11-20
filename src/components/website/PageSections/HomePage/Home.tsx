import Banner from "@/components/website/PageSections/HomePage/Banner";
import Services from "@/components/website/PageSections/HomePage/Services";
import { CyberSecurityHero } from "./cyber-security-hero";
import { WhyChooseUsEnhanced } from "./why-choose-us/why-choose-us-enhanced";
import NewsletterSubscribe from "./newsletter";
import SecurityFeatures from "./security-features";
import StatsSection from "./stats-section";
export default function HomePage() {
  return (
    <div>
        <Banner/>
        <Services/>
        <WhyChooseUsEnhanced/>
        <CyberSecurityHero/>
        <StatsSection/>
      <SecurityFeatures/>
          <NewsletterSubscribe/>
    </div>
  );
}

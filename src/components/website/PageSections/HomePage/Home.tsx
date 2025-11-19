import Banner from "@/components/website/PageSections/HomePage/Banner";
import Services from "@/components/website/PageSections/HomePage/Services";
import { CyberSecurityHero } from "./cyber-security-hero";
import { WhyChooseUsEnhanced } from "./why-choose-us/why-choose-us-enhanced";

export default function HomePage() {
  return (
    <div>
        <Banner/>
        <Services/>
        <WhyChooseUsEnhanced/>
        <CyberSecurityHero/>
    </div>
  );
}

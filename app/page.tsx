import * as React from "react";
import { Navbar } from "../components/navbar"; 
import { Hero } from "../components/hero";
import { LogoSection } from "../components/logoSection";
import { BentoGrid2x2 } from "../components/bentoGrid";
import { ItemsDefault } from "../components/itemsDefault";
import { FeatureRising } from "../components/featureRising";
import { FeatureTabs } from "../components/featureTabs";
import { Testimonials } from "../components/testimonials";
import { PricingTab } from "../components/pricingTab";
import { FAQ } from "../components/FAQ";
import { CtaSection } from "../components/ctaSection";
import { Footer } from "../components/footer";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-end">
      <div className="w-full max-w-[1440px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center w-full bg-zinc-950 max-md:max-w-full">
          <Navbar />
          <Hero />
          <LogoSection/>
          <BentoGrid2x2/>
          <ItemsDefault/>
          <FeatureRising/>
          <FeatureTabs/>
          <Testimonials/>
          <PricingTab/>
          <FAQ/>
          <CtaSection/>
          <Footer/>
        </div>
      </div>
    </main>
  );
}

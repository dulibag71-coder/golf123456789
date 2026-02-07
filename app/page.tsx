"use client";

import EarthHero from "@/components/main/earth-hero";
import FeaturesSection from "@/components/sections/features";
import AnalysisTypesSection from "@/components/sections/analysis-types";
import PricingSection from "@/components/sections/pricing";
import HowItWorksSection from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <main className="relative">
      <EarthHero />

      <FeaturesSection />
      <AnalysisTypesSection />
      <HowItWorksSection />
      <PricingSection />
    </main>
  );
}

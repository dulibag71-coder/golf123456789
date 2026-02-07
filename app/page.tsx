"use client";

import GeminiHero from "@/components/main/gemini-hero";
import FeaturesSection from "@/components/sections/features";
import AnalysisTypesSection from "@/components/sections/analysis-types";
import PricingSection from "@/components/sections/pricing";
import HowItWorksSection from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <main className="relative">
      <GeminiHero />

      <FeaturesSection />
      <AnalysisTypesSection />
      <HowItWorksSection />
      <PricingSection />
    </main>
  );
}

"use client";

import LiquidMetalHero from "@/components/main/hero";
import FeaturesSection from "@/components/sections/features";
import AnalysisTypesSection from "@/components/sections/analysis-types";
import PricingSection from "@/components/sections/pricing";
import HowItWorksSection from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <main className="relative">
      <LiquidMetalHero
        badge="🏌️ AI 골프 코치 플랫폼"
        title="모든 골퍼의 주머니 속 AI 프로 코치"
        subtitle="컴퓨터 비전과 머신러닝으로 당신의 스윙을 실시간 분석하고 맞춤형 피드백을 제공합니다. 초보자부터 상급자까지, 지금 바로 시작하세요."
        primaryCtaLabel="무료로 시작하기"
        secondaryCtaLabel="분석 체험하기"
        onPrimaryCtaClick={() => {
          window.location.href = "/auth";
        }}
        onSecondaryCtaClick={() => {
          window.location.href = "/analysis";
        }}
        features={[
          "🎯 실시간 스윙 분석",
          "🤖 AI 맞춤형 피드백",
          "📊 성장 추적 시스템"
        ]}
      />

      <FeaturesSection />
      <AnalysisTypesSection />
      <HowItWorksSection />
      <PricingSection />
    </main>
  );
}

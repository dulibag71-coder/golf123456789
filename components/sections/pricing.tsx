"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
    {
        name: "Free",
        price: "₩0",
        period: "무료",
        description: "골프를 시작하는 분들을 위한",
        badge: null,
        features: [
            "월 3회 스윙 분석",
            "기본 AI 피드백",
            "히스토리 30일 보관",
            "커뮤니티 접근"
        ],
        limitations: [
            "실시간 분석 불가",
            "상세 리포트 없음"
        ],
        cta: "무료 시작",
        popular: false,
        gradient: "from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
        borderColor: "border-gray-200 dark:border-gray-700"
    },
    {
        name: "Basic",
        price: "₩14,900",
        period: "/ 월",
        description: "주말 골퍼를 위한 인기 플랜",
        badge: "인기",
        features: [
            "무제한 스윙 분석",
            "AI 상세 피드백",
            "히스토리 무제한",
            "음성 피드백",
            "진행도 추적",
            "월간 요약 리포트"
        ],
        limitations: [],
        cta: "시작하기",
        popular: true,
        gradient: "from-primary/5 via-green-500/5 to-emerald-500/5",
        borderColor: "border-primary"
    },
    {
        name: "Pro",
        price: "₩29,900",
        period: "/ 월",
        description: "진지한 골퍼를 위한 프로 플랜",
        badge: "추천",
        features: [
            "Basic 전체 기능",
            "⚡ 실시간 라이브 분석",
            "3D 비교 시각화",
            "프레임 단위 분석",
            "프로 골퍼 스윙 비교",
            "주간 AI 리포트",
            "우선 고객 지원"
        ],
        limitations: [],
        cta: "Pro로 업그레이드",
        popular: false,
        gradient: "from-purple-500/5 via-pink-500/5 to-purple-500/5",
        borderColor: "border-purple-500"
    },
    {
        name: "Coach",
        price: "₩99,000",
        period: "/ 월",
        description: "레슨 프로를 위한 비즈니스 플랜",
        badge: "B2B",
        features: [
            "Pro 전체 기능",
            "학생 관리 대시보드 (최대 30명)",
            "커스텀 드릴 제작 도구",
            "비교 분석 기능",
            "브랜딩 커스터마이징",
            "API 액세스",
            "전담 지원"
        ],
        limitations: [],
        cta: "문의하기",
        popular: false,
        gradient: "from-yellow-500/5 via-orange-500/5 to-yellow-500/5",
        borderColor: "border-yellow-500"
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.1),transparent_50%)]" />

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-green-500 to-emerald-600 bg-clip-text text-transparent">
                        요금제
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        당신의 골프 실력에 맞는 플랜을 선택하세요
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`h-full ${plan.popular ? 'lg:scale-105' : ''}`}
                        >
                            <Card className={`h-full border-2 ${plan.borderColor} bg-gradient-to-br ${plan.gradient} backdrop-blur-sm ${plan.popular ? 'shadow-2xl ring-2 ring-primary/20' : 'hover:shadow-xl'} transition-all duration-300 relative group`}>
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                        <Badge className={`${plan.popular ? 'bg-gradient-to-r from-primary to-green-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'} text-white px-4 py-1 text-sm font-bold shadow-lg`}>
                                            {plan.badge}
                                        </Badge>
                                    </div>
                                )}

                                <CardHeader className="text-center pb-8 pt-10">
                                    <CardTitle className="text-2xl mb-2 font-heading">{plan.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground mb-6 min-h-[2.5rem]">
                                        {plan.description}
                                    </p>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{plan.price}</span>
                                        <span className="text-muted-foreground ml-2 text-sm">{plan.period}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    <ul className="space-y-3 min-h-[280px]">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start group/item">
                                                <span className="text-green-500 mr-3 mt-0.5 font-bold group-hover/item:scale-125 transition-transform">✓</span>
                                                <span className="text-sm text-foreground/90">{feature}</span>
                                            </li>
                                        ))}
                                        {plan.limitations.map((limitation, i) => (
                                            <li key={`limit-${i}`} className="flex items-start text-muted-foreground">
                                                <span className="mr-3 mt-0.5 text-red-400">✗</span>
                                                <span className="text-sm">{limitation}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full text-base font-semibold transition-all duration-300 ${plan.popular
                                                ? 'bg-gradient-to-r from-primary to-green-600 hover:shadow-xl hover:scale-105'
                                                : 'bg-secondary hover:bg-secondary/80'
                                            }`}
                                        size="lg"
                                    >
                                        {plan.cta}
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center space-y-4"
                >
                    <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
                        <p className="text-foreground font-medium">
                            💳 모든 플랜 7일 무료 체험 가능 • 언제든지 취소 가능
                        </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        🏢 골프장/연습장 파트너십 문의: <a href="mailto:business@golfai.com" className="text-primary hover:underline font-semibold">business@golfai.com</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

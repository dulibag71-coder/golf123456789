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
        color: "border-gray-300"
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
        color: "border-primary"
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
        color: "border-purple-500"
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
        color: "border-yellow-500"
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
                            className="h-full"
                        >
                            <Card className={`h-full border-2 ${plan.color} ${plan.popular ? 'shadow-2xl scale-105 bg-primary/5' : 'hover:shadow-xl'} transition-all duration-300 relative`}>
                                {plan.badge && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-primary text-primary-foreground px-4 py-1">
                                            {plan.badge}
                                        </Badge>
                                    </div>
                                )}

                                <CardHeader className="text-center pb-8 pt-8">
                                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {plan.description}
                                    </p>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold">{plan.price}</span>
                                        <span className="text-muted-foreground ml-2">{plan.period}</span>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                        {plan.limitations.map((limitation, i) => (
                                            <li key={i} className="flex items-start text-muted-foreground">
                                                <span className="mr-2 mt-0.5">✗</span>
                                                <span className="text-sm">{limitation}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
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
                    <p className="text-muted-foreground">
                        💳 모든 플랜 7일 무료 체험 가능 • 언제든지 취소 가능
                    </p>
                    <p className="text-sm text-muted-foreground">
                        🏢 골프장/연습장 파트너십 문의: <a href="mailto:business@golfai.com" className="text-primary hover:underline">business@golfai.com</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

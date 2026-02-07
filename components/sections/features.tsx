"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const features = [
    {
        icon: "🎥",
        title: "영상 기반 스윙 분석",
        description: "MediaPipe 포즈 추정으로 자세, 궤도, 타이밍, 밸런스를 정밀 분석합니다.",
        details: ["33개 관절 포인트 추적", "프레임 단위 분석", "3D 시각화"]
    },
    {
        icon: "⚡",
        title: "실시간 라이브 분석",
        description: "WebRTC 기반으로 연습 중 즉각적인 피드백을 받으세요.",
        details: ["100ms 이하 지연", "음성 피드백", "AR 가이드라인"]
    },
    {
        icon: "🤖",
        title: "AI 맞춤형 코칭",
        description: "GPT-4가 당신의 수준에 맞는 자연스러운 피드백을 제공합니다.",
        details: ["개인화 학습", "우선순위 제안", "점진적 교정"]
    },
    {
        icon: "📊",
        title: "성장 추적 시스템",
        description: "모든 스윙 데이터를 저장하고 개선 과정을 시각화합니다.",
        details: ["스윙 아카이브", "종합 스코어", "월간 리포트"]
    },
    {
        icon: "🎯",
        title: "4대 분석 영역",
        description: "자세, 궤도, 타이밍, 밸런스를 종합적으로 평가합니다.",
        details: ["각도 측정", "속도 분석", "무게중심 추적"]
    },
    {
        icon: "🏆",
        title: "레벨별 맞춤 UI",
        description: "초보자는 3가지 핵심만, 상급자는 20+ 전문 메트릭을 제공합니다.",
        details: ["Progressive Disclosure", "난이도 자동조정", "프로 모드"]
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                        핵심 기능
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        최신 AI 기술로 프로 수준의 스윙 분석을 경험하세요
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Card className="h-full border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                                <CardContent className="p-8">
                                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {feature.details.map((detail, i) => (
                                            <li key={i} className="flex items-center text-sm text-foreground/90">
                                                <span className="text-primary font-bold mr-3">✓</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

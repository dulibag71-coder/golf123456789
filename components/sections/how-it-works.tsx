"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "영상 촬영",
        description: "스마트폰이나 웹캠으로 측면 60도 각도에서 스윙을 촬영하세요",
        icon: "📱"
    },
    {
        number: "02",
        title: "AI 분석",
        description: "MediaPipe가 33개 관절을 추적하고 GPT-4가 피드백을 생성합니다",
        icon: "🤖"
    },
    {
        number: "03",
        title: "피드백 확인",
        description: "텍스트, 음성, 시각적 오버레이로 개선점을 확인하세요",
        icon: "📊"
    },
    {
        number: "04",
        title: "성장 추적",
        description: "모든 스윙이 자동 저장되고 개선 과정이 그래프로 표시됩니다",
        icon: "📈"
    }
];

export default function HowItWorksSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        사용 방법
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        4단계로 완성하는 완벽한 스윙 분석
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connection lines for desktop */}
                    <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 h-full flex flex-col items-center text-center hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
                                {/* Step number badge */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="text-6xl mb-6 mt-4">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed flex-grow">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <button className="bg-primary text-primary-foreground px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                        지금 바로 시작하기 →
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

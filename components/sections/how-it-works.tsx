"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "영상 촬영",
        description: "스마트폰이나 웹캠으로 측면 60도 각도에서 스윙을 촬영하세요",
        icon: "📱",
        color: "from-blue-500 to-cyan-500"
    },
    {
        number: "02",
        title: "AI 분석",
        description: "MediaPipe가 33개 관절을 추적하고 GPT-4가 피드백을 생성합니다",
        icon: "🤖",
        color: "from-purple-500 to-pink-500"
    },
    {
        number: "03",
        title: "피드백 확인",
        description: "텍스트, 음성, 시각적 오버레이로 개선점을 확인하세요",
        icon: "📊",
        color: "from-orange-500 to-red-500"
    },
    {
        number: "04",
        title: "성장 추적",
        description: "모든 스윙이 자동 저장되고 개선 과정이 그래프로 표시됩니다",
        icon: "📈",
        color: "from-green-500 to-emerald-500"
    }
];

export default function HowItWorksSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-green-500 to-emerald-600 bg-clip-text text-transparent">
                        사용 방법
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        4단계로 완성하는 완벽한 스윙 분석
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
                    {/* Connection line for desktop */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                {/* Step number badge */}
                                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br ${step.color} w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="text-7xl mb-8 mt-8 group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4 text-foreground">
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
                    className="mt-20 text-center"
                >
                    <button className="group bg-gradient-to-r from-primary to-green-600 text-white px-12 py-5 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
                        지금 바로 시작하기
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

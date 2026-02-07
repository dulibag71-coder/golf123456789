"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const analysisTypes = [
    {
        title: "자세 (Posture) 분석",
        icon: "🧍",
        areas: [
            "Address 자세: 발 위치, 척추 각도, 무릎 굴곡도",
            "백스윙 정렬: 어깨 회전각, 골반 안정성",
            "임팩트 존: 머리 위치, 손목 각도, 하체 안정성",
            "팔로우스루: 피니시 균형, 몸통 회전 완성도"
        ],
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "궤도 (Swing Path) 분석",
        icon: "↗️",
        areas: [
            "클럽 헤드 경로 3D 추적",
            "스윙 플레인 각도 측정",
            "페이스 앵글 변화 추이",
            "이상 궤도 대비 편차 계산"
        ],
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "타이밍 (Tempo) 분석",
        icon: "⏱️",
        areas: [
            "백스윙-다운스윙 비율 (3:1 기준)",
            "전환점 타이밍 분석",
            "전체 스윙 소요 시간",
            "리듬 일관성 평가"
        ],
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "밸런스 (Balance) 분석",
        icon: "⚖️",
        areas: [
            "무게 중심 이동 경로 시각화",
            "좌우 체중 분포 변화",
            "피니시 안정성 점수화",
            "균형 유지 능력 평가"
        ],
        color: "from-green-500/20 to-emerald-500/20"
    }
];

export default function AnalysisTypesSection() {
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
                        4대 분석 영역
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        자세, 궤도, 타이밍, 밸런스를 종합적으로 분석하여 완벽한 스윙을 만들어드립니다
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {analysisTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Card className={`h-full bg-gradient-to-br ${type.color} border-2 hover:shadow-2xl transition-all duration-300`}>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="text-5xl">{type.icon}</div>
                                        <CardTitle className="text-2xl">{type.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {type.areas.map((area, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                                className="flex items-start"
                                            >
                                                <span className="text-primary font-bold mr-3 mt-1">•</span>
                                                <span className="text-foreground/90">{area}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">종합 스윙 스코어</h3>
                        <p className="text-lg text-muted-foreground mb-4">
                            각 영역별 점수를 종합하여 0-100점 스코어로 산출
                        </p>
                        <div className="flex justify-center items-center gap-8 flex-wrap">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-500">25점</div>
                                <div className="text-sm text-muted-foreground">자세</div>
                            </div>
                            <div className="text-2xl text-muted-foreground">+</div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-500">25점</div>
                                <div className="text-sm text-muted-foreground">궤도</div>
                            </div>
                            <div className="text-2xl text-muted-foreground">+</div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500">25점</div>
                                <div className="text-sm text-muted-foreground">타이밍</div>
                            </div>
                            <div className="text-2xl text-muted-foreground">+</div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-500">25점</div>
                                <div className="text-sm text-muted-foreground">밸런스</div>
                            </div>
                            <div className="text-2xl text-muted-foreground">=</div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary">100점</div>
                                <div className="text-sm text-muted-foreground">종합</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

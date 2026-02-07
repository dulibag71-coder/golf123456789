"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loginWithGoogle } from "@/lib/auth";

export default function AuthPage() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleGoogleLogin = async () => {
        await loginWithGoogle();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.1),transparent_50%)]" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Floating golf balls animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {dimensions.width > 0 && [...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-green-600/20 backdrop-blur-sm"
                        initial={{
                            x: Math.random() * dimensions.width,
                            y: -50,
                            scale: 0.5 + Math.random() * 0.5
                        }}
                        animate={{
                            y: dimensions.height + 50,
                            x: Math.random() * dimensions.width
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md mx-auto px-6 relative z-10"
            >
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6 flex justify-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center shadow-2xl">
                            <span className="text-4xl">🏌️</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent"
                    >
                        AI 골프 코치
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-muted-foreground text-lg"
                    >
                        Google 계정으로 간편하게 시작하세요
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Card className="border-2 shadow-2xl backdrop-blur-sm bg-card/80 hover:shadow-3xl transition-all duration-300">
                        <CardHeader className="text-center pb-4">
                            <CardTitle className="text-2xl">로그인</CardTitle>
                            <CardDescription className="text-base">
                                프로 수준의 스윙 분석을 경험하세요
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    variant="outline"
                                    className="w-auto px-6 py-2 h-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border-gray-300 transition-all hover:scale-105 active:scale-95 shadow-sm"
                                    onClick={handleGoogleLogin}
                                >
                                    <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                    Google로 계속하기
                                </Button>
                            </motion.div>

                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-muted"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-card text-muted-foreground font-medium">
                                        빠르고 안전한 로그인
                                    </span>
                                </div>
                            </div>

                            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        별도의 회원가입 없이 바로 시작
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Google의 보안 시스템으로 안전하게 보호
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        모든 기기에서 동기화된 스윙 데이터
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center text-sm text-muted-foreground mt-6 space-y-2"
                >
                    <p>
                        로그인하면{" "}
                        <a href="#" className="text-primary hover:underline font-medium">
                            서비스 약관
                        </a>
                        {" "}및{" "}
                        <a href="#" className="text-primary hover:underline font-medium">
                            개인정보 처리방침
                        </a>
                        에 동의하는 것으로 간주됩니다.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

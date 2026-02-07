"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";
import { CheckIcon } from "lucide-react";

export default function AuthPage() {
    const supabase = createClient();

    const loginWithGoogle = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                },
            });
            if (error) {
                console.error("Login error:", error);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    const handleGoogleLogin = async () => {
        await loginWithGoogle();
    };

    // Floating background animation
    const FloatingBalls = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/5 blur-xl"
                        initial={{
                            x: Math.random() * 1000,
                            y: Math.random() * 1000,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            x: [Math.random() * 1000, Math.random() * 1000],
                            y: [Math.random() * 1000, Math.random() * 1000],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                        style={{
                            width: Math.random() * 300 + 100,
                            height: Math.random() * 300 + 100,
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <FloatingBalls />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="z-10 w-full max-w-md"
            >
                <Card className="bg-neutral-900/90 border-neutral-800 backdrop-blur-xl shadow-2xl">
                    <CardHeader className="space-y-4 text-center pb-8">
                        <motion.div
                            className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-3xl shadow-lg"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                            🏌️
                        </motion.div>
                        <div className="space-y-2">
                            <CardTitle className="text-2xl font-bold text-white tracking-tight">
                                AI Golf Coach
                            </CardTitle>
                            <CardDescription className="text-gray-400 text-base">
                                프로 수준의 스윙 분석을 경험하세요
                            </CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8">
                        <div className="flex flex-col gap-4">
                            <Button
                                className="w-full h-12 bg-white hover:bg-gray-100 text-gray-900 font-medium text-base flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                onClick={handleGoogleLogin}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Google로 계속하기
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-3">
                                {[
                                    "별도의 회원가입 없이 3초 만에 시작",
                                    "Google의 보안 시스템으로 안전하게 보호",
                                    "모든 기기에서 동기화된 스윙 데이터"
                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="flex items-center gap-3 text-sm text-gray-400 ml-1"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                            <CheckIcon className="w-3 h-3 text-green-500" />
                                        </div>
                                        {benefit}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 text-center text-xs text-gray-500 border-t border-neutral-800">
                            로그인하면{" "}
                            <a href="#" className="underline hover:text-gray-300">서비스 약관</a>
                            {" "}및{" "}
                            <a href="#" className="underline hover:text-gray-300">개인정보 처리방침</a>
                            에 동의하는 것으로 간주됩니다.
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}

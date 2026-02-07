"use client";
import React from "react";
import RotatingEarth from "@/components/ui/rotating-earth";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EarthHero() {
    return (
        <div className="h-screen w-full bg-black relative flex flex-col items-center justify-center overflow-hidden">

            {/* Background Earth */}
            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-80">
                <RotatingEarth width={1000} height={1000} className="w-full h-full max-w-[800px] max-h-[800px]" />
            </div>

            {/* Foreground Content */}
            <div className="z-10 relative flex flex-col items-center text-center px-4 mt-[-50px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 mb-6">
                        AI Golf Coach
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Precision Swing Analysis powered by Artificial Intelligence.
                        <br className="hidden md:block" /> Connect with the world of smart golf.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link href="/auth">
                        <button className="px-8 py-3 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Start Now
                        </button>
                    </Link>
                    <Link href="/analysis">
                        <button className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                            Watch Demo
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
        </div>
    );
}

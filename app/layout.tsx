import type { Metadata } from "next";
import { Pacifico, Inter } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 골프 스윙 분석 | 모든 골퍼의 주머니 속 AI 프로 코치",
  description: "컴퓨터 비전과 머신러닝으로 골프 스윙을 실시간 분석하고 맞춤형 피드백을 제공합니다. 초보자부터 상급자까지, MediaPipe와 GPT-4 기반 AI 코칭 서비스.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pacifico.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

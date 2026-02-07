import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(request: Request) {
    try {
        const { poseData } = await request.json();

        if (!poseData) {
            return NextResponse.json(
                { error: "Pose data is required" },
                { status: 400 }
            );
        }

        const completion = await openai.chat.completions.create({
            model: "google/gemini-2.0-flash-lite-preview-02-05:free", // Using a cost-effective model
            messages: [
                {
                    role: "system",
                    content: `당신은 세계 최고의 AI 골프 코치입니다.
사용자의 골프 스윙 포즈 데이터(MediaPipe Landmarks)를 분석하여 구체적이고 실용적인 피드백을 제공해야 합니다.
데이터는 어드레스, 백스윙 탑, 임팩트, 팔로우스루 등 스윙의 주요 단계별 관절 좌표 변화를 포함할 수 있습니다.
다음 기준에 따라 분석하세요:
1. **어드레스**: 안정적인 자세와 정렬 상태
2. **백스윙**: 회전 각도와 팔의 위치
3. **임팩트**: 체중 이동과 손목 각도
4. **결론**: 주요 문제점 1가지와 개선을 위한 연습 방법 1가지

전문 용어를 사용하되, 초보자도 이해하기 쉽게 설명하세요.
한국어로 답변하세요.`,
                },
                {
                    role: "user",
                    content: `다음은 내 스윙의 포즈 데이터 요약입니다. 분석해주세요:\n${JSON.stringify(poseData)}`,
                },
            ],
        });

        const analysis = completion.choices[0].message.content;

        return NextResponse.json({ analysis });
    } catch (error) {
        console.error("AI Analysis Error:", error);
        return NextResponse.json(
            { error: "Failed to analyze swing" },
            { status: 500 }
        );
    }
}

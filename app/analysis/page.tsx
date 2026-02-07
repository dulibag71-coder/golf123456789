"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, Play, Pause, RotateCcw, Activity, CheckCircle2, AlertCircle } from "lucide-react";
import { MediaPipeManager } from "@/lib/mediapipe";

export default function AnalysisPage() {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [analysisResult, setAnalysisResult] = useState<string | null>(null);
    const [mediaPipeManager, setMediaPipeManager] = useState<MediaPipeManager | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        const initMediaPipe = async () => {
            const manager = new MediaPipeManager();
            await manager.initialize();
            setMediaPipeManager(manager);
        };
        initMediaPipe();
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setVideoFile(file);
            setVideoUrl(URL.createObjectURL(file));
            setAnalysisResult(null);
            setProgress(0);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const drawLandmarks = (landmarks: any) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx || !landmarks || landmarks.length === 0) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connections and points... simplified for now
        for (const landmark of landmarks) {
            for (const point of landmark) {
                ctx.beginPath();
                ctx.arc(point.x * canvas.width, point.y * canvas.height, 4, 0, 2 * Math.PI);
                ctx.fillStyle = "#22c55e"; // Green
                ctx.fill();
            }
        }
    };

    const processFrame = () => {
        if (videoRef.current && mediaPipeManager && !videoRef.current.paused && !videoRef.current.ended) {
            const detectionResult = mediaPipeManager.detectPose(videoRef.current, performance.now());
            if (detectionResult && detectionResult.landmarks) {
                drawLandmarks(detectionResult.landmarks);
            }
            animationFrameId.current = requestAnimationFrame(processFrame);
        } else {
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            animationFrameId.current = requestAnimationFrame(processFrame);
        } else {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        }
        return () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, [isPlaying]);


    const analyzeSwing = async () => {
        if (!videoRef.current || !mediaPipeManager) return;

        setIsAnalyzing(true);
        setProgress(10);
        setAnalysisResult(null);

        // Simplified Sampling Strategy:
        // Capture 5 frames at 0%, 25%, 50%, 75%, 100% of duration
        const duration = videoRef.current.duration;
        const samples = [];
        const checkpoints = [0, 0.25, 0.5, 0.75, 0.95]; // Relative positions

        try {
            for (let i = 0; i < checkpoints.length; i++) {
                const time = duration * checkpoints[i];
                videoRef.current.currentTime = time;

                // Wait for seek to complete
                await new Promise<void>((resolve) => {
                    const onSeeked = () => {
                        videoRef.current?.removeEventListener('seeked', onSeeked);
                        resolve();
                    };
                    videoRef.current?.addEventListener('seeked', onSeeked);
                });

                const result = mediaPipeManager.detectPose(videoRef.current, performance.now());
                if (result && result.landmarks && result.landmarks.length > 0) {
                    // Simplify data to reduce token usage: only take key landmarks
                    // 11-12: Shoulders, 23-24: Hips, 25-26: Knees, 27-28: Ankles, 15-16: Wrists
                    const keyIndices = [11, 12, 15, 16, 23, 24, 25, 26, 27, 28];
                    const simplifiedLandmarks = result.landmarks[0].filter((_, idx) => keyIndices.includes(idx));

                    samples.push({
                        time: time.toFixed(2),
                        phase: ["Setup", "Backswing", "Top", "Impact", "Follow Through"][i], // Rough estimation
                        landmarks: simplifiedLandmarks
                    });
                }
                setProgress(10 + (i + 1) * 15); // Update progress
            }

            setProgress(85);

            // Call API
            const response = await fetch("/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ poseData: samples }),
            });

            const data = await response.json();

            if (data.analysis) {
                setAnalysisResult(data.analysis);
            } else {
                throw new Error(data.error || "Analysis failed");
            }

        } catch (error) {
            console.error("Analysis failed:", error);
            setAnalysisResult("분석 중 오류가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setIsAnalyzing(false);
            setProgress(100);
            videoRef.current.currentTime = 0; // Reset video
        }
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                        AI 스윙 정밀 분석
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        영상을 업로드하면 AI가 스윙을 분석하고 교정 방법을 제안합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Upload & Video */}
                    <div className="space-y-6">
                        <Card className="overflow-hidden border-2 border-dashed border-muted-foreground/20 hover:border-primary/50 transition-colors">
                            <CardContent className="p-0">
                                {!videoUrl ? (
                                    <label className="flex flex-col items-center justify-center h-80 cursor-pointer bg-muted/5 hover:bg-muted/10 transition-colors">
                                        <div className="p-4 rounded-full bg-primary/10 mb-4">
                                            <Upload className="w-8 h-8 text-primary" />
                                        </div>
                                        <span className="text-lg font-medium mb-2">스윙 영상 업로드</span>
                                        <span className="text-sm text-muted-foreground">MP4, MOV, WebM (최대 50MB)</span>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="video/*"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                ) : (
                                    <div className="relative aspect-[9/16] bg-black group">
                                        <video
                                            ref={videoRef}
                                            src={videoUrl}
                                            className="w-full h-full object-contain"
                                            playsInline
                                            onEnded={() => setIsPlaying(false)}
                                            onLoadedMetadata={() => {
                                                if (canvasRef.current && videoRef.current) {
                                                    canvasRef.current.width = videoRef.current.videoWidth;
                                                    canvasRef.current.height = videoRef.current.videoHeight;
                                                }
                                            }}
                                        />
                                        <canvas
                                            ref={canvasRef}
                                            className="absolute inset-0 w-full h-full pointer-events-none"
                                        />

                                        {/* Controls Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm"
                                                onClick={togglePlay}
                                            >
                                                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                                            </Button>
                                        </div>

                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="absolute top-4 right-4"
                                            onClick={() => {
                                                setVideoUrl(null);
                                                setVideoFile(null);
                                            }}
                                        >
                                            <RotateCcw className="w-4 h-4 mr-2" />
                                            다시 선택
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {videoUrl && (
                            <Button
                                onClick={analyzeSwing}
                                disabled={isAnalyzing || !mediaPipeManager}
                                className="w-full py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                                size="lg"
                            >
                                {isAnalyzing ? (
                                    <>
                                        <Activity className="w-6 h-6 mr-2 animate-pulse" />
                                        분석 중... ({Math.round(progress)}%)
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle2 className="w-6 h-6 mr-2" />
                                        AI 분석 시작하기
                                    </>
                                )}
                            </Button>
                        )}
                    </div>

                    {/* Right Column: Results */}
                    <div>
                        {analysisResult ? (
                            <Card className="h-full border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
                                <CardHeader className="bg-primary/5 border-b border-primary/10">
                                    <div className="flex items-center space-x-2">
                                        <Activity className="w-5 h-5 text-primary" />
                                        <CardTitle>분석 결과</CardTitle>
                                    </div>
                                    <CardDescription>AI 코치가 제안하는 맞춤형 피드백입니다.</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 prose prose-slate dark:prose-invert max-w-none">
                                    <div className="whitespace-pre-wrap">{analysisResult}</div>
                                </CardContent>
                            </Card>
                        ) : (
                            <Card className="h-full border-dashed flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-muted/5">
                                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                                    <Activity className="w-8 h-8 opacity-50" />
                                </div>
                                <h3 className="text-xl font-medium mb-2">분석 대기 중</h3>
                                <p>영상을 업로드하고 분석 버튼을 누르면<br />상세한 AI 코칭 리포트가 여기에 표시됩니다.</p>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

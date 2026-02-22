"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ThreeCanvas from "@/components/ui/ThreeCanvas";
import AIOrb from "@/components/ui/AIOrb";
import { useEffect, useState, useRef } from "react";

const titles = ["AI/ML Developer", "Full-Stack Engineer", "Problem Solver"];

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentTitle.slice(0, displayText.length + 1));
                if (displayText === currentTitle) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(currentTitle.slice(0, displayText.length - 1));
                if (displayText === "") {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, isDeleting ? 30 : 70);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.8]);
    const y = useTransform(scrollY, [0, 400], [0, -100]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
            {/* Background scanline effect */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

            {/* 3D Background */}
            <ThreeCanvas>
                <AIOrb size={2} />
            </ThreeCanvas>

            <motion.div
                style={{ opacity, scale, y }}
                className="container mx-auto px-6 z-10 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Tagline/Title with Typing Effect */}
                    <div className="h-8 mb-6">
                        <span className="text-blue font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
                            {displayText}
                            <span className="animate-pulse ml-1 text-white border-r-2 border-white">&nbsp;</span>
                        </span>
                    </div>

                    {/* Name Display */}
                    <div className="relative inline-block mb-8 group">
                        <motion.h1
                            className="text-7xl md:text-9xl font-black tracking-tighter"
                            style={{
                                background: "linear-gradient(135deg, #fff 0%, #00d4ff 50%, #b537f2 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            MADHAN J
                        </motion.h1>

                        {/* Holographic Glow */}
                        <h1 className="absolute top-0 left-0 text-7xl md:text-9xl font-black tracking-tighter blur-[25px] opacity-20 select-none pointer-events-none translate-y-2 group-hover:opacity-40 transition-opacity duration-700">
                            MADHAN J
                        </h1>
                    </div>

                    <p className="max-w-2xl mx-auto text-base md:text-lg text-white/50 font-medium leading-relaxed mb-12 uppercase tracking-widest">
                        Engineering robust <span className="text-white">AI solutions</span> & <br />
                        Building <span className="text-white">High Performance</span> Systems
                    </p>

                    {/* Call to Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,212,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-blue text-navy font-black rounded-full transition-all relative overflow-hidden group/btn"
                        >
                            <span className="relative z-10">Explore My Work</span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 border border-white/10 text-white font-bold rounded-full backdrop-blur-md transition-all hover:border-blue/50"
                        >
                            Let&apos;s Connect
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Hero Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
            >
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll to navigate</span>
                <div className="w-[2px] h-16 bg-gradient-to-b from-blue via-purple to-transparent rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
            </motion.div>
        </section>
    );
}

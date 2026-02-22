"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import { useEffect, useRef } from "react";

const milestones = [
    {
        year: "2025",
        title: "Summer Research Intern @ MANIT Bhopal",
        description: "Developed facial authenticity verification system with 99.4% accuracy.",
        icon: <Briefcase className="w-5 h-5" />,
    },
    {
        year: "2025",
        title: "AI Azure Intern @ Microsoft",
        description: "Built DocuMind document summarizer with ROUGE-L score 0.85.",
        icon: <Briefcase className="w-5 h-5" />,
    },
    {
        year: "2024",
        title: "TOI Ideas for India - #1 Ranked",
        description: "Grand Finale selection among 12,000+ submissions for Bharatcraft.",
        icon: <Award className="w-5 h-5" />,
    },
    {
        year: "2024",
        title: "MIT Mysore Hackathon Winner",
        description: "1st Place for CiteCraft AI citation management system.",
        icon: <Award className="w-5 h-5" />,
    },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 100,
        damping: 30,
        duration: 2000,
    });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(
                    Math.round(latest)
                );
            }
        });
    }, [springValue]);

    return <span ref={ref}>0</span>;
}

export default function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-navy">
            {/* Background glow Decor */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Journey Text */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue via-purple to-pink bg-clip-text text-transparent">
                                Building the <span className="text-blue">Future</span>
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-12 font-medium">
                                I am an AI/ML developer and full-stack engineer dedicated to creating high-performance,
                                intelligent systems. Based in <span className="text-blue">Bengaluru, India</span>, I bridge
                                the gap between innovative research and scalable production applications.
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-blue/30 transition-all duration-500"
                                >
                                    <h3 className="text-5xl font-black text-blue mb-2 flex items-baseline">
                                        <Counter value={10} />
                                        <span className="text-2xl ml-1">+</span>
                                    </h3>
                                    <p className="text-xs text-white/40 uppercase font-black tracking-[0.2em]">Projects Launched</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="glass-card p-8 rounded-[2rem] border-white/5 hover:border-purple/30 transition-all duration-500"
                                >
                                    <h3 className="text-5xl font-black text-purple mb-2">
                                        <Counter value={3} />
                                    </h3>
                                    <p className="text-xs text-white/40 uppercase font-black tracking-[0.2em]">Hackathon Wins</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Timeline */}
                    <div className="lg:w-1/2 relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue via-purple to-transparent opacity-20" />

                        <div className="space-y-10">
                            {milestones.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative pl-20"
                                >
                                    <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                                        <div className="w-5 h-5 rounded-full bg-navy border-2 border-blue shadow-[0_0_20px_rgba(0,212,255,0.6)] z-10" />
                                        <div className="absolute w-12 h-px bg-gradient-to-r from-blue/50 to-transparent left-8" />
                                    </div>
                                    <div className="glass-card p-8 rounded-[2.5rem] hover:border-blue/20 transition-all duration-500 group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-blue/10 transition-colors" />

                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-blue/10 rounded-lg text-blue">
                                                {item.icon}
                                            </div>
                                            <span className="text-sm font-black text-blue/60 tracking-widest">{item.year}</span>
                                        </div>
                                        <h4 className="text-2xl font-black mb-3 group-hover:text-blue transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/50 text-base leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

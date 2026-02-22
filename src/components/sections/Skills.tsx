"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Code2,
    Cloud,
    Sparkles,
    Database,
    Globe,
    Layers,
    Cpu
} from "lucide-react";

const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: <Brain className="w-8 h-8" />,
        color: "text-blue",
        glow: "shadow-blue/20",
        skills: ["PyTorch", "TensorFlow", "Computer Vision", "NLP", "LLMs", "RAG"]
    },
    {
        title: "Full-Stack Dev",
        icon: <Code2 className="w-8 h-8" />,
        color: "text-purple",
        glow: "shadow-purple/20",
        skills: ["Next.js", "React", "Node.js", "FastAPI", "TypeScript", "Tailwind"]
    },
    {
        title: "Cloud & DevOps",
        icon: <Cloud className="w-8 h-8" />,
        color: "text-pink",
        glow: "shadow-pink/20",
        skills: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "Git"]
    },
    {
        title: "Specializations",
        icon: <Sparkles className="w-8 h-8" />,
        color: "text-emerald-400",
        glow: "shadow-emerald-400/20",
        skills: ["Web3 / DeFi", "Solidity", "System Design", "UI/UX", "Three.js", "PostgreSQL"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-navy">
            {/* Background patterns */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue">My Tech Arsenal</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black mb-8 bg-gradient-to-r from-blue via-cyan-400 to-purple bg-clip-text text-transparent"
                    >
                        Mastering the <span className="text-white">Stack</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue to-purple mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-10 rounded-[3rem] group hover:border-blue/30 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <div className={`absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 scale-150 ${category.color}`}>
                                {category.icon}
                            </div>

                            <div className={`w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 ${category.color}`}>
                                {category.icon}
                            </div>

                            <h3 className="text-2xl font-black mb-6 group-hover:text-white transition-colors">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-white/40 group-hover:text-white/80 group-hover:border-white/10 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Corner Accent */}
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-10 pointer-events-none from-blue to-transparent`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

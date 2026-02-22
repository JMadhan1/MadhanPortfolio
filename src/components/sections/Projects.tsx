"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
    {
        title: "CodeMind AI",
        category: "AI / Development",
        description: "Intelligent code analysis platform using large language models to automate debugging and optimize software architecture.",
        tags: ["Next.js", "FastAPI", "TensorFlow", "PostgreSQL"],
        links: { github: "#", live: "#" },
        image: "/img/codemind.png",
        accent: "from-blue to-purple"
    },
    {
        title: "CiteCraft AI",
        category: "AI / Education",
        description: "An AI-driven citation management system that automatically generates accurate bibliography and detects plagiarism.",
        tags: ["React", "Python", "NLP", "Azure"],
        links: { github: "#", live: "#" },
        image: "/img/citecraft.png",
        accent: "from-purple to-pink"
    },
    {
        title: "Bharatcraft",
        category: "FinTech / Social",
        description: "Connecting Indian artisans directly to global markets through an AI-powered multilingual platform for fair trade.",
        tags: ["Next.js", "GPT-4", "Stripe", "i18next"],
        links: { github: "#", live: "#" },
        image: "/img/toi_event.jpg",
        accent: "from-orange-500 to-red-500"
    },
    {
        title: "InvestGuard AI",
        category: "FinTech",
        description: "Predictive analysis tool for decentralized finance markets, helping users identify potential risks and growth opportunities.",
        tags: ["Solidity", "Python", "ML", "Web3"],
        links: { github: "#", live: "#" },
        image: "/img/investguardai.png",
        accent: "from-emerald-500 to-blue-500"
    },
    {
        title: "CareerSync",
        category: "EdTech",
        description: "AI-powered resume optimizer and job matching engine that bridges the gap between skills and market demand.",
        tags: ["React", "Express", "Node.js", "OpenAI"],
        links: { github: "#", live: "#" },
        image: "/img/careersync.png",
        accent: "from-cyan-500 to-indigo-500"
    },
    {
        title: "OneDeFi",
        category: "Web3",
        description: "Unified dashboard for tracking assets and performing swaps across multiple blockchain protocols securely.",
        tags: ["Next.js", "Ethers.js", "The Graph", "IPFS"],
        links: { github: "#", live: "#" },
        image: "/img/onedefi.png",
        accent: "from-pink-500 to-purple-500"
    }
];

export default function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);
    const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section id="projects" ref={targetRef} className="relative h-[300vh] bg-navy">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="container mx-auto px-6 mb-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue via-purple to-pink bg-clip-text text-transparent"
                            >
                                Selected <br /><span className="text-blue">Work</span>
                            </motion.h2>
                            <p className="text-white/50 max-w-md">
                                A curated selection of projects where AI meets practical engineering. Scroll to explore.
                            </p>
                        </div>

                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 text-white/70 hover:text-blue transition-colors group mb-4"
                        >
                            <span className="font-bold tracking-widest uppercase text-xs">View All Projects</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                    </div>
                </div>

                {/* Horizontal Scroll Track */}
                <div className="flex items-center">
                    <motion.div style={{ x: springX }} className="flex gap-8 px-6">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="glass-card w-[350px] md:w-[450px] flex-shrink-0 rounded-[2.5rem] overflow-hidden group border-white/5 border hover:border-blue/30 transition-all duration-500"
                            >
                                {/* Image Preview */}
                                <div className="h-64 relative overflow-hidden bg-navy">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-navy/60 backdrop-blur-sm">
                                        <div className="flex gap-4">
                                            <a href={project.links.github} className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all border border-white/10 group/btn">
                                                <Github className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
                                            </a>
                                            <a href={project.links.live} className="p-4 bg-blue rounded-full hover:bg-blue/80 transition-all group/btn">
                                                <ExternalLink className="w-6 h-6 text-navy group-hover/btn:scale-110 transition-transform" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="absolute top-8 right-8 text-white/40 group-hover:text-white transition-colors z-10">
                                        <span className="text-[10px] font-bold tracking-widest uppercase bg-navy/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed mb-6 h-20 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold tracking-widest uppercase text-white/40 group-hover:border-blue/20 group-hover:text-blue/60 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Progress Bar */}
                <div className="container mx-auto px-6 mt-12">
                    <div className="w-full h-[2px] bg-white/5 relative rounded-full overflow-hidden">
                        <motion.div
                            style={{ scaleX: scrollYProgress }}
                            className="absolute inset-0 bg-gradient-to-r from-blue to-purple origin-left"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

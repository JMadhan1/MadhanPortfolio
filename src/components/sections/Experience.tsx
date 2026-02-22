"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        role: "Summer Research Intern",
        company: "MANIT Bhopal",
        duration: "May 2025 - Present",
        location: "Bhopal, India",
        description: [
            "Leading research on advanced facial authenticity verification systems.",
            "Achieved 99.4% accuracy using custom deep learning architectures.",
            "Optimizing models for real-time edge deployment."
        ],
        tech: ["Python", "PyTorch", "OpenCV", "Edge Computing"]
    },
    {
        role: "AI Azure Intern",
        company: "Microsoft",
        duration: "Dec 2024 - Feb 2025",
        location: "Remote",
        description: [
            "Built 'DocuMind', an automated document summarization tool.",
            "Leveraged Azure AI services to process large-scale enterprise data.",
            "Improved summarization relevance (ROUGE score) by 15%."
        ],
        tech: ["Azure AI", "LangChain", "Node.js", "GPT-3.5"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue via-purple to-pink bg-clip-text text-transparent"
                    >
                        Professional <span className="text-blue">Journey</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue to-purple mx-auto rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-8 md:p-12 rounded-[2.5rem] relative group border-white/5"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                                <div>
                                    <div className="flex items-center gap-3 text-blue mb-2">
                                        <Briefcase className="w-5 h-5" />
                                        <span className="text-sm font-bold uppercase tracking-widest">{exp.role}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold">{exp.company}</h3>
                                </div>
                                <div className="flex flex-col items-start md:items-end text-white/40 text-sm font-medium">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-white/70 leading-relaxed">
                                        <CheckCircle2 className="w-5 h-5 text-blue mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-white/40 group-hover:text-blue group-hover:border-blue/30 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

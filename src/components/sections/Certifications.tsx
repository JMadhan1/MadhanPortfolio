"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "Dec 2024",
        icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
    },
    {
        title: "Azure AI Fundamentals",
        issuer: "Microsoft",
        date: "Nov 2024",
        icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    },
    {
        title: "Oracle AI Associate",
        issuer: "Oracle",
        date: "Oct 2024",
        icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    },
    {
        title: "Google AI Essentials",
        issuer: "Google",
        date: "Sep 2024",
        icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    },
    {
        title: "NVIDIA AI Fundamentals",
        issuer: "NVIDIA",
        date: "Aug 2024",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    },
    {
        title: "IIT Madras IoT",
        issuer: "NPTEL",
        date: "Jun 2024",
        icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-32 relative bg-navy/50 overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-blue/10 border border-blue/20 rounded-full mb-6"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue">Official Verification</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-black mb-8 bg-gradient-to-r from-blue via-purple to-pink bg-clip-text text-transparent"
                    >
                        Verified <span className="text-white">Expertise</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue to-purple mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="glass-card p-8 rounded-[2rem] border-white/5 group hover:border-blue/30 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue/5 blur-2xl rounded-full translate-x-8 -translate-y-8 group-hover:bg-blue/10 transition-colors" />

                            <div className="flex items-start gap-6 relative z-10">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/5">
                                    {cert.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-black text-xl mb-2 group-hover:text-blue transition-colors leading-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-4">
                                        {cert.issuer}
                                    </p>
                                    <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold">
                                        <Award className="w-3 h-3 text-blue/50" />
                                        <span>COMPLETED {cert.date.toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

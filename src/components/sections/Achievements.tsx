"use client";

import { motion } from "framer-motion";
import { Award, Trophy, TrendingUp, Lightbulb, Users, Globe } from "lucide-react";
import Image from "next/image";

const achievements = [
    {
        rank: "#1 Ranked",
        category: "Economic Resilience - Tech",
        title: "TOI Ideas for India Innovation Challenge",
        description: "Selected for Grand Finale among 12,000+ submissions from across India for building a Viksit Bharat 2047. Featured in the prestigious TOI Ideas for India Book.",
        organizer: "The Times of India",
        presenter: "Optum India",
        location: "New Delhi",
        icon: <Trophy className="w-8 h-8 text-orange-500" />,
        image: "/img/toi_event.jpg"
    },
    {
        title: "Bharatcraft",
        subtitle: "Connecting Indian Artisans Directly to Global Markets",
        description: "An AI-powered platform that eliminates middlemen, enabling Indian artisans to connect directly with global buyers.",
        highlights: [
            { icon: <Globe className="w-5 h-5" />, label: "Multilingual", sub: "15+ languages" },
            { icon: <Users className="w-5 h-5" />, label: "Empowerment", sub: "10,000+ Artisans" },
            { icon: <TrendingUp className="w-5 h-5" />, label: "Market Access", sub: "Global Reach" },
        ],
        accent: "bg-orange-500/10 border-orange-500/20"
    }
];

const galleryImages = [
    { src: "/img/toi_certificate.jpg", label: "Official Recognition", category: "Certificate" },
    { src: "/img/toi_certificate_excellence.jpg", label: "Certificate of Excellence", category: "Excellence" },
    { src: "/img/toi_book_page.jpg", label: "Featured in TOI Book", category: "Published" },
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-32 relative overflow-hidden bg-navy">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6"
                    >
                        <Award className="w-4 h-4 text-orange-500" />
                        <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">Latest Achievement</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                    >
                        National Innovation <br /> Recognition
                    </motion.h2>
                </div>

                {/* Main Achievement Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass-card p-8 md:p-12 rounded-[3rem] border-orange-500/10"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                                <Trophy className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full mb-2 inline-block">#1 Ranked</span>
                                <h3 className="text-2xl font-bold">Ideas for India Challenge</h3>
                            </div>
                        </div>

                        <h4 className="text-3xl font-black mb-6 text-white leading-tight">
                            Selected for Grand Finale among 12,000+ entries
                        </h4>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            Recognized by <strong>The Times of India</strong> and <strong>Optum India</strong> for Bharatcraft,
                            connecting Indian artisans directly to global markets. Featured in the TOI Innovation Book as a key solution for Viksit Bharat 2047.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
                                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Presented By</p>
                                <p className="font-bold">Optum India</p>
                            </div>
                            <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
                                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Organized By</p>
                                <p className="font-bold">Times of India</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Project Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="glass-card p-10 rounded-[3rem] flex-1">
                            <div className="flex items-center gap-4 mb-6">
                                <Lightbulb className="w-8 h-8 text-yellow-500" />
                                <h3 className="text-3xl font-black">Bharatcraft</h3>
                            </div>
                            <p className="text-orange-500 font-bold text-lg mb-6">Direct empowerment for 10,000+ artisans</p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                {achievements[1].highlights?.map((h, i) => (
                                    <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-orange-500/20 transition-colors">
                                        <div className="mb-2 flex justify-center text-orange-400">{h.icon}</div>
                                        <p className="text-sm font-bold text-white mb-1">{h.label}</p>
                                        <p className="text-[10px] text-white/40 uppercase tracking-tighter">{h.sub}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-transparent rounded-2xl border-l-4 border-orange-500 italic text-white/70">
                                &quot;Every artisan deserves dignity and fair earnings—technology should empower traditions, not replace them.&quot;
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card rounded-3xl overflow-hidden group border-white/5"
                        >
                            <div className="aspect-[4/3] bg-white/10 relative">
                                {/* Fallback pattern if image is missing */}
                                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-navy">
                                    <div className="w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                                </div>
                                <Image
                                    src={img.src}
                                    alt={img.label}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 px-4 py-1.5 bg-navy/80 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase text-orange-500 border border-orange-500/30">
                                    {img.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-sm font-bold text-white/80">{img.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

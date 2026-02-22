"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple/10 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 z-0" />

            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(181,55,242,0.3)]">
                                Let&apos;s build <br />
                                something <span className="text-purple">extraordinary</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-12 max-w-md">
                                Whether you have a groundbreaking idea or a complex problem needing an AI-driven solution, I&apos;m here to help.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <a href="mailto:jmadhanplacement@gmail.com" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple/20 group-hover:border-purple/50 transition-all duration-300">
                                        <Mail className="w-6 h-6 text-purple" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Email</p>
                                        <p className="text-sm md:text-base font-medium break-all">jmadhanplacement@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/j-madhan-6b90a32b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue/20 group-hover:border-blue/50 transition-all duration-300">
                                        <Linkedin className="w-6 h-6 text-blue" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold">LinkedIn</p>
                                        <p className="text-sm md:text-base font-medium">J Madhan</p>
                                    </div>
                                </a>

                                <a href="https://github.com/JMadhan1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                                        <Github className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold">GitHub</p>
                                        <p className="text-sm md:text-base font-medium">JMadhan1</p>
                                    </div>
                                </a>

                                <a href="https://leetcode.com/u/JMadhan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                                        <Code className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold">LeetCode</p>
                                        <p className="text-sm md:text-base font-medium">JMadhan</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 md:p-12 rounded-[2rem] border-white/10 relative"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple/50 transition-colors text-white placeholder:text-white/20"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple/50 transition-colors text-white placeholder:text-white/20"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple/50 transition-colors text-white placeholder:text-white/20 resize-none"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(168, 85, 247, 0.9)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-5 bg-purple text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

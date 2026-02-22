"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? "py-4"
                : "py-8"
                }`}
        >
            <div className="container mx-auto px-6">
                <nav className={`flex items-center justify-between transition-all duration-500 px-8 py-4 rounded-full ${scrolled
                    ? "bg-navy/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                    : "bg-transparent border border-transparent"
                    }`}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-black tracking-tighter cursor-pointer flex items-center gap-2"
                    >
                        <div className="w-8 h-8 bg-blue rounded-lg rotate-12 flex items-center justify-center">
                            <span className="text-navy text-xl -rotate-12">M</span>
                        </div>
                        <span className="hidden sm:inline">Madhan<span className="text-blue"> J</span></span>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ y: -2 }}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-blue transition-colors px-2 py-1 relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-blue transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-2.5 bg-blue text-navy font-black rounded-full text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
                        >
                            Hire Me
                            <ArrowRight className="w-3 h-3" />
                        </motion.a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? "bg-white/5" : "bg-white/10"
                            }`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="text-blue" /> : <Menu className="text-white" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-6 right-6 mt-4 lg:hidden bg-navy/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue/10 blur-3xl rounded-full" />
                        <div className="flex flex-col gap-6 relative z-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-black text-white/80 hover:text-blue transition-colors flex items-center justify-between group"
                                >
                                    {link.name}
                                    <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

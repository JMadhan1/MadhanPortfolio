"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ThreeCanvas from "@/components/ui/ThreeCanvas";
import AIOrb from "@/components/ui/AIOrb";

export default function Home() {
  return (
    <main className="relative bg-navy text-white min-h-screen">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ThreeCanvas>
          <AIOrb
            position={[-2, 1, -5]}
            color="#00d4ff"
            distort={0.4}
            speed={2}
          />
          <AIOrb
            position={[3, -2, -8]}
            color="#b537f2"
            distort={0.6}
            speed={1.5}
          />
        </ThreeCanvas>
      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />

        {/* Transitional Spacers with Glow */}
        <div className="h-24 bg-gradient-to-b from-navy to-transparent" />

        <About />
        <Achievements />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />

        <footer className="py-12 border-t border-white/5 text-center text-white/30 text-xs font-bold tracking-[0.3em] uppercase">
          &copy; {new Date().getFullYear()} J Madhan. Built with Next.js & AI.
        </footer>
      </div>
    </main>
  );
}

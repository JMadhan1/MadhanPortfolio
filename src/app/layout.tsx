import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J Madhan | AI/ML Developer & Full-Stack Innovator",
  description: "Portfolio of J Madhan, an AI/ML Developer specialized in creating intelligent web applications, computer vision, and NLP solutions.",
  keywords: ["AI Developer", "ML Engineer", "J Madhan", "Machine Learning", "Full-stack Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-navy text-white antialiased cursor-none selection:bg-blue/30 selection:text-blue`}>
        <div className="noise-overlay" />
        <CustomCursor />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

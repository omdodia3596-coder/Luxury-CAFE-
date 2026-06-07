"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Particle {
  width: number;
  height: number;
  left: string;
  top: string;
  duration: number;
  yRange: number[];
  xRange: number[];
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { scrollY } = useScroll();

  // Parallax shifts for background layers
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const bgGlowY1 = useTransform(scrollY, [0, 800], [0, -70]);
  const bgGlowY2 = useTransform(scrollY, [0, 800], [0, 50]);
  const gridOpacity = useTransform(scrollY, [0, 300], [1, 0.15]);

  useEffect(() => {
    const generated = [...Array(6)].map(() => ({
      width: Math.random() * 80 + 40,
      height: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 14 + 10,
      yRange: [0, Math.random() * -100 - 50, 0],
      xRange: [0, Math.random() * 60 - 30, 0],
    }));
    setParticles(generated);
  }, []);

  // Title character slide configurations
  const titleContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.6,
      },
    },
  };

  const titleItem = {
    hidden: { opacity: 0, y: 70 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-matte-black">
      {/* Background Parallax Radial Glows */}
      <motion.div 
        style={{ y: bgGlowY1 }}
        className="absolute top-[20%] left-[8%] w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[180px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgGlowY2 }}
        className="absolute bottom-[10%] right-[8%] w-[45vw] h-[45vw] rounded-full bg-gold/3.5 blur-[200px] pointer-events-none" 
      />

      {/* Layered High-Fashion Grid Pattern Overlay */}
      <motion.div 
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 bg-[linear-gradient(rgba(242,235,231,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(242,235,231,0.01)_1px,transparent_1px)] bg-[size:90px_90px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" 
      />

      {/* Content Container (Layered via textY) */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center select-none"
      >
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex items-center space-x-2 px-4.5 py-1.5 border border-white/5 rounded-full bg-espresso/40 backdrop-blur-xl mb-12 shadow-sm"
        >
          <Sparkles size={10} className="text-gold/85 animate-pulse" />
          <span className="text-[8px] sm:text-[9px] tracking-[0.4em] font-semibold text-warm-ivory/80 uppercase">
            Where Fashion Meets Flavor
          </span>
        </motion.div>

        {/* Asymmetrical Editorial Headlines */}
        <motion.div
          variants={titleContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center mb-10"
        >
          {/* Main LUXE serif headline */}
          <div className="overflow-hidden py-1">
            <motion.h1 
              variants={titleItem}
              className="font-serif text-6xl sm:text-8xl lg:text-[8rem] font-extrabold tracking-[0.16em] text-warm-ivory uppercase leading-none"
            >
              LUXE
            </motion.h1>
          </div>

          {/* Staggered offset CAFÉ title with outlines */}
          <div className="overflow-hidden py-1 -mt-1 sm:-mt-3">
            <motion.h1 
              variants={titleItem}
              className="font-serif text-6xl sm:text-8xl lg:text-[8rem] font-light tracking-[0.22em] text-stroke-gold uppercase leading-none"
            >
              CAFÉ
            </motion.h1>
          </div>

          {/* Luxury Label Tagline */}
          <motion.div
            variants={titleItem}
            className="flex items-center space-x-4 mt-6"
          >
            <div className="w-6 h-[1px] bg-gold/45" />
            <span className="font-sans text-[9px] tracking-[0.6em] text-gold/80 font-light uppercase">
              FashionTV Café • Anand
            </span>
            <div className="w-6 h-[1px] bg-gold/45" />
          </motion.div>
        </motion.div>

        {/* Brand narrative statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] sm:text-xs text-warm-ivory/50 max-w-xl font-light leading-relaxed tracking-wider mb-14"
        >
          An immersive culinary lounge inspired by global fashion collections. Experience authentic wood-fired Neapolitan pizzas, specialty coffees, and signature mixology.
        </motion.p>

        {/* Liquid Glass CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <Link
            href="/menu"
            className="liquid-glass-button shimmer-button w-44 text-center py-3.5 text-warm-ivory font-bold text-[9px] tracking-[0.25em] uppercase rounded-full shadow-lg border border-gold/30"
          >
            EXPLORE MENU
          </Link>
          <Link
            href="#reservations"
            className="w-44 text-center py-3.5 border border-white/10 hover:border-gold/30 hover:bg-espresso/50 text-warm-ivory font-bold text-[9px] tracking-[0.25em] uppercase rounded-full bg-espresso/25 backdrop-blur-md transition-all duration-500 active:scale-97 active:translate-y-[1px] shimmer-button"
          >
            RESERVE A TABLE
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Animated campaign reflections */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/6"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
              filter: "blur(40px)",
            }}
            animate={{
              y: particle.yRange,
              x: particle.xRange,
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scroll indicator with sliding line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        onClick={() => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[8px] tracking-[0.3em] text-warm-ivory/25 uppercase mb-3 transition-colors group-hover:text-gold/80">
          EXPLORE
        </span>
        <div className="relative w-[1px] h-10 bg-warm-ivory/10 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gold/70"
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

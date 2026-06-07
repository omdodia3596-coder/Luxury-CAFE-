"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the preloader has already been shown in this session
    const hasLoadedBefore = sessionStorage.getItem("luxe_cafe_preloaded");
    if (hasLoadedBefore) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("luxe_cafe_preloaded", "true");
    }, 2800); // Animation duration

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1] as any, // Custom cubic-bezier for a smooth luxury slide up
      },
    },
  };

  const letterVariants = {
    initial: { opacity: 0, y: 30, scale: 0.8 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: [0.215, 0.61, 0.355, 1] as any,
      },
    }),
  };

  const subtitleVariants = {
    initial: { opacity: 0, letterSpacing: "0.5em" },
    animate: {
      opacity: 1,
      letterSpacing: "0.3em",
      transition: {
        duration: 1.2,
        delay: 0.8,
        ease: "easeOut" as any,
      },
    },
  };

  const barVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        delay: 0.6,
        ease: "easeInOut" as any,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-espresso select-none border border-gold/10"
        >
          {/* Main LUXE Branding spell-out */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex space-x-6">
              {["L", "U", "X", "E"].map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-widest text-warm-ivory uppercase"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Line bar loading indicator */}
            <motion.div
              variants={barVariants}
              initial="initial"
              animate="animate"
              className="w-48 h-[1px] bg-gold origin-center"
            />

            {/* Premium tag line */}
            <motion.span
              variants={subtitleVariants}
              initial="initial"
              animate="animate"
              className="font-sans text-[9px] md:text-[11px] font-semibold text-warm-ivory/60 uppercase text-center mt-2"
            >
              FASHIONTV CAFÉ • ANAND
            </motion.span>
          </div>

          {/* Absolute decorative fashion quotes or details in background corner */}
          <div className="absolute bottom-10 text-[9px] tracking-[0.2em] text-warm-ivory/30 uppercase font-light font-sans text-center">
            Where Fashion Meets Flavor
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Experience", href: "/#experience" },
    { name: "Collections", href: "/#collections" },
    { name: "Menu Catalog", href: "/menu" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Events", href: "/#events" },
    { name: "Reservations", href: "/#reservations" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-500 flex items-center transparent-glass shadow-[0_15px_50px_rgba(0,0,0,0.6)] ${
          isScrolled 
            ? "py-2 px-6 h-14" 
            : "py-3 px-8 h-16"
        } w-[90%] md:w-auto justify-between md:justify-center md:space-x-8`}
      >
        {/* Mobile Brand Logo (visible on mobile, hidden on desktop to keep centering) */}
        <Link href="/" className="group flex flex-col md:hidden shrink-0">
          <span className="font-serif text-base font-bold tracking-widest text-gold group-hover:text-gold-hover transition-colors duration-300">
            LUXE CAFÉ
          </span>
          <span className="text-[7px] tracking-[0.2em] text-warm-ivory/50 uppercase group-hover:text-warm-ivory transition-colors duration-300 -mt-0.5">
            Anand • FTV Café
          </span>
        </Link>

        {/* Desktop Nav Links (Centered) */}
        <div className="hidden md:flex items-center space-x-7 shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[9px] tracking-[0.24em] uppercase hover:text-gold transition-colors duration-300 font-bold ${
                  isActive ? "text-gold" : "text-warm-ivory/65"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Book CTA (Liquid Glass + Shimmer Sweep) */}
        <div className="hidden md:flex items-center shrink-0">
          <Link 
            href="/#reservations" 
            className="liquid-glass-button shimmer-button px-5.5 py-2 text-[9px] font-bold tracking-[0.2em] uppercase rounded-full text-warm-ivory border border-gold/30 hover:border-gold/55"
          >
            BOOK TABLE
          </Link>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden flex items-center shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-warm-ivory hover:text-gold focus:outline-none cursor-pointer p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay (Inset capsule layout) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 z-50 bg-espresso/95 backdrop-blur-xl flex flex-col justify-between px-8 py-20 md:hidden border border-white/8 rounded-2xl shadow-2xl overflow-y-auto"
          >
            {/* Top Close icon for usability */}
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-warm-ivory hover:text-gold focus:outline-none cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col space-y-5 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl text-warm-ivory/80 hover:text-gold tracking-wide transition-colors duration-300 flex items-center justify-between"
                >
                  {link.name}
                  <ArrowRight size={16} className="text-gold/45" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col space-y-6 mt-8">
              <Link
                href="/#reservations"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 bg-gold hover:bg-gold-hover text-espresso font-bold text-xs tracking-widest uppercase transition-all duration-300 border border-gold"
              >
                BOOK A TABLE
              </Link>
              
              <div className="flex items-center justify-center space-x-6 text-warm-ivory/40">
                <a
                  href="https://www.facebook.com/fcafebyftv.anand.gujarat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://www.instagram.com/luxecafe.shaanmall?igsh=eHFkbXFucWZ5Nm9r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  <InstagramIcon size={20} />
                </a>
              </div>

              <p className="text-[9px] text-center text-warm-ivory/30 tracking-wider">
                © 2026 LUXE Café Anand • Operated under franchise
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

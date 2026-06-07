"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-gold/10 pt-28 pb-12 px-12 text-warm-ivory/80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-3xl font-bold tracking-widest text-gold">
              LUXE CAFÉ
            </span>
            <span className="text-xs tracking-[0.2em] text-warm-ivory/60 uppercase">
              Anand • FashionTV Café
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-warm-ivory/50">
            A premium fusion of global culinary excellence, high fashion ambiance, and luxury nightlife. Celebrating where fashion meets flavor in Gujarat.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.facebook.com/fcafebyftv.anand.gujarat/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:border-gold hover:text-gold-hover transition-colors"
            >
              <FacebookIcon size={14} />
            </a>
            <a
              href="https://www.instagram.com/luxecafe.shaanmall?igsh=eHFkbXFucWZ5Nm9r"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:border-gold hover:text-gold-hover transition-colors"
            >
              <InstagramIcon size={14} />
            </a>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg text-gold tracking-widest uppercase">Opening Hours</h4>
          <div className="flex items-start space-x-3 text-xs">
            <Clock size={16} className="text-gold mt-0.5" />
            <div className="flex flex-col space-y-1">
              <span className="font-medium text-warm-ivory">Monday – Sunday</span>
              <span className="text-warm-ivory/60">11:00 AM – 11:00 PM</span>
              <span className="text-gold/80 text-[10px] uppercase tracking-wider">All-Day Kitchen & Mocktail Bar</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg text-gold tracking-widest uppercase">Reservations</h4>
          <div className="flex flex-col space-y-3 text-xs">
            <a href="tel:+917738438817" className="flex items-center space-x-3 hover:text-gold transition-colors">
              <Phone size={14} className="text-gold" />
              <span>+91 77384 38817</span>
            </a>
            <a href="mailto:Shivftv24@gmail.com" className="flex items-center space-x-3 hover:text-gold transition-colors">
              <Mail size={14} className="text-gold" />
              <span>Shivftv24@gmail.com</span>
            </a>
            <a href="mailto:sdpatel1920@gmail.com" className="flex items-center space-x-3 hover:text-gold transition-colors">
              <Mail size={14} className="text-gold" />
              <span>sdpatel1920@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Address Info */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-lg text-gold tracking-widest uppercase">The Lounge</h4>
          <div className="flex items-start space-x-3 text-xs leading-relaxed">
            <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
            <span className="text-warm-ivory/70">
              Ground Floor 1, Shaan AV Fortune,<br />
              Shaan Mall, New Rajmarg Road,<br />
              near Elecon Factory, Vallabh Vidyanagar,<br />
              Anand, Gujarat 388120, India
            </span>
          </div>
        </div>
      </div>

      {/* Disclosures & Legal */}
      <div className="max-w-7xl mx-auto border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-warm-ivory/40 tracking-wider">
        <div className="text-center md:text-left leading-relaxed">
          <p>© 2026 LUXE Café Anand. Operated by **SHIV CAFE AND RESTRO** under franchise authorization.</p>
          <p className="mt-1">All design rights, logos, and corporate branding represent FashionTV and FTV Café.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/menu" className="hover:text-gold transition-colors uppercase">Explore Menu</Link>
          <Link href="/#reservations" className="hover:text-gold transition-colors uppercase">Bookings</Link>
          <Link href="/dashboard" className="hover:text-gold transition-colors uppercase text-gold/80 font-bold">Ambassador Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}

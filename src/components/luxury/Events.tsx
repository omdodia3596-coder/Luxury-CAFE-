"use client";

import { cafeEvents } from "@/data/eventData";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Events() {
  const handleEventBooking = (eventTitle: string) => {
    const resSection = document.getElementById("reservations");
    if (resSection) {
      resSection.scrollIntoView({ behavior: "smooth" });
      
      setTimeout(() => {
        const occasionInput = document.getElementById("occasion") as HTMLSelectElement;
        if (occasionInput) {
          occasionInput.value = eventTitle;
          const event = new Event('change', { bubbles: true });
          occasionInput.dispatchEvent(event);
        }
      }, 500);
    }
  };

  return (
    <section id="events" className="py-48 px-12 bg-matte-black border-t border-gold/10 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-[-2%] top-[12%] font-serif text-[18rem] md:text-[24rem] font-bold text-stroke-gold leading-none pointer-events-none select-none opacity-[0.02] z-0">
        04
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="flex flex-col space-y-2">
            <span className="text-[9px] tracking-[0.35em] text-gold/80 uppercase font-bold">
              LUXURY NIGHTLIFE & OFFERS
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-ivory uppercase leading-none">
              EVENTS &<br />
              <span className="font-light tracking-[0.08em] text-stroke-ivory">SPECIALS</span>
            </h2>
          </div>
          <p className="text-xs text-warm-ivory/60 max-w-sm font-light tracking-wider leading-relaxed">
            From exclusive counts downs to weekly specials. Be a part of Anand's premier high-society lounge experiences.
          </p>
        </div>

        {/* Events Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cafeEvents.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row border border-white/[0.06] hover:border-gold/35 bg-espresso/55 backdrop-blur-md rounded-xl overflow-hidden group transition-all duration-[0.8s] shadow-[0_12px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.05)]"
            >
              {/* Image Banner */}
              <div className="w-full sm:w-[42%] h-[200px] sm:h-auto overflow-hidden relative border-r border-white/[0.04]">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-[1.5s] ease-out pointer-events-none"
                />
                <div className="absolute top-4 left-4 bg-espresso/95 border border-gold/25 backdrop-blur-md px-3.5 py-1.5 text-[7px] font-bold text-gold tracking-widest uppercase rounded-full">
                  {evt.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="w-full sm:w-[58%] p-7 flex flex-col justify-between space-y-5">
                <div className="flex flex-col space-y-2.5">
                  <div className="flex items-center space-x-2 text-[9px] tracking-wider text-warm-ivory/40 font-medium">
                    <Calendar size={11} className="text-gold" />
                    <span>{evt.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-warm-ivory uppercase group-hover:text-gold transition-colors duration-400 leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-warm-ivory/60 leading-relaxed font-light tracking-wide">
                    {evt.description}
                  </p>
                </div>

                <button
                  onClick={() => handleEventBooking(evt.title)}
                  className="self-start flex items-center space-x-1.5 text-[9px] tracking-[0.25em] font-bold text-gold hover:text-gold-hover uppercase transition-colors group/btn cursor-pointer"
                >
                  <span>{evt.ctaText || "RESERVE TABLE"}</span>
                  <ArrowRight size={11} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

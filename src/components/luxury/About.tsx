"use client";

import { Award, ShieldCheck, Heart, UserCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const brandStats = [
    { icon: Award, label: "FTV AUTHORIZATION", value: "Official Franchise" },
    { icon: ShieldCheck, label: "OPERATED BY", value: "Shiv Cafe & Restro" },
    { icon: UserCheck, label: "FOUNDER", value: "Sunny Patel" },
    { icon: Heart, label: "CHEF DE CUISINE", value: "Amit Sharma" }
  ];

  // Scroll triggers for image parallax offsets
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const imageY2 = useTransform(scrollYProgress, [0, 1], [-20, 40]);

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="relative py-48 px-12 bg-espresso border-t border-gold/10 overflow-hidden"
    >
      {/* Editorial Watermark Number */}
      <div className="absolute right-[-3%] top-[12%] font-serif text-[18rem] md:text-[24rem] font-bold text-stroke-ivory leading-none pointer-events-none select-none opacity-3 z-0">
        01
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Panel: Asymmetrical Offset Imagery */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            {/* Outlined backing border */}
            <div className="absolute inset-4 border border-gold/15 pointer-events-none rounded-sm z-0 translate-x-3 translate-y-3" />
            
            {/* Main Portrait Image (Parallax shift) */}
            <motion.div 
              style={{ y: imageY1 }}
              className="col-span-8 overflow-hidden rounded-sm relative h-[400px] shadow-2xl z-10 border border-gold/20"
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
                alt="Luxury Culinary Presentation"
                className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Overlapping Offset Landscape Image (Inverse parallax shift) */}
            <motion.div 
              style={{ y: imageY2 }}
              className="col-span-6 overflow-hidden rounded-sm relative h-[200px] -mt-[140px] ml-auto mr-[-10px] shadow-2xl z-20 border border-gold/30"
            >
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop"
                alt="Premium Cafe Setting"
                className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Float Caption label */}
            <div className="absolute bottom-[-30px] left-8 z-30 font-mono text-[8px] tracking-[0.25em] text-warm-ivory/30 uppercase hidden sm:block">
              FIG. 01 — LUXE CAFE AMBIENCE
            </div>
          </div>

          {/* Right Panel: Storytelling & Vogue-style Typography */}
          <div className="lg:col-span-6 flex flex-col space-y-8 lg:pl-6">
            <div className="flex flex-col space-y-2">
              <span className="text-[9px] tracking-[0.35em] text-gold/80 uppercase font-bold">
                ESTABLISHED AT SHAAN MALL, ANAND
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-ivory uppercase leading-none">
                THE LUXE<br />
                <span className="font-light tracking-[0.08em] text-stroke-ivory">EXPERIENCE</span>
              </h2>
            </div>

            <p className="text-xs md:text-sm text-warm-ivory/80 leading-relaxed font-light tracking-wide">
              Step into a hub where style meets flavor. Operated by **SHIV CAFE AND RESTRO** under official franchise authorization, FashionTV Café in Anand stands as a testament to global culinary artistry and high-fashion aesthetics. 
            </p>

            <p className="text-xs md:text-sm text-warm-ivory/70 leading-relaxed font-light tracking-wide">
              Our venue, curated under the vision of owner **Sunny Patel**, is crafted for the discerning palate. From authentic wood-fired, slow-fermented Neapolitan pizzas to custom craft mocktails and artisanal brews prepared by Chef de Cuisine **Amit Sharma** and our team, we ensure hospitality meets absolute elegance.
            </p>

            {/* Stats list with dark panels to pop out from Espresso */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-warm-ivory/10">
              {brandStats.map((stat, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 bg-matte-black/35 p-3.5 border border-white/5 shadow-md rounded-lg">
                  <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-gold shrink-0">
                    <stat.icon size={12} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] tracking-widest text-warm-ivory/30 uppercase">
                      {stat.label}
                    </span>
                    <span className="text-[11px] font-serif font-bold text-warm-ivory uppercase tracking-wider mt-0.5">
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote badge callout (Transparent Glass Plaque) */}
            <div className="p-5 border-l-2 border-gold transparent-glass shadow-2xl rounded-r-xl relative overflow-hidden">
              <p className="text-xs italic text-warm-ivory/70 leading-relaxed relative z-10">
                &ldquo;Place is actually so good in atmosphere, can say a rare gem. Found so good service especially from staff members. Chef Amit Sharma is truly exceptional; every dish is delicious and beautifully presented - classy indeed!&rdquo;
              </p>
              <span className="block text-[8px] tracking-widest font-bold text-gold uppercase mt-3 relative z-10">
                — Verified Guest Google Review
              </span>
              <div className="absolute right-3 bottom-0 font-serif text-7xl text-gold/5 font-extrabold select-none">
                &rdquo;
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

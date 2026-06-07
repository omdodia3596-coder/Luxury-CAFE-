"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Collections() {
  const collectionsList = [
    {
      num: "01",
      title: "Signature Coffee Collection",
      tagline: "Frappes, Lattes & Espressos",
      categoryLink: "/menu?category=coffees",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
      colOffset: "md:mt-0"
    },
    {
      num: "02",
      title: "Artisan Pizza Collection",
      tagline: "Slow-fermented wood-fired Neapolitan",
      categoryLink: "/menu?category=pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
      colOffset: "md:mt-12"
    },
    {
      num: "03",
      title: "Zero-Alc Craft Mocktails",
      tagline: "Handcrafted fruit & herbal infusions",
      categoryLink: "/menu?category=mocktails",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=600&auto=format&fit=crop",
      colOffset: "md:mt-6"
    },
    {
      num: "04",
      title: "Fashion Pasta & Risotto",
      tagline: "Truffled penne & authentic Arborio",
      categoryLink: "/menu?category=pasta-risotto",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop",
      colOffset: "md:mt-0"
    },
    {
      num: "05",
      title: "Fine Dining Clay Oven Selection",
      tagline: "Spiced kebabs & tandoor breads",
      categoryLink: "/menu?category=kebabs",
      image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop",
      colOffset: "md:mt-12"
    },
    {
      num: "06",
      title: "Luxury Dessert Collection",
      tagline: "NY Cheesecake, Tiramisu & Toast",
      categoryLink: "/menu?category=desserts",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
      colOffset: "md:mt-6"
    }
  ];

  return (
    <section id="collections" className="py-48 px-12 bg-matte-black border-t border-gold/10 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-[-2%] bottom-[12%] font-serif text-[18rem] md:text-[24rem] font-bold text-stroke-gold leading-none pointer-events-none select-none opacity-[0.02] z-0">
        02
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="flex flex-col space-y-2">
            <span className="text-[9px] tracking-[0.35em] text-gold/80 uppercase font-bold">
              CURATED MENU SHOWCASE
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-warm-ivory uppercase leading-none">
              SIGNATURE<br />
              <span className="font-light tracking-[0.08em] text-stroke-ivory">COLLECTIONS</span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="group flex items-center space-x-2 text-[9px] tracking-widest text-gold hover:text-gold-hover uppercase font-bold transition-colors"
          >
            <span>VIEW COMPLETE CATALOG</span>
            <ArrowUpRight size={12} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Staggered Columns Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {collectionsList.map((col, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: (idx % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative h-[390px] w-full overflow-hidden border border-white/[0.06] hover:border-gold/35 rounded-xl bg-espresso/55 backdrop-blur-md transition-all duration-[0.8s] shadow-[0_12px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.08)] ${col.colOffset}`}
            >
              {/* Backing Image */}
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-[1.8s] ease-out pointer-events-none"
              />
              
              {/* Refraction inner frame on hover */}
              <div className="absolute inset-3.5 border border-white/0 group-hover:border-gold/10 rounded-lg pointer-events-none transition-all duration-[0.8s] z-20" />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-transparent z-10 transition-all duration-500 group-hover:opacity-90" />

              {/* Floating Number Tag */}
              <div className="absolute top-6 right-6 font-serif text-3xl font-light text-stroke-ivory tracking-widest opacity-20 z-20 group-hover:opacity-60 transition-all duration-500">
                {col.num}
              </div>

              {/* Title & Browsing info */}
              <div className="absolute bottom-0 left-0 w-full p-7 z-20 flex flex-col justify-end space-y-3.5">
                <div className="flex flex-col space-y-1">
                  <span className="text-[8px] tracking-[0.25em] text-gold/80 uppercase font-bold">
                    {col.tagline}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-warm-ivory uppercase leading-snug">
                    {col.title}
                  </h3>
                </div>
                
                <div className="overflow-hidden h-5">
                  <Link
                    href={col.categoryLink}
                    className="flex items-center space-x-1.5 text-[8px] tracking-widest text-warm-ivory group-hover:text-gold uppercase font-bold transition-all duration-300 transform translate-y-0 group-hover:translate-y-0"
                  >
                    <span>BROWSE COLLECTION</span>
                    <ArrowUpRight size={10} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

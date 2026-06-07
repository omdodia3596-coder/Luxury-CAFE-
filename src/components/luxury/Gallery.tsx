"use client";

import { useState } from "react";
import { X, ZoomIn, Heart, MessageCircle, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [likedImages, setLikedImages] = useState<Record<number, boolean>>({});

  const galleryImages = [
    {
      id: 1,
      title: "Wood-Fired Margherita",
      category: "Pizza",
      url: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Cranberry Citrus Sangria",
      category: "Cocktail",
      url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Truffled Mushroom Pasta",
      category: "Pasta",
      url: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Velvet Cappuccino Art",
      category: "Coffee",
      url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "New York Berry Cheesecake",
      category: "Dessert",
      url: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Gourmet Mezzeh Platter",
      category: "Platter",
      url: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedImages(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="gallery" className="py-48 px-12 bg-espresso border-t border-gold/10 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute right-[-4%] top-[15%] font-serif text-[18rem] md:text-[28rem] font-bold text-stroke-ivory leading-none pointer-events-none select-none opacity-[0.02] z-0">
        03
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-28">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-bold">
            EDITORIAL VISUALS
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-warm-ivory uppercase leading-none">
            THE FASHION<br />
            <span className="font-light tracking-[0.1em] text-stroke-ivory">GALLERY</span>
          </h2>
          <p className="text-xs text-warm-ivory/60 max-w-xl font-light tracking-wider leading-relaxed">
            A visual catalog of our signature recipes and lounge aesthetics. Click any panel to view item details.
          </p>
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              onClick={() => setActiveImage(img.url)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="break-inside-avoid relative overflow-hidden border border-gold/15 p-2 bg-matte-black/50 hover:border-gold/45 transition-all duration-[0.8s] cursor-pointer group shadow-2xl rounded-sm"
            >
              {/* Inner Matt Frame & Image container */}
              <div className="relative overflow-hidden border border-white/5 rounded-sm">
                {/* Cover Image */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-all duration-[1.5s] ease-out pointer-events-none"
                />

                {/* Glassmorphic Overlay on Hover */}
                <div className="absolute inset-0 bg-espresso/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] tracking-widest text-gold uppercase font-bold">
                      {img.category}
                    </span>
                    <ZoomIn size={14} className="text-warm-ivory/50 hover:text-gold transition-colors" />
                  </div>

                  <div className="flex flex-col space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-warm-ivory uppercase">
                      {img.title}
                    </h3>

                    <div className="flex items-center justify-between pt-3 border-t border-warm-ivory/15 text-warm-ivory/60">
                      <div className="flex space-x-4">
                        <button
                          onClick={(e) => handleLike(img.id, e)}
                          className={`flex items-center space-x-1.5 text-[9px] tracking-wider transition-colors hover:text-gold ${
                            likedImages[img.id] ? "text-gold font-bold" : ""
                          }`}
                        >
                          <Heart size={13} fill={likedImages[img.id] ? "var(--gold)" : "none"} className={likedImages[img.id] ? "text-gold animate-bounce" : "text-warm-ivory/40"} />
                          <span>{likedImages[img.id] ? 1 : 0} LIKES</span>
                        </button>
                        <span className="flex items-center space-x-1.5 text-[9px] tracking-wider text-warm-ivory/40">
                          <MessageCircle size={13} />
                          <span>0 COMMENTS</span>
                        </span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); }}
                        className="hover:text-gold transition-colors"
                      >
                        <Share2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-espresso/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-warm-ivory hover:text-gold transition-colors z-50"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 32 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Enlarged visual"
                className="w-full h-auto max-h-[85vh] object-contain border border-gold/20 shadow-[0_0_60px_rgba(212,175,55,0.18)] rounded-sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

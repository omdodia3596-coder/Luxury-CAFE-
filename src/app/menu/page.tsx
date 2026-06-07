"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, SlidersHorizontal, ArrowUpDown, Flame, Leaf, Coffee, Pizza, Sparkles } from "lucide-react";
import { menuItems, menuCategories } from "@/data/menuData";
import { motion, AnimatePresence } from "framer-motion";

function MenuExplorer() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Query parameter category
  const initialCategory = searchParams.get("category") || "all";

  // Filter States
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(initialCategory);
  const [activeType, setActiveType] = useState<"all" | "beverage" | "food">("all");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");
  const [onlyChefRecommended, setOnlyChefRecommended] = useState(false);

  // Sync tab state with URL parameter if it changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveTab(cat);
      // Determine type based on category
      const matchedCat = menuCategories.find(c => c.id === cat);
      if (matchedCat) {
        setActiveType(matchedCat.type as any);
      }
    }
  }, [searchParams]);

  // Handle category tab click
  const handleTabChange = (catId: string) => {
    setActiveTab(catId);
    if (catId === "all") {
      router.push("/menu", { scroll: false });
    } else {
      router.push(`/menu?category=${catId}`, { scroll: false });
    }
  };

  // Filter food vs beverage categories
  const filteredCategories = menuCategories.filter(
    (cat) => activeType === "all" || cat.type === activeType
  );

  // Filtered Items Logic
  const filteredItems = menuItems.filter((item) => {
    // 1. Category Filter
    if (activeTab !== "all" && item.category !== activeTab) return false;
    
    // 2. Type Filter (Beverage vs Food)
    if (activeType !== "all" && item.category !== "all") {
      const catObj = menuCategories.find(c => c.id === item.category);
      if (catObj && catObj.type !== activeType) return false;
    }

    // 3. Chef Recommended Filter
    if (onlyChefRecommended && !item.isChefRecommendation) return false;

    // 4. Search Filter
    const query = search.toLowerCase().trim();
    if (query) {
      const matchName = item.name.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      if (!matchName && !matchDesc) return false;
    }

    return true;
  });

  // Sort Items Logic
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0; // default order
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-32">
      {/* Page Heading */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <span className="text-xs tracking-[0.3em] text-gold uppercase font-semibold">
          Luxury Catalog
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-warm-ivory uppercase leading-none">
          THE MENU EXPLORER
        </h1>
        <p className="text-xs md:text-sm text-warm-ivory/50 max-w-xl font-light tracking-wider leading-relaxed">
          Replicating 100% of our luxury FTV offerings. Search items, select collections, and filter by chef specials.
        </p>
      </div>

      {/* Control Bar: Search & Basic Filters (Liquid Glass) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8 bg-espresso/75 backdrop-blur-2xl border border-gold/15 p-5 rounded-2xl shadow-2xl">
        {/* Search */}
        <div className="md:col-span-6 relative flex items-center">
          <Search size={14} className="absolute left-0 text-gold/60 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search our luxury recipes..."
            className="w-full bg-transparent border-b border-white/15 focus:border-gold text-xs pl-8 pr-4 py-3 focus:outline-none text-warm-ivory rounded-none transition-all duration-[0.5s]"
          />
        </div>

        {/* Sort select */}
        <div className="md:col-span-3 relative flex items-center">
          <ArrowUpDown size={12} className="absolute left-0 text-gold/60 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e: any) => setSortBy(e.target.value)}
            className="w-full bg-transparent border-b border-white/15 focus:border-gold text-xs pl-8 pr-4 py-3 focus:outline-none text-warm-ivory rounded-none appearance-none cursor-pointer transition-all duration-[0.5s]"
          >
            <option value="default" className="bg-espresso text-warm-ivory">Default Sorting</option>
            <option value="price-asc" className="bg-espresso text-warm-ivory">Price: Low to High</option>
            <option value="price-desc" className="bg-espresso text-warm-ivory">Price: High to Low</option>
          </select>
        </div>

        {/* Type Filter Button Group */}
        <div className="md:col-span-3 flex justify-between gap-2 h-full">
          <button
            onClick={() => { setActiveType("all"); handleTabChange("all"); }}
            className={`flex-1 py-2 text-[9px] tracking-widest uppercase font-bold border rounded-full cursor-pointer transition-all duration-300 ${
              activeType === "all" ? "bg-gold text-espresso border-gold font-extrabold shadow-md" : "border-white/10 text-warm-ivory/60 hover:text-gold bg-matte-black/30 hover:border-gold/30"
            }`}
          >
            All
          </button>
          <button
            onClick={() => { setActiveType("beverage"); handleTabChange("all"); }}
            className={`flex-1 py-2 text-[9px] tracking-widest uppercase font-bold border rounded-full cursor-pointer transition-all duration-300 ${
              activeType === "beverage" ? "bg-gold text-espresso border-gold font-extrabold shadow-md" : "border-white/10 text-warm-ivory/60 hover:text-gold bg-matte-black/30 hover:border-gold/30"
            } flex items-center justify-center space-x-1`}
          >
            <Coffee size={9} />
            <span>Drinks</span>
          </button>
          <button
            onClick={() => { setActiveType("food"); handleTabChange("all"); }}
            className={`flex-1 py-2 text-[9px] tracking-widest uppercase font-bold border rounded-full cursor-pointer transition-all duration-300 ${
              activeType === "food" ? "bg-gold text-espresso border-gold font-extrabold shadow-md" : "border-white/10 text-warm-ivory/60 hover:text-gold bg-matte-black/30 hover:border-gold/30"
            } flex items-center justify-center space-x-1`}
          >
            <Pizza size={9} />
            <span>Food</span>
          </button>
        </div>
      </div>

      {/* Sub-Filters: Chef Recommended Toggle */}
      <div className="flex justify-between items-center mb-10 text-xs">
        <label className="flex items-center space-x-3 cursor-pointer select-none group text-warm-ivory/80">
          <input
            type="checkbox"
            checked={onlyChefRecommended}
            onChange={() => setOnlyChefRecommended(!onlyChefRecommended)}
            className="w-4 h-4 accent-gold border-gold bg-matte-black rounded-none cursor-pointer focus:outline-none"
          />
          <span className="group-hover:text-gold transition-colors font-medium tracking-wider uppercase text-[10px]">
            Show Chef Recommendations Only
          </span>
        </label>
        <span className="text-[10px] text-warm-ivory/40 tracking-widest uppercase font-medium">
          Showing {sortedItems.length} Recipes
        </span>
      </div>

      {/* Category Tabs Wrapper */}
      <div className="flex overflow-x-auto pb-4 mb-16 gap-8 border-b border-gold/10 -mx-6 px-6 scrollbar-thin scrollbar-thumb-gold/20 scrollbar-none">
        <button
          onClick={() => handleTabChange("all")}
          className={`relative pb-3 text-[10px] tracking-[0.25em] uppercase font-bold shrink-0 transition-colors cursor-pointer ${
            activeTab === "all" ? "text-gold" : "text-warm-ivory/50 hover:text-gold"
          }`}
        >
          View All
          {activeTab === "all" && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
            />
          )}
        </button>
        {filteredCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleTabChange(cat.id)}
            className={`relative pb-3 text-[10px] tracking-[0.25em] uppercase font-bold shrink-0 transition-colors cursor-pointer ${
              activeTab === cat.id ? "text-gold" : "text-warm-ivory/50 hover:text-gold"
            }`}
          >
            {cat.name}
            {activeTab === cat.id && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
              />
            )}
          </button>
        ))}
      </div>

      {/* Food Catalog Cards */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {sortedItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-white/[0.06] bg-espresso/55 backdrop-blur-md rounded-2xl hover:border-gold/35 overflow-hidden flex flex-col justify-between p-6 transition-all duration-[0.8s] shadow-[0_12px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(212,175,55,0.06)]"
            >
              {/* Inner Matt Frame border */}
              <div className="absolute inset-3 border border-white/0 group-hover:border-gold/10 rounded-xl pointer-events-none transition-all duration-[0.8s] z-20" />

              <div className="flex flex-col space-y-4">
                {/* Visual Image container if available */}
                {item.image && (
                  <div className="w-full h-[140px] overflow-hidden relative border border-white/5 rounded-lg mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-all duration-700 pointer-events-none"
                    />
                    {item.isChefRecommendation && (
                      <div className="absolute top-3 right-3 bg-gold text-espresso text-[8px] font-bold tracking-wider px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-md">
                        <Flame size={8} fill="currentColor" />
                        <span>CHEF CHOICE</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Details */}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-serif text-xl font-bold text-warm-ivory group-hover:text-gold transition-colors leading-tight uppercase">
                        {item.name}
                      </h3>
                      {item.isVegetarian && (
                        <div className="w-3.5 h-3.5 border border-green-600 flex items-center justify-center shrink-0" title="100% Vegetarian / Eggless">
                          <Leaf size={8} fill="#16a34a" className="text-green-600" />
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] tracking-widest text-warm-ivory/30 uppercase">
                      {menuCategories.find((c) => c.id === item.category)?.name}
                    </span>
                  </div>
                  <span className="font-serif text-lg font-bold text-gold shrink-0">
                    ₹{item.price}/-
                  </span>
                </div>

                <p className="text-xs text-warm-ivory/60 leading-relaxed font-light font-sans">
                  {item.description}
                </p>
              </div>

              {/* Order / Reserve Call */}
              <div className="pt-6 border-t border-gold/10 mt-6 flex justify-between items-center text-[10px]">
                <span className="text-warm-ivory/40">Guaranteed Fresh</span>
                <Link 
                  href="/#reservations"
                  className="text-gold font-semibold tracking-widest uppercase hover:text-gold-hover transition-colors flex items-center space-x-1"
                >
                  <span>BOOK TABLE</span>
                  <Sparkles size={8} className="animate-pulse" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {sortedItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 border border-dashed border-gold/20 rounded-sm">
          <SlidersHorizontal size={36} className="text-gold/40" />
          <h3 className="font-serif text-2xl text-warm-ivory uppercase">No Recipes Found</h3>
          <p className="text-xs text-warm-ivory/50 max-w-xs leading-relaxed">
            Try adjusting your search criteria or selecting another category to browse our collections.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveTab("all");
              setActiveType("all");
              setOnlyChefRecommended(false);
            }}
            className="px-6 py-2.5 bg-gold text-matte-black text-[10px] tracking-widest uppercase font-semibold hover:bg-gold-hover transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-matte-black">
        <span className="text-gold tracking-[0.3em] font-serif text-lg animate-pulse uppercase">
          Loading Luxury Catalog...
        </span>
      </div>
    }>
      <MenuExplorer />
    </Suspense>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FilterTab = "All" | "Hair" | "Skin" | "Spa" | "Nails" | "Bridal";

const FILTERS: FilterTab[] = ["All", "Hair", "Skin", "Spa", "Nails", "Bridal"];

const images = [
  { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800", alt: "Hair styling session", category: "Hair" as const },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800", alt: "Salon blow-dry", category: "Hair" as const },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800", alt: "Lumière salon interior", category: "Hair" as const },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800", alt: "Hair washing treatment", category: "Hair" as const },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800", alt: "Facial treatment", category: "Skin" as const },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800", alt: "Skin glow treatment", category: "Skin" as const },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800", alt: "Face care ritual", category: "Skin" as const },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800", alt: "Spa massage", category: "Spa" as const },
  { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800", alt: "Luxury spa bath", category: "Spa" as const },
  { src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800", alt: "Nail art detail", category: "Nails" as const },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800", alt: "Nail studio work", category: "Nails" as const },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800", alt: "Bridal hair styling", category: "Bridal" as const },
  { src: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800", alt: "Nail art close-up", category: "Nails" as const },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800", alt: "Bridal makeup", category: "Bridal" as const },
  { src: "https://images.unsplash.com/photo-1598524374912-e44ca3a52e4b?w=800", alt: "Skincare products", category: "Skin" as const },
  { src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800", alt: "Hair color session", category: "Hair" as const },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? images
    : images.filter((img) => img.category === activeFilter);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const prevImage = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length);
  }, [lightboxIdx, filtered.length]);

  const nextImage = useCallback(() => {
    if (lightboxIdx === null) return;
    setLightboxIdx((lightboxIdx + 1) % filtered.length);
  }, [lightboxIdx, filtered.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, closeLightbox, prevImage, nextImage]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-ivory pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">Our Work</p>
            <h1 className="font-cormorant text-[clamp(38px,6vw,64px)] italic text-deep-brown leading-tight mb-5">
              Results That Speak
            </h1>
            <p className="font-dm text-base text-warm-grey max-w-md mx-auto leading-relaxed">
              Real transformations from our clients — every photo taken in-studio, zero filters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-cream sticky top-16 md:top-20 z-40 border-b border-blush/40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setLightboxIdx(null); }}
              className={`font-dm text-sm font-medium tracking-wide rounded-full px-5 py-2 whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                activeFilter === filter
                  ? "bg-rose-gold text-white shadow-sm"
                  : "bg-ivory text-warm-grey border border-blush hover:border-rose-gold hover:text-rose-gold"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="font-dm text-sm text-warm-grey mb-8">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" && <> in <span className="text-rose-gold font-medium">{activeFilter}</span></>}
          </p>

          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src + img.category}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => setLightboxIdx(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={i % 3 === 0 ? 560 : 340}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-deep-brown/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C1A0E" strokeWidth="2" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 font-italiana text-[9px] tracking-[0.2em] uppercase bg-cream/90 text-rose-gold rounded-full px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && filtered[lightboxIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-deep-brown/95 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIdx].src.replace("?w=800", "?w=1200")}
                alt={filtered[lightboxIdx].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-xl"
                unoptimized
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-brown/80 to-transparent rounded-b-xl p-4 text-center">
                <p className="font-dm text-sm text-white/80">{filtered[lightboxIdx].alt}</p>
                <p className="font-italiana text-[10px] tracking-widest uppercase text-blush mt-1">
                  {lightboxIdx + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

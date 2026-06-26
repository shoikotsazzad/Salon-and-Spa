"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream flex items-center overflow-hidden pt-16 md:pt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-20 items-center py-16 md:py-20">

        {/* Left content */}
        <div className="flex flex-col gap-6 md:gap-7">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold"
          >
            Dhaka&apos;s Premier Beauty Studio
          </motion.p>

          {/* H1 — clamped so it never oversizes on mobile */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-cormorant text-4xl md:text-[clamp(52px,7vw,80px)] leading-[1.08] italic text-deep-brown break-words"
          >
            Where Every
            <br />
            Woman{" "}
            <span className="shimmer-text not-italic font-semibold">
              Glows
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.35)}
            className="font-dm text-base text-warm-grey max-w-md leading-relaxed"
          >
            Luxury hair, skin &amp; spa treatments crafted for the modern
            Bangladeshi woman.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4 pt-1">
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 font-dm text-sm font-medium tracking-wide text-white bg-rose-gold hover:bg-deep-brown transition-all duration-300 rounded-full"
            >
              Explore Services
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center h-12 px-8 font-dm text-sm font-medium tracking-wide text-rose-gold border border-rose-gold hover:bg-rose-gold hover:text-white transition-all duration-300 rounded-full"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Right — floating image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute inset-0 rounded-2xl border-2 border-rose-gold translate-x-4 translate-y-4 opacity-60" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-deep-brown/20">
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600"
              alt="Woman at Lumière Salon"
              width={600}
              height={750}
              className="w-full h-full object-cover object-center"
              unoptimized
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bounce-arrow">
        <span className="font-italiana text-[10px] tracking-[0.2em] uppercase text-warm-grey">
          Scroll
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-rose-gold">
          <path d="M10 3v14M3 10l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

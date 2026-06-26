"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teaserImages = [
  { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600", alt: "Hair styling" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600", alt: "Facial treatment" },
  { src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600", alt: "Nail art" },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600", alt: "Hair styling" },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600", alt: "Nail studio" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600", alt: "Salon interior" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">
            Our Work
          </p>
          <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-deep-brown">
            Results That Speak
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-dm text-base text-warm-grey text-center max-w-md mx-auto mb-12 md:mb-16"
        >
          A glimpse of real transformations from our studio.
        </motion.p>

        {/* 3 × 2 teaser grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teaserImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-rose-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center h-12 px-8 font-dm text-sm font-medium tracking-wide text-white bg-rose-gold hover:bg-deep-brown transition-all duration-300 rounded-full"
          >
            See All Our Work →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

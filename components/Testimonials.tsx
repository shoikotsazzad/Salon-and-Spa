"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The bridal package was absolutely dreamy. My makeup lasted all day and I've never felt so beautiful.",
    name: "Nusrat T.",
    city: "Gulshan",
  },
  {
    quote: "Best hair color I've ever had. The team really understood what I wanted.",
    name: "Farida R.",
    city: "Banani",
  },
  {
    quote: "The spa ritual is my monthly ritual now. Pure luxury from start to finish.",
    name: "Sabina K.",
    city: "Uttara",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-deep-brown py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-italiana text-xs tracking-[0.25em] uppercase text-blush mb-4">
            Client Love
          </p>
          <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-white">
            Stories from Our Guests
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-5"
            >
              <div className="flex gap-1 text-rose-gold text-lg">
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="font-cormorant text-lg italic text-deep-brown leading-snug flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-dm text-sm font-medium text-deep-brown">{t.name}</p>
                <p className="font-dm text-xs text-blush tracking-widest uppercase mt-0.5">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

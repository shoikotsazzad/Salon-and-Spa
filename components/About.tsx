"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left — image collage */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[420px] hidden sm:block"
        >
          <div className="absolute top-0 left-0 w-64 h-80 rounded-2xl overflow-hidden border-2 border-blush shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500"
              alt="Lumière salon interior"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="absolute bottom-0 right-0 w-52 h-68 rounded-2xl overflow-hidden border-2 border-rose-gold shadow-2xl shadow-rose-gold/20">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400"
              alt="Happy Lumière client"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div
            className="absolute -bottom-4 -left-4 w-16 h-16 opacity-25"
            style={{ backgroundImage: "radial-gradient(circle, #C9956A 1px, transparent 1px)", backgroundSize: "9px 9px" }}
          />
        </motion.div>

        {/* Right — teaser text */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold">Our Story</p>

          <h2 className="font-cormorant text-[clamp(30px,4vw,44px)] text-deep-brown leading-tight">
            Beauty is a Ritual,<br />Not a Routine
          </h2>

          <p className="font-dm text-base text-warm-grey leading-relaxed">
            Founded in 2017, Lumière was born from a single belief — that every woman in Dhaka deserves the kind of pampering once reserved only for bridal days.
          </p>

          <p className="font-dm text-base text-warm-grey leading-relaxed">
            Our co-founders trained in Seoul and Singapore; they returned with techniques the city had never seen, and a refusal to ever rush a client through their appointment.
          </p>

          {/* Quote */}
          <blockquote className="relative pl-7 border-l-2 border-rose-gold mt-1">
            <span className="absolute -top-3 -left-3 font-cormorant text-5xl text-rose-gold leading-none select-none">&ldquo;</span>
            <p className="font-cormorant text-xl italic text-deep-brown leading-snug">
              We believe every woman deserves to feel extraordinary.
            </p>
          </blockquote>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-dm text-sm font-medium text-rose-gold group w-fit mt-2"
          >
            Our Full Story
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

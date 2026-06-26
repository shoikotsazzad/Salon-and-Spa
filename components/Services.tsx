"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "8+",   label: "Years Experience" },
  { number: "20+",  label: "Signature Treatments" },
  { number: "100%", label: "Premium Products" },
];

const teaserServices = [
  { icon: "✦", name: "Hair Styling",     desc: "Cut, color, keratin & blow-dry by certified stylists." },
  { icon: "✦", name: "Facial & Skincare", desc: "Korean glass skin, gold facials & microdermabrasion." },
  { icon: "✦", name: "Body Spa",         desc: "Thai massage, aromatherapy & full body scrub rituals." },
];

export default function Services() {
  return (
    <>
      {/* Stats Bar */}
      <div className="bg-deep-brown py-10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1.5 py-4 ${
                i < stats.length - 1 ? "border-r border-blush/25" : ""
              }`}
            >
              <span className="font-cormorant text-4xl font-semibold text-white">{stat.number}</span>
              <span className="font-dm text-xs tracking-widest uppercase text-blush">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Teaser section */}
      <section id="services" className="bg-ivory py-20 md:py-28">
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
              What We Offer
            </p>
            <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-deep-brown">
              Treatments Made for You
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-dm text-base text-warm-grey text-center max-w-xl mx-auto mb-12 md:mb-16"
          >
            Six signature treatment categories — every one performed by certified specialists.
          </motion.p>

          {/* 3 teaser cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {teaserServices.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-blush rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-deep-brown/8 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-rose-gold/12 flex items-center justify-center">
                  <span className="text-rose-gold">{s.icon}</span>
                </div>
                <h3 className="font-cormorant text-2xl text-deep-brown">{s.name}</h3>
                <p className="font-dm text-sm text-warm-grey leading-relaxed">{s.desc}</p>
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
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 font-dm text-sm font-medium tracking-wide text-white bg-rose-gold hover:bg-deep-brown transition-all duration-300 rounded-full"
            >
              View All Services &amp; Pricing →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

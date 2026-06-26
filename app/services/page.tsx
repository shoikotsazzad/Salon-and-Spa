"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Pricing tiers ──────────────────────────────────────────── */
const tiers = [
  {
    name: "Basic Glow",
    price: "From ৳2,500",
    tag: "Single treatments",
    color: "border-blush",
    badge: null,
    perks: [
      "Individual hair, skin or nail service",
      "Up to 60 minutes per session",
      "Premium product application",
      "Complimentary scalp or hand massage",
    ],
  },
  {
    name: "Signature Day",
    price: "From ৳6,000",
    tag: "Half-day packages",
    color: "border-rose-gold",
    badge: "Most Popular",
    perks: [
      "2–3 curated services combined",
      "Up to 3 hours — seamless flow",
      "Complimentary welcome drink",
      "Professional post-session consultation",
    ],
  },
  {
    name: "Royal Experience",
    price: "From ৳12,000",
    tag: "Full-day luxury",
    color: "border-deep-brown",
    badge: "Exclusive",
    perks: [
      "Head-to-toe custom treatment plan",
      "Full day (5–8 hours) with dedicated staff",
      "Champagne & premium refreshments",
      "Take-home skincare gift set",
    ],
  },
];

/* ── Services list ───────────────────────────────────────────── */
const services = [
  {
    icon: "✦",
    name: "Hair Styling",
    desc: "From a precision cut to full balayage, keratin treatments and signature blow-drys — our certified stylists are trained in Seoul and Bangkok techniques. Every visit ends with a custom style recommendation.",
    from: "From ৳800",
    tag: "Most Requested",
  },
  {
    icon: "✦",
    name: "Bridal Package",
    desc: "Head-to-toe bridal beauty designed around you. Includes a full trial session, Gaye Holud look, ceremony makeup and hair, and all-day touch-ups. We work with both modern and traditional aesthetics.",
    from: "From ৳15,000",
    tag: "Book Early",
  },
  {
    icon: "✦",
    name: "Facial & Skincare",
    desc: "Korean glass skin protocol, 24K gold facials, HydraFacial, microdermabrasion and LED therapy. Every facial begins with a skin analysis — no one-size-fits-all here. Results you see after one session.",
    from: "From ৳2,500",
    tag: null,
  },
  {
    icon: "✦",
    name: "Body Spa",
    desc: "Thai stretching massage, Balinese long strokes, hot stone therapy, aromatherapy wraps and full-body sugar scrubs. Our spa room is climate-controlled with ambient sound therapy for maximum relaxation.",
    from: "From ৳3,000",
    tag: null,
  },
  {
    icon: "✦",
    name: "Nail Studio",
    desc: "Classic and gel manicure & pedicure, intricate nail art, French finish and spa combo packages. We use only hypoallergenic gel and non-toxic polishes. Walk in for a quick refresh or book a full session.",
    from: "From ৳800",
    tag: null,
  },
  {
    icon: "✦",
    name: "Eyebrow & Lash",
    desc: "Precision threading, HD brow lamination, classic and volume lash extensions, lash lift and tint. Our brow artists map your unique facial structure before picking up a single thread.",
    from: "From ৳200",
    tag: null,
  },
];

/* ── FAQ ─────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How far in advance should I book an appointment?",
    a: "We recommend booking 24–48 hours in advance, especially for weekend slots and bridal services. For special events like weddings, we suggest booking 4–6 weeks ahead to secure your preferred team and time.",
  },
  {
    q: "Do you accept walk-in clients?",
    a: "Absolutely! Walk-ins are always welcome at Lumière. However, booked appointments are prioritised, so walk-ins may have a short wait during peak hours (Fridays, Saturdays and long weekends). Calling ahead is always a good idea.",
  },
  {
    q: "What products and brands do you use?",
    a: "We use only premium, dermatologist-approved, cruelty-free brands — including L'Oréal Professionnel, OPI, Casmara, and Korean skincare lines such as AHC and Sulwhasoo. We never compromise on product quality, regardless of the service tier.",
  },
  {
    q: "Can I book Lumière for a group or corporate event?",
    a: "Yes! We love group bookings — bachelorette parties, office wellness days, family gatherings and fashion shoots are all welcome. For groups of 4 or more, please call us directly at +880 1700-000000 so we can arrange dedicated staff and priority slots.",
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "We kindly ask for at least 2 hours' notice for standard appointments. Bridal and Royal Experience bookings require 24 hours' notice for reschedules. No-shows may be subject to a 20% service fee on the next visit.",
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-blush/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 cursor-pointer group"
      >
        <span className="font-cormorant text-lg text-deep-brown group-hover:text-rose-gold transition-colors">
          {q}
        </span>
        <span className={`text-rose-gold text-xl transition-transform duration-300 shrink-0 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-dm text-sm text-warm-grey leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-ivory pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">
              What We Offer
            </p>
            <h1 className="font-cormorant text-[clamp(38px,6vw,64px)] italic text-deep-brown leading-tight mb-5">
              Services & Pricing
            </h1>
            <p className="font-dm text-base text-warm-grey max-w-xl mx-auto leading-relaxed">
              Every treatment at Lumière is performed by certified specialists using only premium, dermatologist-approved products. No compromises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">
              Choose Your Experience
            </p>
            <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-deep-brown">
              Our Service Tiers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-white border-2 ${tier.color} rounded-2xl p-8 flex flex-col gap-5 ${
                  tier.badge === "Most Popular" ? "shadow-xl shadow-rose-gold/10" : ""
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-italiana text-[10px] tracking-[0.2em] uppercase bg-rose-gold text-white rounded-full px-4 py-1">
                    {tier.badge}
                  </span>
                )}
                <div>
                  <h3 className="font-cormorant text-2xl text-deep-brown mb-1">{tier.name}</h3>
                  <p className="font-italiana text-xs tracking-widest uppercase text-warm-grey">{tier.tag}</p>
                </div>
                <p className="font-cormorant text-3xl text-rose-gold font-semibold">{tier.price}</p>
                <ul className="flex flex-col gap-3 flex-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 font-dm text-sm text-warm-grey">
                      <span className="text-rose-gold mt-0.5 shrink-0">✦</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 font-dm text-sm font-medium tracking-wide text-white bg-rose-gold hover:bg-deep-brown transition-all duration-300 rounded-full mt-2"
                >
                  Book This Experience
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All services */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">
              All Treatments
            </p>
            <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-deep-brown">
              Every Service, In Detail
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white border border-blush rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-deep-brown/8 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 rounded-full bg-rose-gold/12 flex items-center justify-center">
                    <span className="text-rose-gold">{s.icon}</span>
                  </div>
                  {s.tag && (
                    <span className="font-dm text-[10px] font-medium tracking-widest uppercase text-rose-gold bg-rose-gold/10 rounded-full px-3 py-1">
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-cormorant text-2xl text-deep-brown">{s.name}</h3>
                <p className="font-dm text-sm text-warm-grey leading-relaxed flex-1">{s.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-blush/50">
                  <span className="font-cormorant text-xl text-deep-brown font-semibold">{s.from}</span>
                  <Link
                    href="/contact"
                    className="font-dm text-xs font-medium text-rose-gold border border-rose-gold hover:bg-rose-gold hover:text-white transition-all duration-200 rounded-full px-4 py-2"
                  >
                    Book →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/pricing"
              className="font-dm text-sm font-medium text-rose-gold border border-rose-gold hover:bg-rose-gold hover:text-white transition-all duration-300 rounded-full px-8 h-12 inline-flex items-center"
            >
              View Full Pricing List →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">
              Have Questions?
            </p>
            <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-deep-brown">
              Frequently Asked
            </h2>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-dm text-sm text-warm-grey mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="font-dm text-sm font-medium text-white bg-rose-gold hover:bg-deep-brown transition-all duration-300 rounded-full px-8 h-12 inline-flex items-center"
            >
              Ask Us Directly
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

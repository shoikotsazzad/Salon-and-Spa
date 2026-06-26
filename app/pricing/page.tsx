"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Data ─────────────────────────────────────────────────────── */

type Category =
  | "Hair"
  | "Bridal"
  | "Facial & Skin"
  | "Body Spa"
  | "Nail Studio"
  | "Brow & Lash"
  | "Packages";

interface Service {
  category: Category;
  name: string;
  desc: string;
  price: number;
  popular?: boolean;
}

const CATEGORIES: ("All" | Category)[] = [
  "All",
  "Hair",
  "Bridal",
  "Facial & Skin",
  "Body Spa",
  "Nail Studio",
  "Brow & Lash",
  "Packages",
];

const CATEGORY_COLORS: Record<Category, string> = {
  "Hair":          "bg-rose-gold/15 text-rose-gold",
  "Bridal":        "bg-deep-brown/10 text-deep-brown",
  "Facial & Skin": "bg-blush/40 text-warm-grey",
  "Body Spa":      "bg-ivory text-warm-grey border border-blush",
  "Nail Studio":   "bg-rose-gold/10 text-rose-gold",
  "Brow & Lash":   "bg-blush/30 text-deep-brown",
  "Packages":      "bg-deep-brown/15 text-deep-brown",
};

const SERVICES: Service[] = [
  /* ── Hair (10) ───────────────────────────────────────────── */
  { category: "Hair", name: "Signature Blow-Dry",       desc: "Professional finish with heat protection & shine serum",          price: 800  },
  { category: "Hair", name: "Classic Haircut",           desc: "Precision cut tailored to your face shape by senior stylist",    price: 1200 },
  { category: "Hair", name: "Premium Cut & Style",       desc: "In-depth consultation, cut and custom blowout",                  price: 1800 },
  { category: "Hair", name: "Full Head Highlights",      desc: "Multi-tonal foil highlights for depth and dimension",            price: 4500, popular: true },
  { category: "Hair", name: "Balayage",                  desc: "Hand-painted, sun-kissed color — no harsh lines",                price: 5500 },
  { category: "Hair", name: "Global Hair Color",         desc: "Single-process all-over color with conditioning mask",           price: 3500 },
  { category: "Hair", name: "Keratin Treatment",         desc: "Frizz-free smoothing that lasts up to 4 months",                price: 6000, popular: true },
  { category: "Hair", name: "Hair Spa Ritual",           desc: "Deep conditioning, scalp massage and steam therapy",             price: 2500 },
  { category: "Hair", name: "Scalp Treatment",           desc: "Targeted therapy for oily, dry or sensitive scalp",             price: 2000 },
  { category: "Hair", name: "Bridal Hair Styling",       desc: "Bespoke updo or voluminous blowout for your big day",           price: 5000 },

  /* ── Bridal (7) ──────────────────────────────────────────── */
  { category: "Bridal", name: "Classic Bridal Package",       desc: "Ceremony makeup + hair styling + individual lashes",            price: 25000 },
  { category: "Bridal", name: "Luxury Bridal Package",        desc: "Full-day glamour with pre-event skincare prep included",         price: 40000, popular: true },
  { category: "Bridal", name: "Bridal Trial Session",         desc: "Complete makeup & hair run-through before the big day",          price: 8000  },
  { category: "Bridal", name: "Gaye Holud Package",           desc: "Vibrant traditional look with modern golden accents",            price: 15000 },
  { category: "Bridal", name: "Reception Makeup",             desc: "Glamorous, long-wear evening look for the reception night",      price: 12000 },
  { category: "Bridal", name: "Pre-Wedding Glow Program",     desc: "6-session skincare & facial program for radiant bridal skin",    price: 18000 },
  { category: "Bridal", name: "Full Day Bridal Exclusive",    desc: "Every service from sunrise to your event — all-inclusive",      price: 55000, popular: true },

  /* ── Facial & Skin (8) ───────────────────────────────────── */
  { category: "Facial & Skin", name: "Gold Facial",                desc: "24K gold-infused serum to firm, lift and illuminate",          price: 3500, popular: true },
  { category: "Facial & Skin", name: "Korean Glass Skin Facial",   desc: "7-step hydration ritual for poreless, dewy skin",              price: 4500 },
  { category: "Facial & Skin", name: "HydraFacial",                desc: "Cleanse, extract, hydrate — immediate visible glow",           price: 5000 },
  { category: "Facial & Skin", name: "Microdermabrasion",          desc: "Crystal exfoliation for brighter, smoother skin texture",      price: 3800 },
  { category: "Facial & Skin", name: "Acne Control Facial",        desc: "Salicylic deep-cleanse with anti-bacterial light therapy",      price: 2800 },
  { category: "Facial & Skin", name: "Anti-Aging Collagen Facial", desc: "Collagen-boosting peptides to visibly lift and firm",          price: 4200 },
  { category: "Facial & Skin", name: "Vitamin C Brightening",      desc: "Even skin tone and radiance — one session transformation",     price: 3200 },
  { category: "Facial & Skin", name: "LED Light Therapy",          desc: "Targeted wavelengths to reduce acne, redness and fine lines",  price: 2500 },

  /* ── Body Spa (8) ────────────────────────────────────────── */
  { category: "Body Spa", name: "Thai Massage (60 min)",      desc: "Traditional stretching and pressure-point techniques",          price: 3000 },
  { category: "Body Spa", name: "Thai Massage (90 min)",      desc: "Extended session for full-body relief and flexibility",         price: 4200 },
  { category: "Body Spa", name: "Aromatherapy Full Body",     desc: "Essential oil blend massage tailored to your mood",             price: 3500, popular: true },
  { category: "Body Spa", name: "Balinese Massage",           desc: "Long strokes, skin rolling and palm & thumb pressure",          price: 4000 },
  { category: "Body Spa", name: "Hot Stone Therapy",          desc: "Warmed volcanic stones melt away tension and stress",           price: 4500 },
  { category: "Body Spa", name: "Sugar Body Scrub",           desc: "Full-body exfoliation followed by a shea butter rinse",         price: 2800 },
  { category: "Body Spa", name: "Detox Body Wrap",            desc: "Marine clay & seaweed wrap to draw out impurities",            price: 3200 },
  { category: "Body Spa", name: "Signature Spa Ritual",       desc: "Scrub + wrap + massage — 2.5 hrs of pure indulgence",          price: 7500, popular: true },

  /* ── Nail Studio (7) ─────────────────────────────────────── */
  { category: "Nail Studio", name: "Classic Manicure",        desc: "Shape, buff, cuticle care and your choice of polish",          price: 800  },
  { category: "Nail Studio", name: "Classic Pedicure",        desc: "Soak, scrub, shape, massage and polish application",           price: 1000 },
  { category: "Nail Studio", name: "Gel Manicure",            desc: "Long-lasting chip-free gel color — lasts 2–3 weeks",           price: 1500, popular: true },
  { category: "Nail Studio", name: "Gel Pedicure",            desc: "Gel finish for your feet with cuticle care and massage",       price: 1800 },
  { category: "Nail Studio", name: "Nail Art (per nail)",     desc: "Custom freehand or stamped designs on your nail of choice",    price: 100  },
  { category: "Nail Studio", name: "Spa Mani-Pedi Combo",     desc: "Full hands + feet luxury combo with hot towel finish",         price: 2500 },
  { category: "Nail Studio", name: "French Manicure",         desc: "Timeless clean white-tip finish — classic and elegant",        price: 1200 },

  /* ── Brow & Lash (5) ─────────────────────────────────────── */
  { category: "Brow & Lash", name: "Eyebrow Threading",       desc: "Precise shape and definition using the cotton thread technique", price: 200  },
  { category: "Brow & Lash", name: "Brow Lamination",         desc: "Brushed-up fluffy brows that last 6–8 weeks",                   price: 2500, popular: true },
  { category: "Brow & Lash", name: "Lash Extensions — Classic", desc: "Natural one-to-one lash mapping for an everyday look",         price: 3500 },
  { category: "Brow & Lash", name: "Lash Extensions — Volume", desc: "Full, fluffy mega-volume fans for maximum drama",               price: 5000 },
  { category: "Brow & Lash", name: "Lash Lift & Tint",        desc: "Curl, lift and darken your natural lashes — no extensions needed", price: 2800 },

  /* ── Packages (5) ────────────────────────────────────────── */
  { category: "Packages", name: "Date Night Package",    desc: "Blow-dry + gel nails — event-ready in under 2 hours",          price: 3500  },
  { category: "Packages", name: "Glow Package",          desc: "Glass skin facial + brow thread & tint — instant refresh",     price: 5500  },
  { category: "Packages", name: "Full Pamper Day",       desc: "Body spa + facial + full mani-pedi — an entire day of bliss",  price: 9500, popular: true },
  { category: "Packages", name: "Monthly Ritual",        desc: "Deep tissue massage + anti-aging facial — your monthly reset",  price: 6500  },
  { category: "Packages", name: "Ultimate Lumière Day",  desc: "Every signature service from head to toe — pure luxury",       price: 15000, popular: true },
];

/* ── Component ───────────────────────────────────────────────── */

type SortOrder = "default" | "asc" | "desc";

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | Category>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");

  const filtered = useMemo(() => {
    let list = activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

    if (sortOrder === "asc")  list = [...list].sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, sortOrder]);

  return (
    <>
      <Navbar />

      {/* Page hero */}
      <section className="bg-ivory pt-36 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto px-8"
        >
          <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">
            Our Services
          </p>
          <h1 className="font-cormorant text-[clamp(40px,6vw,64px)] italic text-deep-brown leading-tight mb-5">
            Transparent Pricing
          </h1>
          <p className="font-dm text-base text-warm-grey leading-relaxed">
            No hidden fees. Every treatment priced with honesty and care.
          </p>
        </motion.div>
      </section>

      {/* Filter + Sort bar */}
      <div className="bg-cream sticky top-20 z-40 border-b border-blush/50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-dm text-xs font-medium tracking-wide rounded-full px-4 py-1.5 transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-rose-gold text-white shadow-sm"
                    : "bg-ivory text-warm-grey hover:bg-blush/40 hover:text-deep-brown border border-blush"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-dm text-xs text-warm-grey">Sort:</span>
            {([["default", "Default"], ["asc", "Price ↑"], ["desc", "Price ↓"]] as [SortOrder, string][]).map(([val, label]) => (
              <button
                key={val}
                onClick={() => setSortOrder(val)}
                className={`font-dm text-xs px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  sortOrder === val
                    ? "bg-deep-brown text-white"
                    : "bg-ivory border border-blush text-warm-grey hover:border-rose-gold hover:text-rose-gold"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Result count */}
          <p className="font-dm text-sm text-warm-grey mb-8">
            Showing <span className="text-deep-brown font-medium">{filtered.length}</span> service{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && (
              <> in <span className="text-rose-gold font-medium">{activeCategory}</span></>
            )}
          </p>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((service) => (
                <motion.div
                  key={`${service.category}-${service.name}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.28 }}
                  className="group relative bg-white border border-blush rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg hover:shadow-deep-brown/8 transition-all duration-300"
                >
                  {/* Popular badge */}
                  {service.popular && (
                    <span className="absolute top-4 right-4 font-italiana text-[10px] tracking-[0.15em] uppercase text-rose-gold bg-rose-gold/10 rounded-full px-2.5 py-0.5">
                      Popular
                    </span>
                  )}

                  {/* Category badge */}
                  <span className={`font-dm text-[10px] font-medium tracking-widest uppercase rounded-full px-3 py-1 w-fit ${CATEGORY_COLORS[service.category]}`}>
                    {service.category}
                  </span>

                  {/* Name */}
                  <h3 className="font-cormorant text-xl text-deep-brown leading-snug pr-8">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="font-dm text-sm text-warm-grey leading-relaxed flex-1">
                    {service.desc}
                  </p>

                  {/* Price + Book row */}
                  <div className="flex items-center justify-between pt-2 border-t border-blush/60">
                    <span className="font-cormorant text-2xl text-deep-brown font-semibold">
                      ৳{service.price.toLocaleString("en-BD")}
                    </span>
                    <button
                      onClick={() => {
                        const el = document.getElementById("booking-cta");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="font-dm text-xs font-medium tracking-wide text-rose-gold border border-rose-gold hover:bg-rose-gold hover:text-white transition-all duration-200 rounded-full px-4 py-1.5 cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Inline booking CTA */}
      <section
        id="booking-cta"
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg, #C9956A 0%, #2C1A0E 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto px-8"
        >
          <h2 className="font-cormorant text-[clamp(36px,5vw,52px)] italic text-white mb-4">
            Ready to Book?
          </h2>
          <p className="font-dm text-sm text-cream/80 mb-8">
            Call us or visit the booking page — walk-ins always welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+8801700000000"
              className="font-dm text-sm font-medium tracking-wide text-rose-gold bg-white hover:bg-cream transition-all duration-200 rounded-full px-8 py-3.5"
            >
              Call +880 1700-000000
            </a>
            <a
              href="/#booking"
              className="font-dm text-sm font-medium tracking-wide text-white border border-white/50 hover:bg-white/10 transition-all duration-200 rounded-full px-8 py-3.5"
            >
              Online Booking →
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

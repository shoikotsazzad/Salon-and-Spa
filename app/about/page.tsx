"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Team ──────────────────────────────────────────────────────── */
const team = [
  {
    name: "Sabnam Akter",
    role: "Head Stylist & Co-founder",
    bio: "Trained in Seoul and certified by L'Oréal Professionnel. 11 years of expertise in colour and precision cuts.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "Priya Sharma",
    role: "Senior Esthetician",
    bio: "Korean skincare specialist with a diploma in dermal aesthetics. The architect behind our Glass Skin protocol.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    name: "Rumana Begum",
    role: "Spa Therapist",
    bio: "Thai massage practitioner certified in Chiang Mai. Her Signature Spa Ritual has a 3-month waiting list.",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400",
  },
  {
    name: "Nadia Islam",
    role: "Nail Artist & Brow Specialist",
    bio: "Freehand nail artist and brow lamination expert. Trained in brow mapping under Nadia Afgan's academy.",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
  },
];

/* ── Values ────────────────────────────────────────────────────── */
const values = [
  {
    icon: "✦",
    title: "Quality Without Compromise",
    desc: "We source only dermatologist-approved, cruelty-free products. Every ingredient in our treatment room has been personally vetted by our co-founders before reaching your skin.",
  },
  {
    icon: "✦",
    title: "Every Woman Belongs Here",
    desc: "Lumière was built to be radically inclusive. Whether you're 18 or 68, wear a hijab or don't, prefer minimal or glam — our team is trained to serve you with equal care and respect.",
  },
  {
    icon: "✦",
    title: "Rituals, Not Rushes",
    desc: "Your appointment is never rushed to meet a schedule. We block generous time for each session so every client leaves feeling genuinely cared for, not processed.",
  },
];

/* ── Testimonials ───────────────────────────────────────────────── */
const testimonials = [
  { quote: "The bridal package was absolutely dreamy. My makeup lasted all day and I've never felt so beautiful.", name: "Nusrat T.", city: "Gulshan" },
  { quote: "Best hair color I've ever had. The team really understood what I wanted.", name: "Farida R.", city: "Banani" },
  { quote: "The spa ritual is my monthly ritual now. Pure luxury from start to finish.", name: "Sabina K.", city: "Uttara" },
  { quote: "Finally a salon that uses premium products and doesn't damage your hair!", name: "Maliha A.", city: "Dhanmondi" },
  { quote: "The facial completely transformed my skin in just one session. Worth every taka.", name: "Sadia M.", city: "Bashundhara" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-ivory pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">Our Story</p>
            <h1 className="font-cormorant text-[clamp(38px,6vw,64px)] italic text-deep-brown leading-tight mb-5">
              About Lumière
            </h1>
            <p className="font-dm text-base text-warm-grey max-w-xl mx-auto leading-relaxed">
              Seven years of making Dhaka women feel extraordinary — one treatment at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full story */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-120 hidden lg:block"
          >
            <div className="absolute top-0 left-0 w-64 h-80 rounded-2xl overflow-hidden border-2 border-blush shadow-xl">
              <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600" alt="Lumière salon interior" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute bottom-0 right-0 w-56 h-72 rounded-2xl overflow-hidden border-2 border-rose-gold shadow-2xl shadow-rose-gold/20">
              <Image src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500" alt="Happy Lumière client" fill className="object-cover" unoptimized />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 opacity-25" style={{ backgroundImage: "radial-gradient(circle, #C9956A 1px, transparent 1px)", backgroundSize: "9px 9px" }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold">Our Beginning</p>
            <h2 className="font-cormorant text-[clamp(30px,4vw,44px)] text-deep-brown leading-tight">
              Beauty is a Ritual,<br />Not a Routine
            </h2>
            <p className="font-dm text-base text-warm-grey leading-relaxed">
              Founded in 2017 on a quiet corner of Road 11, Gulshan-1, Lumière was born from a single conviction — that every woman in Dhaka deserves the kind of pampering once reserved only for bridal days. Our co-founders, Sabnam and Priya, had both trained abroad; Sabnam in Seoul and Priya in a dermal clinic in Singapore. They returned to Bangladesh with techniques the city had never seen and a burning desire to build something honest, premium and genuinely caring.
            </p>
            <p className="font-dm text-base text-warm-grey leading-relaxed">
              In our first year, we had four treatment chairs and seven clients. Word spread quietly — a glass-skin result here, a flawless bridal look there. By 2019, we had a three-week waiting list and a team of nine. What has never changed is our zero-rush philosophy: your appointment is your sanctuary, and we protect that time as fiercely as you do.
            </p>
            <p className="font-dm text-base text-warm-grey leading-relaxed">
              Today, our 14-specialist team serves women from across Gulshan, Banani, Uttara and beyond. We source products from Seoul, Bangkok and Paris. We close for one day a week so our team can rest and return to you at their absolute best. Because we believe extraordinary service is only possible from people who feel extraordinary themselves.
            </p>

            {/* Quote */}
            <blockquote className="relative pl-7 border-l-2 border-rose-gold mt-2">
              <span className="absolute -top-3 -left-3 font-cormorant text-5xl text-rose-gold leading-none select-none">&ldquo;</span>
              <p className="font-cormorant text-xl italic text-deep-brown leading-snug">
                We believe every woman deserves to feel extraordinary.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">The People</p>
            <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-deep-brown">Meet Our Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-blush mb-5 group-hover:border-rose-gold transition-colors duration-300">
                  <Image src={member.photo} alt={member.name} fill className="object-cover object-top" unoptimized />
                  <div className="absolute inset-0 bg-rose-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-cormorant text-xl text-deep-brown mb-1">{member.name}</h3>
                <p className="font-italiana text-[10px] tracking-[0.2em] uppercase text-rose-gold mb-3">{member.role}</p>
                <p className="font-dm text-xs text-warm-grey leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand values */}
      <section className="bg-deep-brown py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-blush mb-4">What We Stand For</p>
            <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-white">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-blush/20 rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-rose-gold/20 flex items-center justify-center">
                  <span className="text-rose-gold text-lg">{v.icon}</span>
                </div>
                <h3 className="font-cormorant text-xl text-white">{v.title}</h3>
                <p className="font-dm text-sm text-white/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">Client Love</p>
            <h2 className="font-cormorant text-[clamp(32px,4.5vw,48px)] text-deep-brown">Stories from Our Guests</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-blush rounded-2xl p-6 md:p-8 flex flex-col gap-5"
              >
                <div className="flex gap-1 text-rose-gold">
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

      {/* CTA */}
      <section className="bg-rose-gold py-16 md:py-20 text-center">
        <div className="max-w-xl mx-auto px-6 md:px-10">
          <h2 className="font-cormorant text-[clamp(32px,5vw,48px)] italic text-white mb-4">
            Ready to Experience It?
          </h2>
          <p className="font-dm text-sm text-white/80 mb-8">
            Walk in any day or book your first appointment below.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 font-dm text-sm font-medium text-rose-gold bg-white hover:bg-cream transition-all duration-300 rounded-full">
            Book an Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

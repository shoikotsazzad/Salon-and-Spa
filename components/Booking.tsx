"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = () => {
    if (!name || !phone) return;
    setDone(true);
    setTimeout(() => { setDone(false); setName(""); setPhone(""); }, 4000);
  };

  return (
    <section
      id="booking"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #C9956A 0%, #2C1A0E 100%)" }}
    >
      <div className="max-w-xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-5"
        >
          <h2 className="font-cormorant text-[clamp(36px,5.5vw,54px)] italic text-white">
            Ready to Glow?
          </h2>

          <p className="font-dm text-sm text-cream/85 leading-relaxed">
            Book your appointment today. Walk-ins always welcome.
          </p>

          {done ? (
            <div className="bg-white/10 border border-white/20 rounded-2xl py-6 px-4 text-white font-dm text-sm">
              ✦ &nbsp;We&apos;ll call you soon to confirm!
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 font-dm text-sm text-deep-brown placeholder:text-warm-grey bg-cream rounded-full px-5 h-12 outline-none focus:ring-2 focus:ring-white/40"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 font-dm text-sm text-deep-brown placeholder:text-warm-grey bg-cream rounded-full px-5 h-12 outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                onClick={handleSubmit}
                disabled={!name || !phone}
                className="font-dm text-sm font-medium tracking-wide text-white bg-deep-brown hover:bg-white hover:text-deep-brown disabled:opacity-50 transition-all duration-300 rounded-full px-7 h-12 cursor-pointer whitespace-nowrap"
              >
                Book Now
              </button>
            </div>
          )}

          <p className="font-dm text-xs text-white/60">
            Want to share more details?{" "}
            <Link href="/contact" className="underline underline-offset-2 text-cream/80 hover:text-white transition-colors">
              Full Booking Form →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

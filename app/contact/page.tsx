"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = [
  "Hair Styling",
  "Facial & Skin",
  "Body Spa",
  "Bridal Package",
  "Nail Studio",
  "Eyebrow & Lash",
  "Other",
];

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.17 8.17 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" />
    </svg>
  );
}

const inputClass =
  "w-full font-dm text-sm text-deep-brown bg-cream border border-blush rounded-xl px-4 h-12 placeholder:text-warm-grey/60 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold transition-colors";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <section className="bg-cream pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 md:gap-16 items-start">

          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <p className="font-italiana text-xs tracking-[0.25em] uppercase text-rose-gold mb-4">
              Let&apos;s Connect
            </p>
            <h1 className="font-cormorant text-[clamp(36px,5vw,58px)] italic text-deep-brown leading-tight mb-3">
              Get In Touch
            </h1>
            <p className="font-dm text-base text-warm-grey mb-10 leading-relaxed">
              Book an appointment or ask us anything. We respond within 24 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-ivory border border-blush rounded-2xl p-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-rose-gold/15 flex items-center justify-center mx-auto mb-5">
                  <span className="text-rose-gold text-2xl">✦</span>
                </div>
                <h3 className="font-cormorant text-2xl text-deep-brown mb-3">Request Received!</h3>
                <p className="font-dm text-sm text-warm-grey leading-relaxed max-w-sm mx-auto">
                  We&apos;ll contact you within 24 hours at <strong>{form.phone}</strong> to confirm your appointment.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" }); }}
                  className="mt-7 font-dm text-sm text-rose-gold border border-rose-gold hover:bg-rose-gold hover:text-white transition-all duration-200 rounded-full px-6 h-10 cursor-pointer"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-dm text-xs text-warm-grey mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      placeholder="Nusrat Jahan"
                      value={form.name}
                      onChange={set("name")}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-dm text-xs text-warm-grey mb-1.5 block">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+880 1700-000000"
                      value={form.phone}
                      onChange={set("phone")}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div>
                  <label className="font-dm text-xs text-warm-grey mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass}
                  />
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-dm text-xs text-warm-grey mb-1.5 block">Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={set("service")}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-dm text-xs text-warm-grey mb-1.5 block">Preferred Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={set("date")}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label className="font-dm text-xs text-warm-grey mb-1.5 block">Message / Special Requests</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us anything — allergies, special occasions, questions..."
                    value={form.message}
                    onChange={set("message")}
                    className="w-full font-dm text-sm text-deep-brown bg-cream border border-blush rounded-xl px-4 py-3 placeholder:text-warm-grey/60 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.phone}
                  className="w-full h-12 font-dm text-sm font-medium tracking-wide text-white bg-rose-gold hover:bg-deep-brown disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-full cursor-pointer mt-2"
                >
                  Send Appointment Request
                </button>

                <p className="font-dm text-xs text-warm-grey/70 text-center">
                  * Required fields. We never share your information.
                </p>
              </div>
            )}
          </motion.div>

          {/* Right — info card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-ivory border border-blush rounded-2xl p-8 flex flex-col gap-7">
              {/* Studio name */}
              <div>
                <p className="font-cormorant text-3xl italic text-rose-gold font-semibold mb-1">Lumière</p>
                <p className="font-italiana text-xs tracking-[0.2em] uppercase text-warm-grey">Salon & Spa</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-blush" />

              {/* Details */}
              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex gap-3">
                  <span className="text-rose-gold mt-0.5 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <div>
                    <p className="font-dm text-sm text-deep-brown">Road 11, Gulshan-1</p>
                    <p className="font-dm text-sm text-warm-grey">Dhaka 1212, Bangladesh</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-center">
                  <span className="text-rose-gold shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </span>
                  <a href="tel:+8801700000000" className="font-dm text-sm text-deep-brown hover:text-rose-gold transition-colors">
                    +880 1700-000000
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-center">
                  <span className="text-rose-gold shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <a href="mailto:hello@lumierespa.bd" className="font-dm text-sm text-deep-brown hover:text-rose-gold transition-colors">
                    hello@lumierespa.bd
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-blush" />

              {/* Hours */}
              <div>
                <p className="font-italiana text-[10px] tracking-[0.2em] uppercase text-rose-gold mb-3">Working Hours</p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-dm text-sm text-deep-brown">Sat – Thu</span>
                    <span className="font-dm text-sm text-warm-grey">10:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-dm text-sm text-deep-brown">Friday</span>
                    <span className="font-dm text-sm text-blush">Closed</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-blush" />

              {/* Socials */}
              <div>
                <p className="font-italiana text-[10px] tracking-[0.2em] uppercase text-rose-gold mb-3">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { Icon: InstagramIcon, label: "Instagram" },
                    { Icon: FacebookIcon, label: "Facebook" },
                    { Icon: TikTokIcon, label: "TikTok" },
                  ].map(({ Icon, label }) => (
                    <a key={label} href="#" aria-label={label} className="text-rose-gold hover:text-deep-brown transition-colors">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Walk-in note */}
              <div className="bg-rose-gold/8 border border-rose-gold/20 rounded-xl px-4 py-3">
                <p className="font-dm text-xs text-warm-grey leading-relaxed">
                  <span className="text-rose-gold font-medium">Walk-ins welcome.</span>{" "}
                  Appointments receive priority booking and guaranteed time slots.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

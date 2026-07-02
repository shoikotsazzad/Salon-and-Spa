import Link from "next/link";

const quickLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery",  href: "/gallery" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.17 8.17 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-deep-brown text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-16 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

        {/* Col 1 — brand */}
        <div className="flex flex-col items-center text-center gap-5 md:items-start md:text-left">
          <Link href="/" className="font-cormorant text-3xl italic text-rose-gold font-semibold">
            Lumière
          </Link>
          <p className="font-italiana text-xs tracking-[0.2em] uppercase text-blush">
            Where Every Woman Glows
          </p>
          <p className="font-dm text-sm text-white/60 leading-relaxed max-w-xs">
            Dhaka&apos;s premier luxury women&apos;s salon &amp; spa, crafting moments of pure beauty since 2017.
          </p>
          <div className="flex gap-4 mt-1">
            {[InstagramIcon, FacebookIcon, TikTokIcon].map((Icon, i) => (
              <a key={i} href="#" aria-label={["Instagram", "Facebook", "TikTok"][i]}
                className="text-rose-gold hover:text-blush transition-colors duration-200">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — quick links */}
        <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left">
          <p className="font-italiana text-xs tracking-[0.2em] uppercase text-blush mb-2">
            Quick Links
          </p>
          {quickLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="font-dm text-sm text-white/60 hover:text-rose-gold transition-colors duration-200 w-fit">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Col 3 — contact */}
        <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left">
          <p className="font-italiana text-xs tracking-[0.2em] uppercase text-blush mb-2">
            Find Us
          </p>
          <p className="font-dm text-sm text-white/60 leading-relaxed">
            Road 11, Gulshan-1<br />Dhaka 1212, Bangladesh
          </p>
          <a href="tel:+8801700000000"
            className="font-dm text-sm text-white/60 hover:text-rose-gold transition-colors">
            +880 1700-000000
          </a>
          <a href="mailto:hello@lumierespa.bd"
            className="font-dm text-sm text-white/60 hover:text-rose-gold transition-colors">
            hello@lumierespa.bd
          </a>
          <div className="font-dm text-sm text-white/60 mt-1 space-y-1">
            <p>Sat–Thu &nbsp;10:00 AM – 8:00 PM</p>
            <p className="text-blush/70">Friday: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blush/20 mt-2">
        <p className="max-w-5xl mx-auto px-6 md:px-10 py-5 font-dm text-xs text-white/35 text-center">
          © 2025 Lumière Salon &amp; Spa. Designed with care in Dhaka.
        </p>
      </div>
    </footer>
  );
}

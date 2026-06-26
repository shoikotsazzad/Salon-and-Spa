import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Italiana } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lumière Salon & Spa — Where Every Woman Glows",
  description:
    "Dhaka's premier luxury women's salon & spa. Hair, skin, bridal & spa treatments in Gulshan-1.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${italiana.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

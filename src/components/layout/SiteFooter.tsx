"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, MessageCircle } from "lucide-react";
import { BRANDS } from "@/lib/data/brands";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#0B203C] text-white pt-14 sm:pt-18 lg:pt-20 border-t border-[#164377]/40 relative overflow-hidden">
      {/* 1. TOP FOOTER COLUMNS - Matching Reference Image 2 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* COLUMN 1: BRAND LOGO & AUTHORIZED DISTRIBUTOR STATEMENT */}
          <div className="space-y-4 lg:pr-4">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/images/logo.webp"
                alt="Al Ghwasa Technical Equipment Trading LLC"
                width={170}
                height={55}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-normal">
              Authorized GASTEC Japan Distributor across UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-white/70">
              <li>
                <Link href="/#home" className="hover:text-white transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#brands" className="hover:text-white transition-colors block py-0.5">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/experience-centre" className="hover:text-white transition-colors block py-0.5">
                  Experience Center
                </Link>
              </li>
              <li>
                <Link href="/#blogs" className="hover:text-white transition-colors block py-0.5">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors block py-0.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: OUR BRANDS */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Our Brands
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-white/70">
              {BRANDS.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT US */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs sm:text-[13px] text-white/70">
              <p>
                <a
                  href="mailto:Sales@alghwasa.com"
                  className="hover:text-white transition-colors block"
                >
                  Sales@alghwasa.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+97143968037"
                  className="hover:text-white transition-colors block font-mono"
                >
                  +971 4 3968037
                </a>
              </p>
              <p className="text-white/60 leading-relaxed text-xs">
                Unit M08/09, Al Shraifi-1 Zabeel Road, Dubai, UAE
              </p>
            </div>
          </div>

          {/* COLUMN 5: FOLLOW US */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/al-ghwasa-technical-equipment-trading"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.99 0 1.8-.81 1.8-1.8 0-.99-.81-1.8-1.8-1.8-.99 0-1.8.81-1.8 1.8 0 .99.81 1.8 1.8 1.8m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@alghwasa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M21.58 7.19a2.76 2.76 0 0 0-1.95-1.96C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.63.48A2.76 2.76 0 0 0 2.42 7.19 29.07 29.07 0 0 0 2 12c0 1.62.14 3.23.42 4.81a2.76 2.76 0 0 0 1.95 1.96c1.73.48 7.63.48 7.63.48s5.9 0 7.63-.48a2.76 2.76 0 0 0 1.95-1.96c.28-1.58.42-3.19.42-4.81 0-1.62-.14-3.23-.42-4.81zM9.75 15.02V8.98l5.53 3.02-5.53 3.02z" />
                </svg>
              </a>

              {/* Medium / Blog */}
              <a
                href="/blogs"
                aria-label="Technical Articles"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white font-serif font-black text-sm transition-colors"
              >
                M
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. BELOW THE FOOTER: INDUSTRIAL BLUEPRINT GRAPHIC (Uploaded Image 3) */}
      <div className="w-full relative mt-2 overflow-hidden bg-[#0B203C]">
        <div className="relative w-full">
          <Image
            src="/images/footer-blueprint.webp"
            alt="Al Ghwasa Marine and Industrial Refining Facility Blueprint"
            width={1920}
            height={850}
            className="w-full h-auto object-cover max-h-[380px] sm:max-h-[480px] lg:max-h-[540px] opacity-95"
            priority={false}
          />

          {/* Subtle gradient overlay to merge bottom edge smoothly */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#08172b] to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="w-full bg-[#08172b] py-4 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Al Ghwasa Technical Eqpt. Tdg. LLC. All rights reserved.</p>
          <p className="text-[11px] text-white/40 font-mono">
            Supplying UAE, Saudi Arabia, Qatar, Oman, Kuwait &amp; Bahrain
          </p>
        </div>
      </div>

      {/* 4. FLOATING ACTION CONTROLS (Scroll to Top & WhatsApp Chat matching Image 2) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {/* Scroll To Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-[#0F2E53] hover:bg-[#164377] text-white shadow-lg border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105 focus-visible:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp Quick Chat with Notification Badge */}
        <a
          href="https://wa.me/97143968037"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus-visible:outline-none"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          {/* Red Notification Badge "1" */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
            1
          </span>
        </a>
      </div>
    </footer>
  );
}

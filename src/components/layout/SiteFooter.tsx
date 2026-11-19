"use client";

import Link from "next/link";
import { SITE_METADATA } from "@/lib/data/site-content";
import { BRANDS } from "@/lib/data/brands";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  const topBrands = BRANDS.slice(0, 6);

  return (
    <footer className="w-full border-t border-[#0F2E53]/15 bg-white text-[#0F2E53]/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F2E53] text-white shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-[#0F2E53]">
                AL GHWASA
              </span>
            </div>

            <p className="text-xs leading-relaxed text-[#0F2E53]/75">
              Trusted supplier of marine and industrial safety equipment in Dubai, UAE
              since 1990. Partnered with world-leading manufacturers to safeguard
              facilities and vessels across the Middle East.
            </p>

            <div className="text-xs text-[#0F2E53]/60 font-mono">
              Est. 1990 · Dubai, United Arab Emirates
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2E53]">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#0F2E53] hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#0F2E53] hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#0F2E53] hover:underline transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#0F2E53] hover:underline transition-colors">
                  Technical Blogs & Insights
                </Link>
              </li>
              <li>
                <Link href="/experience-centre" className="hover:text-[#0F2E53] hover:underline transition-colors">
                  Dubai Experience Centre
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Brands */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2E53]">
              By Brands
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              {topBrands.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/brands/${b.slug}`}
                    className="hover:text-[#0F2E53] transition-colors flex items-center justify-between"
                  >
                    <span>{b.name}</span>
                    <span className="text-[10px] text-[#0F2E53]/50 font-mono">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2E53]">
              Contact Us
            </h4>
            <div className="mt-4 space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0F2E53] shrink-0 mt-0.5" />
                <span>{SITE_METADATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0F2E53] shrink-0" />
                <a href={`tel:${SITE_METADATA.phone}`} className="hover:text-[#0F2E53] hover:underline transition-colors">
                  {SITE_METADATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0F2E53] shrink-0" />
                <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-[#0F2E53] hover:underline transition-colors">
                  {SITE_METADATA.email}
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#0F2E53]/10">
              <span className="text-[11px] font-bold text-[#0F2E53] block mb-2">
                Follow Us
              </span>
              <div className="flex items-center gap-2 text-xs">
                <a
                  href={SITE_METADATA.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#0F2E53]/5 border border-[#0F2E53]/10 px-2.5 py-1 text-[11px] font-semibold text-[#0F2E53] hover:bg-[#0F2E53] hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={SITE_METADATA.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#0F2E53]/5 border border-[#0F2E53]/10 px-2.5 py-1 text-[11px] font-semibold text-[#0F2E53] hover:bg-[#0F2E53] hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={SITE_METADATA.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#0F2E53]/5 border border-[#0F2E53]/10 px-2.5 py-1 text-[11px] font-semibold text-[#0F2E53] hover:bg-[#0F2E53] hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#0F2E53]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#0F2E53]/60 gap-4">
          <p>© 2026 {SITE_METADATA.companyName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px]">Serving UAE, KSA, Qatar, Oman, Kuwait & Bahrain</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

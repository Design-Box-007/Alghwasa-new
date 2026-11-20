"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION, SITE_METADATA } from "@/lib/data/site-content";
import { BRANDS } from "@/lib/data/brands";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [brandsExpanded, setBrandsExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Trigger Button */}
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0F2E53]/20 bg-white p-2.5 text-[#0F2E53] hover:bg-slate-50 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2E53]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-0 bg-black/60 backdrop-blur-xs z-50 animate-in fade-in duration-200"
          onClick={closeMenu}
        />
      )}

      {/* Slide-out Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-sm bg-white shadow-2xl z-50 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-200">
          
          {/* 1. DRAWER HEADER WITH LOGO & CLOSE BUTTON */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/60 sticky top-0 z-10 backdrop-blur-md">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
              <Image
                src="/images/logo.webp"
                alt="Al Ghwasa Technical Equipment"
                width={140}
                height={46}
                className="h-9 w-auto object-contain logo-navy"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#0F2E53] hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2. NAVIGATION MENU OPTIONS */}
          <div className="p-5 space-y-4 flex-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F2E53]/60 px-1">
              Menu Navigation
            </div>

            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation Links">
              {MAIN_NAVIGATION.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label} className="border-b border-slate-100 pb-1">
                      <button
                        type="button"
                        onClick={() => setBrandsExpanded(!brandsExpanded)}
                        className="flex w-full items-center justify-between py-3 px-3.5 text-[15px] font-semibold text-[#0F2E53] hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-[#0F2E53]/70" />
                          <span>Represented Brands</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                            brandsExpanded ? "rotate-180 text-[#0F2E53]" : ""
                          }`}
                        />
                      </button>

                      {brandsExpanded && (
                        <div className="mt-1 ml-4 pl-3 border-l-2 border-[#0F2E53]/20 space-y-1 max-h-60 overflow-y-auto">
                          <Link
                            href="/#brands"
                            onClick={closeMenu}
                            className="flex items-center justify-between py-2 px-2 text-xs font-bold text-[#0F2E53] hover:text-[#164377] transition-colors"
                          >
                            <span>Browse All Brands</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#0F2E53]" />
                          </Link>
                          {BRANDS.map((b) => (
                            <Link
                              key={b.slug}
                              href={`/brands/${b.slug}`}
                              onClick={closeMenu}
                              className="flex items-center justify-between py-1.5 px-2 text-xs font-medium text-slate-600 hover:text-[#0F2E53] hover:bg-slate-50 rounded-md transition-colors"
                            >
                              <span>{b.name}</span>
                              <ChevronRight className="w-3 h-3 text-slate-400" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between py-3 px-3.5 text-[15px] font-semibold rounded-xl transition-colors ${
                      isActive
                        ? "bg-[#0F2E53]/10 text-[#0F2E53] font-bold"
                        : "text-[#0F2E53]/85 hover:bg-slate-50 hover:text-[#0F2E53]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}

              {/* Direct Contact Us Link */}
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="flex items-center justify-between py-3 px-3.5 text-[15px] font-semibold text-[#0F2E53]/85 hover:bg-slate-50 hover:text-[#0F2E53] rounded-xl transition-colors"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </nav>
          </div>

          {/* 3. QUICK CONTACT & QUOTE CTA CARDS */}
          <div className="p-5 border-t border-slate-200 bg-slate-50/70 space-y-3">
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2E53] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#164377] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>

            <a
              href="https://wa.me/97143968037"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Inquiry</span>
            </a>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0F2E53]" />
                <a href="tel:+97143968037" className="hover:text-[#0F2E53] font-medium font-mono">
                  +971 4 3968037
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0F2E53]" />
                <a href="mailto:Sales@alghwasa.com" className="hover:text-[#0F2E53] font-medium">
                  Sales@alghwasa.com
                </a>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Zabeel Road, Dubai, UAE</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

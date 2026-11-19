"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION, SITE_METADATA } from "@/lib/data/site-content";
import { BRANDS } from "@/lib/data/brands";
import { Menu, X, ChevronRight, ChevronDown, Phone } from "lucide-react";

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
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#0F2E53]/15 bg-white/90 p-2 text-[#0F2E53] hover:bg-[#0F2E53]/5 transition-colors"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-black/40 backdrop-blur-sm z-40 animate-in fade-in duration-200"
          onClick={closeMenu}
        />
      )}

      {/* Slide-out Menu Panel */}
      {isOpen && (
        <div className="fixed top-[65px] right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 overflow-y-auto p-6 flex flex-col justify-between animate-in slide-in-from-right duration-200">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#0F2E53]/60 pb-2 border-b border-[#0F2E53]/10">
              Navigation
            </div>

            <nav className="flex flex-col space-y-1">
              {MAIN_NAVIGATION.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label} className="border-b border-[#0F2E53]/10 pb-1">
                      <button
                        type="button"
                        onClick={() => setBrandsExpanded(!brandsExpanded)}
                        className="flex w-full items-center justify-between py-2.5 px-3 text-base font-semibold text-[#0F2E53] hover:text-[#164377] transition-colors rounded-lg"
                      >
                        <span>Brands</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            brandsExpanded ? "rotate-180 text-[#0F2E53]" : ""
                          }`}
                        />
                      </button>

                      {brandsExpanded && (
                        <div className="mt-1 ml-3 space-y-1 pl-3 border-l-2 border-[#0F2E53]/20 max-h-56 overflow-y-auto">
                          {BRANDS.map((b) => (
                            <Link
                              key={b.slug}
                              href={`/brands/${b.slug}`}
                              onClick={closeMenu}
                              className="flex items-center justify-between py-1.5 px-2 text-xs font-medium text-[#0F2E53]/70 hover:text-[#0F2E53] transition-colors rounded-md"
                            >
                              <span>{b.name}</span>
                              <ChevronRight className="w-3 h-3 text-[#0F2E53]/40" />
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
                    className={`flex items-center justify-between py-2.5 px-3 text-base font-semibold rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#0F2E53]/10 text-[#0F2E53] font-bold"
                        : "text-[#0F2E53]/80 hover:bg-[#0F2E53]/5 hover:text-[#0F2E53]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#0F2E53]/40" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Quick Contact CTA */}
          <div className="pt-6 border-t border-[#0F2E53]/10 space-y-3">
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2E53] py-3 text-sm font-semibold text-white shadow hover:bg-[#164377] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>

            <div className="text-center text-xs text-[#0F2E53]/60">
              Dubai, UAE · {SITE_METADATA.phone}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

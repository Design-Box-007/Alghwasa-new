"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MotionValue } from "motion/react";
import {
  Shield,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { BRANDS } from "@/lib/data/brands";
import { BLOGS } from "@/lib/data/blogs";
import { INDUSTRIES } from "@/lib/data/industries";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";

interface InternalDeviceWebsiteProps {
  motionProgress?: MotionValue<number>; // MotionValue driving internal content scroll smoothly
  scrollProgress?: number; // 0 to 1 fallback
  onNavigateToSection?: (sectionId: string, ratio: number) => void;
}

export function InternalDeviceWebsite({
  motionProgress,
  scrollProgress,
  onNavigateToSection,
}: InternalDeviceWebsiteProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedBrandCategory, setSelectedBrandCategory] = useState("All");

  // RFQ Form state
  const [rfqSubmitted, setRfqSubmitted] = useState(false);
  const [rfqForm, setRfqForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    brand: "Newson Gale",
    message: "",
  });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "industries", label: "Industries" },
    { id: "brands", label: "Brands" },
    { id: "products", label: "Products" },
    { id: "experience", label: "Experience" },
    { id: "blogs", label: "Blogs" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  // ACTIVE SECTION TRACKING: Update active tab based on container scroll position
  const updateActiveSection = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const currentScroll = container.scrollTop;

    const sections = [
      "home",
      "about",
      "industries",
      "brands",
      "products",
      "experience",
      "blogs",
      "faq",
      "contact",
    ];

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = container.querySelector<HTMLElement>(`#internal-${sections[i]}`);
      if (el && currentScroll >= el.offsetTop - 140) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  // 1. SYNC SCROLL: Directly update container.scrollTop from motionProgress or scrollProgress
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    const applyScroll = (progress: number) => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll > 0) {
        container.scrollTop = progress * maxScroll;
        updateActiveSection();
      }
    };

    if (motionProgress) {
      applyScroll(motionProgress.get());
      const unsubscribe = motionProgress.on("change", (latest) => {
        applyScroll(latest);
      });
      return () => unsubscribe();
    } else if (scrollProgress !== undefined) {
      applyScroll(scrollProgress);
    }
  }, [motionProgress, scrollProgress, updateActiveSection]);

  // 2. NAVIGATION CLICK HANDLER: Calculate ratio and notify parent to scroll window
  const scrollTo = (id: string) => {
    setActiveSection(id);
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const element = container.querySelector<HTMLElement>(`#internal-${id}`);
    if (element) {
      const maxScroll = container.scrollHeight - container.clientHeight;
      const targetOffset = Math.max(0, element.offsetTop - 40);
      const ratio = maxScroll > 0 ? targetOffset / maxScroll : 0;

      if (onNavigateToSection) {
        onNavigateToSection(id, ratio);
      } else {
        container.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    }
  };

  // 3. NATIVE WHEEL & TOUCH EVENT FORWARDING:
  // Forward device scroll actions directly to window scroll so the presentation track drives everything smoothly
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
    };

    let touchStart = 0;
    const onNativeTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };
    const onNativeTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = touchStart - currentY;
      touchStart = currentY;
      window.scrollBy({ top: deltaY, behavior: "auto" });
    };

    el.addEventListener("wheel", onNativeWheel, { passive: false });
    el.addEventListener("touchstart", onNativeTouchStart, { passive: true });
    el.addEventListener("touchmove", onNativeTouchMove, { passive: true });

    return () => {
      el.removeEventListener("wheel", onNativeWheel);
      el.removeEventListener("touchstart", onNativeTouchStart);
      el.removeEventListener("touchmove", onNativeTouchMove);
    };
  }, []);

  const brandCategories = [
    "All",
    "Static Grounding",
    "Gas Detection",
    "Compressed Air",
    "Static Control",
  ];

  const filteredBrands =
    selectedBrandCategory === "All"
      ? BRANDS
      : BRANDS.filter((b) =>
        selectedBrandCategory === "Static Grounding"
          ? b.industry.toLowerCase().includes("grounding")
          : selectedBrandCategory === "Gas Detection"
            ? b.industry.toLowerCase().includes("gas")
            : selectedBrandCategory === "Compressed Air"
              ? b.industry.toLowerCase().includes("air") ||
              b.industry.toLowerCase().includes("flow")
              : b.industry.toLowerCase().includes("static")
      );

  return (
    <div className="relative w-full h-full bg-white text-[#0F2E53] flex flex-col overflow-hidden select-text">
      {/* 1. TOP STATUS BAR (Device Header) */}
      <div className="shrink-0 h-9 px-6 flex items-center justify-between border-b border-[#0F2E53]/10 bg-white z-30 select-none">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-tight text-[#0F2E53]">
            09:41
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#0F2E53]/60 hidden sm:inline">
            Dubai HQ Online
          </span>
        </div>

        <div className="flex items-center gap-3 text-[#0F2E53]">
          <span className="text-[11px] font-bold tracking-wider">5G</span>
          {/* Battery Icon */}
          <div className="flex items-center gap-0.5">
            <div className="w-5 h-2.5 rounded-sm border border-current p-0.5 flex items-center">
              <div className="h-full w-full bg-current rounded-xs" />
            </div>
            <div className="w-0.5 h-1 bg-current rounded-r-xs" />
          </div>
        </div>
      </div>

      {/* 2. INNER SCROLLABLE CANVAS (Houses Entire Website) */}
      <div
        ref={scrollContainerRef}
        onScroll={updateActiveSection}
        className="flex-1 overflow-y-auto overflow-x-hidden relative p-0 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* --- SECTION 1: HERO SECTION (CARD LAYOUT MATCHING REFERENCE WITH INDUSTRIAL VIDEO) --- */}
        <HeroSection onNavigate={scrollTo} id="internal-home" />

        {/* --- SECTION 2: ABOUT US & STATISTICS --- */}
        <AboutSection id="internal-about" />

        {/* --- SECTION 3: WHY CHOOSE AL GHWASA & INTERACTIVE INDUSTRIAL FACILITY --- */}
        <WhyChooseSection id="internal-industries" onNavigate={scrollTo} />

        {/* --- SECTION 4: FEATURED PRODUCTS (3-COLUMN INTERACTIVE SHOWCASE MATCHING REFERENCE) --- */}
        <FeaturedProducts id="internal-brands" onNavigate={scrollTo} />

        {/* --- SECTION 5: BLOGS & EDITORIAL PUBLICATIONS (CONTINUOUS CAROUSEL MATCHING REFERENCE) --- */}
        <BlogSection id="internal-blogs" onNavigate={scrollTo} />

        {/* --- SECTION 8: FREQUENTLY ASKED QUESTIONS (10 VERBATIM FAQS) --- */}
        <FAQSection id="internal-faq" onNavigate={scrollTo} />

        {/* --- SECTION 9: REQUEST A QUOTE & CONTACT FORM --- */}
        <section
          id="internal-contact"
          className="p-6 sm:p-10 border-b border-[#0F2E53]/10 bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information & Office */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F2E53]/60">
                  Headquarters &amp; Warehouse
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2E53] tracking-tight mt-1">
                  Request a Formal Engineering Quote
                </h2>
                <p className="mt-2 text-sm text-[#0F2E53]/80 leading-relaxed">
                  Our Dubai engineering desk responds within 24 business hours with formal pricing, manufacturer data sheets, and delivery timelines.
                </p>

                <div className="mt-6 space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 text-[#0F2E53]">
                    <MapPin className="w-4 h-4 text-[#0F2E53] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#0F2E53]">Al Ghwasa Technical Equipment Trading LLC</p>
                      <p className="text-[#0F2E53]/70">Deira / Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[#0F2E53]">
                    <Phone className="w-4 h-4 text-[#0F2E53] shrink-0" />
                    <div>
                      <span className="font-semibold">+971 4 228 2133</span>
                      <span className="text-[#0F2E53]/60 text-xs ml-2">Sun - Thu, 8am - 5pm GST</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-[#0F2E53]">
                    <Mail className="w-4 h-4 text-[#0F2E53] shrink-0" />
                    <div>
                      <a href="mailto:info@alghwasa.com" className="font-semibold hover:underline">
                        info@alghwasa.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-[#FAFAFC] border border-[#0F2E53]/10 text-xs text-[#0F2E53]/70">
                  <p className="font-bold text-[#0F2E53] mb-1">
                    Ex-Stock Delivery Across GCC:
                  </p>
                  United Arab Emirates · Saudi Arabia · Qatar · Oman · Kuwait · Bahrain
                </div>
              </div>

              {/* Form Element */}
              <div className="rounded-2xl border border-[#0F2E53]/10 bg-[#FAFAFC] p-5 sm:p-6 shadow-sm">
                {rfqSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F2E53] mt-3">
                      Quote Request Received
                    </h3>
                    <p className="text-xs text-[#0F2E53]/70 mt-1 max-w-xs mx-auto">
                      Thank you, {rfqForm.name}. An Al Ghwasa technical sales specialist has been assigned to your enquiry.
                    </p>
                    <button
                      type="button"
                      onClick={() => setRfqSubmitted(false)}
                      className="mt-4 rounded-full bg-[#0F2E53] text-white px-4 py-1.5 text-xs font-semibold hover:bg-[#091D36]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setRfqSubmitted(true);
                    }}
                    className="space-y-3.5"
                  >
                    <div>
                      <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={rfqForm.name}
                        onChange={(e) => setRfqForm({ ...rfqForm, name: e.target.value })}
                        placeholder="e.g. Tariq Mansoor"
                        className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3 py-2 text-xs text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                          Company / Plant *
                        </label>
                        <input
                          type="text"
                          required
                          value={rfqForm.company}
                          onChange={(e) => setRfqForm({ ...rfqForm, company: e.target.value })}
                          placeholder="e.g. Petrochem LLC"
                          className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3 py-2 text-xs text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={rfqForm.email}
                          onChange={(e) => setRfqForm({ ...rfqForm, email: e.target.value })}
                          placeholder="tariq@petrochem.com"
                          className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3 py-2 text-xs text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={rfqForm.phone}
                          onChange={(e) => setRfqForm({ ...rfqForm, phone: e.target.value })}
                          placeholder="+971 50 123 4567"
                          className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3 py-2 text-xs text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                          Brand Required
                        </label>
                        <select
                          value={rfqForm.brand}
                          onChange={(e) => setRfqForm({ ...rfqForm, brand: e.target.value })}
                          className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3 py-2 text-xs text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53]"
                        >
                          {BRANDS.map((b) => (
                            <option key={b.name} value={b.name}>
                              {b.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F2E53] mb-1">
                        Project Specifications / Quantity
                      </label>
                      <textarea
                        rows={3}
                        value={rfqForm.message}
                        onChange={(e) => setRfqForm({ ...rfqForm, message: e.target.value })}
                        placeholder="State required model, quantities, hazardous area zone (Zone 0/1/2), or application details..."
                        className="w-full rounded-xl border border-[#0F2E53]/20 bg-white px-3 py-2 text-xs text-[#0F2E53] focus:outline-none focus:ring-2 focus:ring-[#0F2E53] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#0F2E53] text-white py-2.5 text-xs font-bold shadow-sm hover:bg-[#091D36] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Request for Quotation</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 10: INSIDE DEVICE FOOTER --- */}
        <footer className="p-6 sm:p-8 bg-white text-[#0F2E53]/70 text-xs border-t border-[#0F2E53]/10">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-extrabold text-[#0F2E53]">
                AL GHWASA TECHNICAL EQUIPMENT TRADING LLC
              </p>
              <p className="mt-0.5 text-[11px] text-[#0F2E53]/60">
                Authorised Distributor of Industrial Safety &amp; Explosion Protection Solutions Since 1990.
              </p>
            </div>

            <div className="flex items-center gap-4 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => scrollTo("home")}
                className="hover:underline text-[#0F2E53]"
              >
                Back to Top ↑
              </button>
              <span>·</span>
              <a href="/sitemap.xml" className="hover:underline text-[#0F2E53]">
                Sitemap
              </a>
              <span>·</span>
              <span>© 2026 Al Ghwasa LLC</span>
            </div>
          </div>
        </footer>
      </div>

      {/* 3. FLOATING INNER BOTTOM DOCK (Matches reference Image 2) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 select-none pointer-events-auto max-w-[94%]">
        <nav
          aria-label="Inner device navigation"
          className="flex items-center gap-1 rounded-full bg-white/95 px-2 py-1.5 shadow-lg border border-[#0F2E53]/15 backdrop-blur-md text-[11px] font-medium overflow-x-auto no-scrollbar whitespace-nowrap"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`rounded-full px-2.5 py-1 transition-all ${isActive
                  ? "bg-[#0F2E53] text-white font-bold shadow-xs"
                  : "text-[#0F2E53]/70 hover:text-[#0F2E53]"
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

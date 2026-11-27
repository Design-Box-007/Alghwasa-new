"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/lib/data/site-content";
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
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  // Track active section on home page scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "about", "industries", "brands", "blogs", "faq", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Ensure portal only mounts on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when drawer is open
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

  // Close drawer on pathname change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (href: string) => {
    closeMenu();
    if (href.startsWith("/#") && pathname === "/") {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setActiveSection(targetId);
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  };

  const isItemActive = (item: { label: string; href: string; hasDropdown?: boolean }): boolean => {
    if (pathname === "/") {
      if (item.href === "/#home" || item.href === "/") {
        return activeSection === "home";
      }
      if (item.href.startsWith("/#")) {
        const sectionId = item.href.replace("/#", "");
        return activeSection === sectionId;
      }
      return pathname === item.href;
    }

    if (item.hasDropdown || item.href === "/#brands") {
      return pathname.startsWith("/brands");
    }
    if (item.href === "/#blogs" || item.label === "Blogs") {
      return pathname.startsWith("/blogs");
    }
    if (item.href === "/experience-centre") {
      return pathname.startsWith("/experience-centre");
    }
    if (item.href === "/about" || item.label === "About Us") {
      return pathname.startsWith("/about");
    }
    if (item.href === "/industries" || item.href === "/#industries" || item.label === "Industries") {
      return pathname.startsWith("/industries");
    }
    if (item.href === "/#about") {
      return pathname.startsWith("/about");
    }

    return pathname === item.href;
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Trigger Button */}
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#0F2E53]/20 bg-white p-2.5 text-[#0F2E53] hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2E53] cursor-pointer"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Slide-out Drawer & Backdrop rendered in React Portal to escape header containing block */}
      {mounted && isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Slide-out Mobile Navigation Drawer */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              onClick={(e) => e.stopPropagation()}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-sm bg-white shadow-2xl z-10 overflow-y-auto flex flex-col justify-between"
            >
              {/* 1. DRAWER HEADER WITH LOGO & CLOSE BUTTON */}
              <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/80 sticky top-0 z-10 backdrop-blur-md">
                <Link href="/" onClick={() => handleLinkClick("/")} className="flex items-center gap-2">
                  <Image
                    src="/images/logo.webp"
                    alt="Al Ghwasa Technical Equipment Trading LLC"
                    width={160}
                    height={50}
                    className="h-9 w-auto object-contain logo-navy"
                  />
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#0F2E53] hover:bg-white transition-colors cursor-pointer"
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
                    const isActive = isItemActive(item);

                    if (item.hasDropdown) {
                      return (
                        <div key={item.label} className="border-b border-slate-100 pb-1">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setBrandsExpanded((prev) => !prev);
                            }}
                            className={`group flex w-full items-center justify-between py-3 px-3.5 text-[15px] rounded-xl transition-colors cursor-pointer ${
                              isActive
                                ? "bg-[#0F2E53]/10 text-[#0F2E53] font-bold"
                                : "text-[#0F2E53]/85 hover:bg-slate-50 hover:text-[#0F2E53] font-semibold"
                            }`}
                          >
                            <span>{item.label}</span>
                            <span
                              className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all duration-200 shrink-0 ${
                                brandsExpanded
                                  ? "bg-[#0F2E53] text-white rotate-180"
                                  : "bg-[#0F2E53]/5 text-[#0F2E53] group-hover:bg-[#0F2E53]/10"
                              }`}
                            >
                              <ChevronDown className="h-4 w-4 stroke-[2.5]" />
                            </span>
                          </button>

                          {brandsExpanded && (
                            <div className="mt-1 ml-4 pl-3 border-l-2 border-[#0F2E53]/20 space-y-1 max-h-60 overflow-y-auto">
                              <Link
                                href="/#brands"
                                onClick={() => handleLinkClick("/#brands")}
                                className="flex items-center justify-between py-2 px-2 text-xs font-bold text-[#0F2E53] hover:text-[#164377] transition-colors"
                              >
                                <span>Browse All Products</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#0F2E53]" />
                              </Link>
                              {BRANDS.map((b) => {
                                const isBrandActive = pathname === `/brands/${b.slug}`;
                                return (
                                  <Link
                                    key={b.slug}
                                    href={`/brands/${b.slug}`}
                                    onClick={() => handleLinkClick(`/brands/${b.slug}`)}
                                    className={`flex items-center justify-between py-1.5 px-2 text-xs rounded-md transition-colors ${
                                      isBrandActive
                                        ? "bg-[#0F2E53]/10 text-[#0F2E53] font-bold"
                                        : "font-medium text-slate-600 hover:text-[#0F2E53] hover:bg-slate-50"
                                    }`}
                                  >
                                    <span>{b.name}</span>
                                    <ChevronRight className="w-3 h-3 text-slate-400" />
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className={`flex items-center justify-between py-3 px-3.5 text-[15px] rounded-xl transition-colors ${
                          isActive
                            ? "bg-[#0F2E53]/10 text-[#0F2E53] font-bold"
                            : "text-[#0F2E53]/85 hover:bg-slate-50 hover:text-[#0F2E53] font-semibold"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}

                  {/* Direct Contact Us Link */}
                  {(() => {
                    const isContactActive = pathname === "/" && activeSection === "contact";
                    return (
                      <Link
                        href="/#contact"
                        onClick={() => handleLinkClick("/#contact")}
                        className={`flex items-center justify-between py-3 px-3.5 text-[15px] rounded-xl transition-colors ${
                          isContactActive
                            ? "bg-[#0F2E53]/10 text-[#0F2E53] font-bold"
                            : "text-[#0F2E53]/85 hover:bg-slate-50 hover:text-[#0F2E53] font-semibold"
                        }`}
                      >
                        <span>Contact Us</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })()}
                </nav>
              </div>

              {/* 3. QUICK CONTACT & QUOTE CTA CARDS */}
              <div className="p-5 border-t border-slate-200 bg-slate-50/70 space-y-3">
                <Link
                  href="/#contact"
                  onClick={() => handleLinkClick("/#contact")}
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
          </div>,
          document.body
        )}
    </div>
  );
}

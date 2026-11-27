"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/lib/data/site-content";
import { BrandsDropdown } from "@/components/navigation/BrandsDropdown";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { PhoneCall } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("home");

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
    <header className="sticky top-0 z-50 w-full border-b border-[#0F2E53]/15 bg-white/95 backdrop-blur-md transition-colors">
      <div className="w-full max-w-[1536px] mx-auto flex h-18 sm:h-20 lg:h-22 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Brand Logo - Moved to the left, enlarged & legible */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90 py-1"
            title="Al Ghwasa Technical Equipment Trading LLC"
          >
            <Image
              src="/images/logo.webp"
              alt="Al Ghwasa Technical Equipment Trading LLC"
              width={240}
              height={75}
              priority
              className="h-11 sm:h-13 lg:h-15 w-auto object-contain logo-navy drop-shadow-xs"
            />
          </Link>
        </div>

        {/* Desktop Horizontal Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3" aria-label="Main Navigation">
          {MAIN_NAVIGATION.map((item) => {
            const isActive = isItemActive(item);

            if (item.hasDropdown) {
              return <BrandsDropdown key={item.label} isActive={isActive} />;
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-[#0F2E53] font-bold"
                    : "text-[#0F2E53]/75 hover:text-[#0F2E53]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#0F2E53]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action & Mobile Toggle - Moved to the right */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0F2E53] px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-[#0F2E53]/20 hover:bg-[#164377] transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2E53]"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Request a Quote</span>
          </Link>

          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}

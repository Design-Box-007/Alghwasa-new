"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/lib/data/site-content";
import { BrandsDropdown } from "@/components/navigation/BrandsDropdown";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { PhoneCall } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#0F2E53]/15 bg-white/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo - Uses uploaded official logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90 py-1"
          title="Al Ghwasa Technical Equipment Trading LLC"
        >
          <Image
            src="/images/logo.webp"
            alt="Al Ghwasa Technical Equipment Trading LLC"
            width={180}
            height={55}
            priority
            className="h-10 sm:h-12 w-auto object-contain logo-navy"
          />
        </Link>

        {/* Desktop Horizontal Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {MAIN_NAVIGATION.map((item) => {
            if (item.hasDropdown) {
              return <BrandsDropdown key={item.label} />;
            }

            const isActive = pathname === item.href;
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

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0F2E53] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#0F2E53]/20 hover:bg-[#164377] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2E53]"
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

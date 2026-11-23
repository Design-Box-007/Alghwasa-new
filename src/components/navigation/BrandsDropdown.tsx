"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BRANDS } from "@/lib/data/brands";
import { ChevronDown, ExternalLink, ShieldCheck } from "lucide-react";

interface BrandsDropdownProps {
  onSelect?: () => void;
}

export function BrandsDropdown({ onSelect }: BrandsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#0F2E53]/80 hover:text-[#0F2E53] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2E53] rounded-md"
      >
        <span>Brands</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-[480px] rounded-2xl border border-[#0F2E53]/15 bg-white p-4 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="mb-3 pb-2 border-b border-[#0F2E53]/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F2E53]">
              <ShieldCheck className="w-4 h-4 text-[#0F2E53]" />
              <span>Authorized Brand Partners</span>
            </div>
            <Link
              href="/#brands"
              onClick={() => {
                setIsOpen(false);
                onSelect?.();
              }}
              className="text-xs font-medium text-[#0F2E53]/60 hover:text-[#0F2E53] transition-colors"
            >
              View All ↗
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-1.5 max-h-[360px] overflow-y-auto pr-1">
            {BRANDS.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                onClick={() => {
                  setIsOpen(false);
                  onSelect?.();
                }}
                className="group flex flex-col rounded-lg p-2.5 hover:bg-[#0F2E53]/5 transition-colors focus:outline-none focus:bg-[#0F2E53]/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0F2E53] group-hover:text-[#164377] transition-colors">
                    {brand.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#0F2E53]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] text-[#0F2E53]/60 line-clamp-1 mt-0.5">
                  {brand.industry}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#0F2E53]/10 text-[11px] text-[#0F2E53]/60 flex items-center justify-between">
            <span>Genuine products & manufacturer-backed solutions</span>
            <span className="font-mono text-[10px] text-[#0F2E53] font-bold">6 Brands</span>
          </div>
        </div>
      )}
    </div>
  );
}

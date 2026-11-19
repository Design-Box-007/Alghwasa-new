"use client";

import Image from "next/image";
import { ShieldCheck, Flame } from "lucide-react";

interface CoverScreenProps {
  onUnfold: () => void;
  isCompact?: boolean;
}

export function CoverScreen({ onUnfold, isCompact = false }: CoverScreenProps) {
  return (
    <div
      className={`relative w-full h-full bg-[#FFFFFF] text-[#0F2E53] flex flex-col justify-between select-none overflow-hidden rounded-[34px] ${
        isCompact ? "p-3" : "p-4 sm:p-5"
      }`}
    >
      {/* 1. TOP HEADER: Large Digital Clock + Date/Status Line in #0F2E53 */}
      <div className={`text-center z-20 ${isCompact ? "pt-1" : "pt-2"}`}>
        <h1
          className={`font-black tracking-tight font-display-hero text-[#0F2E53] leading-none ${
            isCompact ? "text-3xl" : "text-[52px]"
          }`}
        >
          14:32
        </h1>
        <p
          className={`font-semibold tracking-[0.16em] uppercase text-[#0F2E53]/70 ${
            isCompact ? "mt-0.5 text-[8.5px]" : "mt-1.5 text-[10px]"
          }`}
        >
          Al Ghwasa · Dubai
        </p>
      </div>

      {/* 2. CENTER: Wallpaper Portrait (Framed neatly behind UI) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-portrait.png"
            alt="Al Ghwasa Industrial Safety Wallpaper"
            fill
            priority
            sizes="(max-width: 768px) 320px, 420px"
            className="object-cover object-top scale-95 translate-y-4 contrast-[1.03]"
          />
          {/* Subtle vignette at bottom ensuring notification readability */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/70 to-transparent" />
        </div>
      </div>

      {/* 3. NOTIFICATION CARDS (Middle/Lower area, frosted styling with subtle #0F2E53 borders) */}
      <div className="relative z-20 mb-1 mt-auto px-0.5 space-y-2">
        {/* Notification 1 */}
        <div
          onClick={onUnfold}
          className="group cursor-pointer rounded-2xl border border-[#0F2E53]/15 bg-white/85 p-2 shadow-xs backdrop-blur-md transition-all hover:bg-white hover:border-[#0F2E53]/30 hover:shadow-sm"
        >
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 shrink-0 flex items-center justify-center rounded-xl bg-[#0F2E53] text-white shadow-xs">
              <Flame className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-bold text-[#0F2E53] text-[11px] truncate leading-tight">
                Ghwasa Industrial 2026
              </p>
              <p className="font-mono font-semibold tracking-wider uppercase text-[#0F2E53]/60 text-[8px] truncate">
                ATEX & EXPLOSION PROTECTION · NOW
              </p>
            </div>
          </div>
        </div>

        {/* Notification 2 */}
        {!isCompact && (
          <div
            onClick={onUnfold}
            className="group cursor-pointer rounded-2xl border border-[#0F2E53]/15 bg-white/85 p-2 shadow-xs backdrop-blur-md transition-all hover:bg-white hover:border-[#0F2E53]/30 hover:shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 shrink-0 flex items-center justify-center rounded-xl bg-[#164377] text-white shadow-xs">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-[#0F2E53] truncate leading-tight">
                  Civil Defence Approved
                </p>
                <p className="font-mono text-[8px] font-semibold tracking-wider uppercase text-[#0F2E53]/60 truncate">
                  OFFICIAL GCC DISTRIBUTOR · 2H AGO
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. BOTTOM ACTION ROW: Instagram, Scroll to unfold pill, X icon */}
      <div className="relative z-20 flex items-center justify-between pt-1">
        {/* Instagram Icon Button */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-xs border border-[#0F2E53]/15 backdrop-blur-md text-[#0F2E53] hover:scale-105 hover:bg-[#0F2E53] hover:text-white transition-all"
        >
          <svg
            className="h-4 w-4 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* Scroll to unfold Center Pill */}
        <button
          type="button"
          onClick={onUnfold}
          className="inline-flex items-center rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-bold text-[#0F2E53] shadow-xs border border-[#0F2E53]/20 backdrop-blur-md hover:bg-[#0F2E53] hover:text-white hover:shadow-xs transition-all"
        >
          Scroll to unfold
        </button>

        {/* X / Social Icon Button */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-xs border border-[#0F2E53]/15 backdrop-blur-md text-[#0F2E53] hover:scale-105 hover:bg-[#0F2E53] hover:text-white transition-all"
        >
          <svg
            className="h-3.5 w-3.5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

"use client";

import { Phone, Mail, MessageSquare, RotateCcw } from "lucide-react";
import Image from "next/image";

interface IncomingCallScreenProps {
  onReopen: () => void;
  isCompact?: boolean;
}

export function IncomingCallScreen({ onReopen, isCompact = false }: IncomingCallScreenProps) {
  return (
    <div
      className={`relative w-full h-full bg-[#0B203C] text-white flex flex-col justify-between select-none overflow-hidden rounded-[34px] ${
        isCompact ? "p-3 sm:p-4" : "p-4 sm:p-5 lg:p-6"
      }`}
    >
      {/* Subtle Ambient Pulse Glow in Blue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 bg-[#164377]/40 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className={`text-center z-20 ${isCompact ? "pt-1" : "pt-2"}`}>
        <span className="inline-block rounded-full bg-white/10 border border-white/15 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-cyan-300">
          Engineering Consultation Desk
        </span>
        <h2
          className={`font-black tracking-tight uppercase text-white font-display-hero mt-1.5 ${
            isCompact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
          }`}
        >
          AL GHWASA · DUBAI
        </h2>
        <p className="text-[10px] sm:text-[11px] font-semibold text-white/80 mt-0.5 tracking-wide truncate px-2">
          Industrial Safety &amp; Explosion Protection
        </p>
        <p className="font-mono text-[9px] sm:text-[10px] font-bold text-white/60 mt-0.5">
          +971 52 247 1439 · Ex-Stock UAE &amp; Middle East
        </p>
      </div>

      {/* Center Caller Section with Concentric Pulse Rings & Proper Logo */}
      <div className="relative z-20 flex flex-col items-center justify-center my-auto py-1 sm:py-2">
        <div className="relative flex items-center justify-center">
          {/* Animated concentric audio rings - responsive sizes */}
          <div
            className={`absolute rounded-full border border-white/15 animate-ping opacity-35 pointer-events-none ${
              isCompact
                ? "w-28 h-28 sm:w-34 sm:h-34"
                : "w-34 h-34 sm:w-40 sm:h-40 lg:w-44 lg:h-44"
            }`}
          />
          <div
            className={`absolute rounded-full border border-cyan-400/30 animate-pulse pointer-events-none ${
              isCompact
                ? "w-22 h-22 sm:w-26 sm:h-26"
                : "w-26 h-26 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            }`}
          />

          {/* Properly Centered and Sized Logo Card */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/logo.webp"
              alt="Al Ghwasa Technical Equipment Trading LLC"
              width={220}
              height={68}
              priority
              className={`${
                isCompact
                  ? "h-10 sm:h-12 w-auto"
                  : "h-12 sm:h-14 lg:h-18 w-auto"
              } object-contain logo-light drop-shadow-md`}
            />
          </div>
        </div>

        <p
          className={`font-bold uppercase tracking-widest text-cyan-300 animate-pulse flex items-center gap-1.5 ${
            isCompact ? "mt-2.5 sm:mt-3 text-[10px] sm:text-[11px]" : "mt-4 sm:mt-5 text-xs"
          }`}
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Incoming Call...</span>
        </p>
        <p className="text-[9.5px] sm:text-[11px] font-medium text-white/75 mt-0.5 text-center max-w-[210px] sm:max-w-[240px] leading-snug line-clamp-2">
          Technical specialist ready to assist with ATEX &amp; Safety quotes
        </p>
      </div>

      {/* Bottom Action Controls */}
      <div className={`relative z-20 ${isCompact ? "space-y-2 pb-0.5" : "space-y-3 pb-1"}`}>
        <div className={`flex items-center justify-center ${isCompact ? "gap-4 sm:gap-5" : "gap-5 sm:gap-6"}`}>
          {/* WhatsApp Direct Action */}
          <a
            href="https://wa.me/971522471439"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 ${
                isCompact ? "w-10 h-10 sm:w-11 sm:h-11" : "w-11 h-11 sm:w-12 sm:h-12"
              }`}
            >
              <MessageSquare className={`${isCompact ? "w-4 h-4" : "w-4.5 h-4.5 sm:w-5 sm:h-5"}`} />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-white/80">WhatsApp</span>
          </a>

          {/* Direct Phone Call Action */}
          <a
            href="tel:+971522471439"
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`rounded-full bg-white hover:bg-slate-100 text-[#0F2E53] flex items-center justify-center shadow-xl transition-transform group-hover:scale-105 animate-bounce ${
                isCompact ? "w-12 h-12 sm:w-13 sm:h-13" : "w-13 h-13 sm:w-14 sm:h-14"
              }`}
            >
              <Phone className={`${isCompact ? "w-5 h-5" : "w-5 sm:w-6 sm:h-6"} text-[#0F2E53]`} />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-white">Answer Call</span>
          </a>

          {/* Email Action */}
          <a
            href="mailto:sales@alghwasa.com"
            className="flex flex-col items-center gap-1 group"
          >
            <div
              className={`rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 ${
                isCompact ? "w-10 h-10 sm:w-11 sm:h-11" : "w-11 h-11 sm:w-12 sm:h-12"
              }`}
            >
              <Mail className={`${isCompact ? "w-4 h-4" : "w-4.5 h-4.5 sm:w-5 sm:h-5"}`} />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-white/80">Email</span>
          </a>
        </div>

        {/* Back to Browse Device Link */}
        <div className="text-center pt-0.5 sm:pt-1">
          <button
            type="button"
            onClick={onReopen}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] sm:text-[11px] font-bold text-white border border-white/20 shadow-xs hover:bg-white hover:text-[#0F2E53] transition-all cursor-pointer backdrop-blur-xs"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Re-open Foldable Device</span>
          </button>
        </div>
      </div>
    </div>
  );
}

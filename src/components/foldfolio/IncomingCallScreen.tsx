"use client";

import { Phone, Mail, MessageSquare, RotateCcw } from "lucide-react";
import Image from "next/image";

interface IncomingCallScreenProps {
  onReopen: () => void;
}

export function IncomingCallScreen({ onReopen }: IncomingCallScreenProps) {
  return (
    <div className="relative w-full h-full bg-[#FAFAFC] text-[#0F2E53] flex flex-col justify-between p-6 select-none overflow-hidden rounded-[34px]">
      {/* Ambient Pulsing Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0F2E53]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Top Header */}
      <div className="pt-3 text-center z-20">
        <span className="inline-block rounded-full bg-[#0F2E53]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0F2E53]">
          Engineering Consultation Desk
        </span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-[#0F2E53] mt-2 font-sans">
          AL GHWASA
        </h2>
        <p className="text-xs font-semibold text-[#0F2E53]/75 mt-0.5 tracking-wide">
          Industrial Safety &amp; Explosion Protection · Dubai
        </p>
        <p className="text-[11px] font-bold text-[#0F2E53]/60 mt-0.5">
          +971 52 247 1439 · Ex-Stock UAE &amp; Middle East
        </p>
      </div>

      {/* Center Caller Avatar with Concentric Pulse Rings */}
      <div className="relative z-20 flex flex-col items-center justify-center my-auto">
        <div className="relative flex items-center justify-center">
          {/* Animated concentric audio rings */}
          <div className="absolute w-36 h-36 rounded-full border border-[#0F2E53]/15 animate-ping opacity-40 pointer-events-none" />
          <div className="absolute w-28 h-28 rounded-full border border-[#0F2E53]/25 animate-pulse pointer-events-none" />

          {/* Caller Photo */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-xl ring-2 ring-[#0F2E53]/20">
            <Image
              src="/images/hero-portrait.png"
              alt="Al Ghwasa Safety Specialist"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#0F2E53] animate-pulse">
          Incoming Call...
        </p>
        <p className="text-[11px] text-[#0F2E53]/70 mt-0.5">
          Technical specialist ready to assist with ATEX &amp; Safety quotes
        </p>
      </div>

      {/* Bottom Action Controls */}
      <div className="relative z-20 space-y-3 pb-2">
        <div className="flex items-center justify-center gap-6">
          {/* WhatsApp Direct Action */}
          <a
            href="https://wa.me/971522471439"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-[#0F2E53]/80">WhatsApp</span>
          </a>

          {/* Direct Phone Call Action */}
          <a
            href="tel:+971522471439"
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-14 h-14 rounded-full bg-[#0F2E53] hover:bg-[#091D36] text-white flex items-center justify-center shadow-xl transition-transform group-hover:scale-105 animate-bounce">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-[#0F2E53]">Answer Call</span>
          </a>

          {/* Email Action (Replaced Decline) */}
          <a
            href="mailto:sales@alghwasa.com"
            className="flex flex-col items-center gap-1 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#164377] hover:bg-[#0F2E53] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-[#0F2E53]/80">Email</span>
          </a>
        </div>

        {/* Back to Browse Device Link */}
        <div className="text-center pt-1">
          <button
            type="button"
            onClick={onReopen}
            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0F2E53] hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Re-open Foldable Device</span>
          </button>
        </div>
      </div>
    </div>
  );
}

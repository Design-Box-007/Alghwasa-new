"use client";

import { BackdropId } from "@/lib/config/design-tokens";

interface TopNavigationProps {
  backdrop: BackdropId;
  onBackdropChange: (backdrop: BackdropId) => void;
}

export function TopNavigation({ backdrop, onBackdropChange }: TopNavigationProps) {
  const options: BackdropId[] = ["basic", "glow", "orbit"];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 px-6 sm:px-10 flex items-center justify-between z-50 pointer-events-none select-none">
      {/* Brand Logo matching reference positioning in AL GHWASA primary blue */}
      <div className="pointer-events-auto">
        <span className="text-sm font-black tracking-tight uppercase text-[#0F2E53] font-sans">
          AL GHWASA<sup className="text-[9px] ml-0.5 font-bold text-[#0F2E53]">®</sup>
        </span>
      </div>

      {/* Backdrop Switcher Pill matching reference, in AL GHWASA primary blue & white */}
      <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-md p-1 border border-[#0F2E53]/15 shadow-sm">
        {options.map((opt) => {
          const isActive = backdrop === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onBackdropChange(opt)}
              className={`rounded-full px-3.5 py-1 text-[11px] font-semibold capitalize transition-all duration-200 ${
                isActive
                  ? "bg-[#0F2E53] text-white shadow-xs"
                  : "text-[#0F2E53]/70 hover:text-[#0F2E53]"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </header>
  );
}

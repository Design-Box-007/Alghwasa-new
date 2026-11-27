"use client";

import { useRef, useEffect } from "react";
import { MotionValue } from "motion/react";
import { AboutSection } from "@/components/sections/AboutSection";

interface InternalDeviceWebsiteProps {
  motionProgress?: MotionValue<number>;
  scrollProgress?: number;
  onNavigateToSection?: (sectionId: string, ratio: number) => void;
}

export function InternalDeviceWebsite({
  motionProgress,
  scrollProgress,
  onNavigateToSection: _onNavigateToSection,
}: InternalDeviceWebsiteProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // SYNC SCROLL: Update container.scrollTop when window scroll progress changes
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    const applyScroll = (progress: number) => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll > 0) {
        container.scrollTop = progress * maxScroll;
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
  }, [motionProgress, scrollProgress]);

  return (
    <div className="relative w-full h-full bg-[#0F2E53] text-white flex flex-col overflow-hidden select-text">
      {/* 1. TOP STATUS BAR (Device Header in Signature Blue) */}
      <div className="shrink-0 h-9 px-6 flex items-center justify-between border-b border-white/10 bg-[#0F2E53] z-30 select-none text-white">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-tight text-white">
            09:41
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200 hidden sm:inline">
            Dubai HQ Online
          </span>
        </div>

        <div className="flex items-center gap-3 text-white">
          <span className="text-[11px] font-bold tracking-wider text-blue-200">5G</span>
          {/* Battery Icon */}
          <div className="flex items-center gap-0.5">
            <div className="w-5 h-2.5 rounded-sm border border-white/80 p-0.5 flex items-center">
              <div className="h-full w-full bg-white rounded-xs" />
            </div>
            <div className="w-0.5 h-1 bg-white/80 rounded-r-xs" />
          </div>
        </div>
      </div>

      {/* 2. INNER SCROLLABLE CANVAS: Renders AboutSection */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden relative p-0 bg-[#0F2E53] [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <AboutSection id="internal-about" />
      </div>
    </div>
  );
}

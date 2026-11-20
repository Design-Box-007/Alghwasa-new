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

  // 1. SYNC SCROLL: Directly update container.scrollTop from motionProgress or scrollProgress
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

  // 2. NATIVE WHEEL FORWARDING:
  // Forward wheel events over the phone directly to the window scroll runway
  // so scrolling over the device naturally drives the presentation timeline
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onNativeWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
    };

    el.addEventListener("wheel", onNativeWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onNativeWheel);
    };
  }, []);

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

      {/* 2. INNER SCROLLABLE CANVAS: Renders ONLY AboutSection */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden relative p-0 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <AboutSection id="internal-about" />
      </div>
    </div>
  );
}

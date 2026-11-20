"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useDeviceCustomization } from "@/hooks/useDeviceCustomization";
import { FOLDFOLIO_CONFIG } from "@/lib/animations/fold-config";
import { FinishDock } from "./FinishDock";
import { FoldableDevice3D } from "../device/FoldableDevice3D";

interface AboutFoldableSectionProps {
  id?: string;
  className?: string;
}

export function AboutFoldableSection({
  id = "about",
  className = "",
}: AboutFoldableSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { finish, backdrop, changeFinish } = useDeviceCustomization();
  const cfg = FOLDFOLIO_CONFIG;

  // Viewport tracking for dynamic responsive auto-scaling
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });

  useEffect(() => {
    const updateDimensions = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions, { passive: true });
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const isPortraitMode =
    viewport.width < cfg.portrait.portraitBelow ||
    viewport.width / viewport.height < cfg.portrait.aspectRatioThreshold;

  // Track window scroll progress exclusively across this section's runway
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics modeling Framer EMA lerp (smoothing: 0.12)
  const smoothProgress = useSpring(scrollYProgress, cfg.motion.spring);

  // Phase 1: Unfolding occurs in [0.00, 0.22]
  const unfoldProgress = useTransform(smoothProgress, [0.00, 0.22], [0, 1]);
  const a = useTransform(unfoldProgress, (v) => Math.max(0, Math.min(1, v)));

  // Phase 2: About Content Browsing occurs in [0.22, 0.78]
  const innerProgress = useTransform(smoothProgress, [0.22, 0.78], [0, 1]);

  // Phase 3: Closing into consultation desk occurs in [0.78, 0.96]
  const closeProgress = useTransform(smoothProgress, [0.78, 0.96], [0, 1]);
  const o = useTransform(closeProgress, (v) => Math.max(0, Math.min(1, v)));

  // c: 0 (closed) -> 1 (open) -> 0 (closed)
  const c = useTransform([a, o], ([latestA, latestO]) => {
    const valA = latestA as number;
    const valO = latestO as number;
    // Cubic ease-in-out
    const easeA = valA < 0.5 ? 4 * valA * valA * valA : 1 - Math.pow(-2 * valA + 2, 3) / 2;
    const easeO = valO < 0.5 ? 4 * valO * valO * valO : 1 - Math.pow(-2 * valO + 2, 3) / 2;
    return easeA * (1 - easeO);
  });

  // u: 1 (closed) -> 0 (open) -> 1 (closed)
  const u = useTransform(c, (latestC) => 1 - latestC);

  // Dynamic scale matching FoldableDevice3D
  const currentScale = useMemo(() => {
    if (isPortraitMode) {
      const se = viewport.width * 0.88;
      const oe = Math.max(200, viewport.height - 140);
      return Math.min(se / cfg.portrait.W, oe / cfg.portrait.H, 0.95);
    } else {
      const maxScaleLandscape =
        viewport.width >= 1920 ? 0.84 :
        viewport.width >= 1440 ? 0.80 :
        viewport.width >= 1200 ? 0.76 :
        viewport.width >= 1024 ? 0.72 :
        0.65;
      const se = viewport.width * 0.90;
      const oe = Math.max(200, viewport.height - 140);
      return Math.min(se / cfg.landscape.W, oe / cfg.landscape.H, maxScaleLandscape);
    }
  }, [isPortraitMode, viewport.width, viewport.height, cfg.portrait, cfg.landscape]);

  // Desktop phone half-width for background text offset
  const phoneHalfW = (cfg.landscape.halfW * currentScale) / 2;
  const desktopBaseOffset = Math.round(phoneHalfW - 20);

  // Mobile clamshell half-height for background text offset
  const phoneHalfH = (cfg.portrait.halfH * currentScale) / 2;
  const mobileVerticalGap = Math.round(phoneHalfH + 16);

  // Background typography simultaneous outward movement
  const desktopTextSeparation = useTransform(c, (valC) => {
    const qe = 1 - Math.pow(1 - valC, 3); // cubic ease-out
    const v = viewport.width;
    const y = cfg.landscape.W * currentScale;
    const maxSep = Math.min(v * 0.20 + y / 4, v * 0.30);
    return maxSep * qe;
  });

  const mobileHorizontalSeparation = useTransform(c, (valC) => {
    const qe = 1 - Math.pow(1 - valC, 3);
    const v = viewport.width;
    return v * 0.75 * qe;
  });

  const bgTextOpacity = useTransform(c, (valC) => +(1 - valC * 0.9).toFixed(3));

  const alTranslateX = useTransform(desktopTextSeparation, (d) => -(desktopBaseOffset + d));
  const ghwasaTranslateX = useTransform(desktopTextSeparation, (d) => desktopBaseOffset + d);

  const mobileAlTranslateX = useTransform(mobileHorizontalSeparation, (d) => -d);
  const mobileGhwasaTranslateX = useTransform(mobileHorizontalSeparation, (d) => d);

  // Open & Reopen handlers scoped to section runway
  const handleOpenClick = () => {
    if (!sectionRef.current) return;
    const totalScroll = sectionRef.current.scrollHeight - window.innerHeight;
    const targetScrollY = sectionRef.current.offsetTop + 0.24 * totalScroll;
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handleReopenClick = () => {
    if (!sectionRef.current) return;
    const totalScroll = sectionRef.current.scrollHeight - window.innerHeight;
    const targetScrollY = sectionRef.current.offsetTop + 0.24 * totalScroll;
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handleNavigateToSection = (_sectionId: string, _ratio: number) => {
    // Inside About device, user stays in About
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full min-h-[300vh] bg-white text-[#0F2E53] ${className}`}
    >
      {/* STICKY PRESENTATION STAGE: Pins at viewport top while scrolling through About */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* 1. DYNAMIC STUDIO BACKDROP LAYER */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 bg-[#FFFFFF]">
          {backdrop === "glow" && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[840px] h-[840px] rounded-full bg-gradient-to-tr from-[#0F2E53]/15 via-[#164377]/10 to-transparent blur-[140px] transition-all duration-700" />
          )}

          {backdrop === "orbit" && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[940px] h-[940px] pointer-events-none">
              <div className="absolute inset-0 rounded-full border border-[#0F2E53]/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-24 rounded-full border border-dashed border-[#0F2E53]/10 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-48 rounded-full border border-[#0F2E53]/08 animate-[spin_80s_linear_infinite]" />
            </div>
          )}

          {/* Desktop Hero Oversized Typography ("AL" on left, "GHWASA" on right) */}
          <motion.div
            style={{ opacity: bgTextOpacity }}
            className={`${!isPortraitMode ? "flex" : "hidden"} absolute inset-0 items-center justify-center pointer-events-none select-none z-10 overflow-hidden`}
          >
            <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
              <motion.div
                style={{
                  x: alTranslateX,
                  right: "50%",
                  transformOrigin: "100% 50%",
                }}
                className="absolute top-1/2 -translate-y-1/2 text-right pointer-events-none"
              >
                <h1 className="font-display-hero text-[clamp(4.5rem,8.8vw,11.5rem)] font-black tracking-tight text-[#0F2E53] leading-[0.88] uppercase select-none block whitespace-nowrap">
                  AL
                </h1>
              </motion.div>

              <motion.div
                style={{
                  x: ghwasaTranslateX,
                  left: "50%",
                  transformOrigin: "0% 50%",
                }}
                className="absolute top-1/2 -translate-y-1/2 text-left pointer-events-none"
              >
                <h1 className="font-display-hero text-[clamp(4.5rem,8.8vw,11.5rem)] font-black tracking-tight text-[#0F2E53] leading-[0.88] uppercase select-none block whitespace-nowrap">
                  GHWASA
                </h1>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Hero Oversized Typography ("AL" top, "GHWASA" bottom) */}
          <motion.div
            style={{ opacity: bgTextOpacity }}
            className={`${isPortraitMode ? "flex" : "hidden"} absolute inset-0 items-center justify-center pointer-events-none select-none z-10 overflow-hidden`}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">
              <motion.div
                style={{
                  bottom: `calc(50% + ${mobileVerticalGap}px)`,
                  x: mobileAlTranslateX,
                  transformOrigin: "50% 100%",
                }}
                className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none"
              >
                <h1 className="font-display-hero text-[clamp(3.4rem,13vw,4.8rem)] font-black tracking-tight text-[#0F2E53] leading-none uppercase select-none block whitespace-nowrap">
                  AL
                </h1>
              </motion.div>

              <motion.div
                style={{
                  top: `calc(50% + ${mobileVerticalGap}px)`,
                  x: mobileGhwasaTranslateX,
                  transformOrigin: "50% 0%",
                }}
                className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none"
              >
                <h1 className="font-display-hero text-[clamp(3.4rem,13vw,4.8rem)] font-black tracking-tight text-[#0F2E53] leading-none uppercase select-none block whitespace-nowrap">
                  GHWASA
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 2. AUTHENTIC 3D FOLDABLE DEVICE (Shows ONLY AboutSection inside) */}
        <div className="relative flex items-center justify-center pointer-events-auto z-20">
          <FoldableDevice3D
            finish={finish}
            c={c}
            u={u}
            innerProgress={innerProgress}
            o={o}
            viewport={viewport}
            isPortraitMode={isPortraitMode}
            onNavigateToSection={handleNavigateToSection}
            onOpenClick={handleOpenClick}
            onReopenClick={handleReopenClick}
          />
        </div>

        {/* 3. COMPACT FINISH SELECTOR DOCK: Anchored cleanly at bottom center */}
        <div className="absolute bottom-6 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-auto">
          <FinishDock finish={finish} onFinishChange={changeFinish} />
        </div>

      </div>
    </section>
  );
}

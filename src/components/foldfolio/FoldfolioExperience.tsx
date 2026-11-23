"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useDeviceCustomization } from "@/hooks/useDeviceCustomization";
import { FOLDFOLIO_CONFIG } from "@/lib/animations/fold-config";
import { TopNavigation } from "./TopNavigation";
import { FoldableDevice3D } from "../device/FoldableDevice3D";

export function FoldfolioExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { finish, backdrop, changeBackdrop } = useDeviceCustomization();
  const cfg = FOLDFOLIO_CONFIG;

  // Window dimension tracking for dynamic responsive auto-scaling
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

  // Track window scroll progress across presentation runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics modeling Framer EMA lerp (smoothing: 0.12)
  const smoothProgress = useSpring(scrollYProgress, cfg.motion.spring);

  // Unfolding occurs in [0.00, 0.18]
  const unfoldProgress = useTransform(smoothProgress, [0.00, 0.18], [0, 1]);
  const a = useTransform(unfoldProgress, (v) => Math.max(0, Math.min(1, v)));

  // Website Browsing occurs in [0.18, 0.86]
  const innerProgress = useTransform(smoothProgress, [0.18, 0.86], [0, 1]);

  // Closing into consultation desk occurs in [0.86, 0.96]
  const closeProgress = useTransform(smoothProgress, [0.86, 0.96], [0, 1]);
  const o = useTransform(closeProgress, (v) => Math.max(0, Math.min(1, v)));

  // c: 0 (closed) -> 1 (open) -> 0 (closed)
  const c = useTransform([a, o], ([latestA, latestO]) => {
    const valA = latestA as number;
    const valO = latestO as number;
    // Cubic ease-in-out Ke(a) * (1 - Ke(o))
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

  // Desktop phone half-width (closed phone is 500 * currentScale, half is 250 * currentScale)
  // At scale 0.70, half-width is 175px. With 20px overlap behind the phone frame: 175 - 20 = 155px.
  const phoneHalfW = (cfg.landscape.halfW * currentScale) / 2;
  const desktopBaseOffset = Math.round(phoneHalfW - 20);

  // Mobile clamshell half-height (closed clamshell is 370 * currentScale, half is 185 * currentScale)
  const phoneHalfH = (cfg.portrait.halfH * currentScale) / 2;
  // Gap between the clamshell phone and typography above/below: 16px
  const mobileVerticalGap = Math.round(phoneHalfH + 16);

  // Background typography simultaneous outward movement
  // Desktop: AL moves smoothly left, GHWASA moves smoothly right
  // Framer formula: d = (v * 0.20 + y / 4) * qe(c)
  const desktopTextSeparation = useTransform(c, (valC) => {
    const qe = 1 - Math.pow(1 - valC, 3); // cubic ease-out
    const v = viewport.width;
    const y = cfg.landscape.W * currentScale;
    const maxSep = Math.min(v * 0.20 + y / 4, v * 0.30);
    return maxSep * qe;
  });

  // Mobile: AL moves HORIZONTALLY to the LEFT (-d), GHWASA moves HORIZONTALLY to the RIGHT (+d)
  // Preserves initial vertical placement above/below the phone (Section 3 of User Prompt)
  const mobileHorizontalSeparation = useTransform(c, (valC) => {
    const qe = 1 - Math.pow(1 - valC, 3); // cubic ease-out
    const v = viewport.width;
    return v * 0.75 * qe;
  });

  // Background typography opacity fades via 1 - 0.9*c (1.0 when closed -> 0.10 when open)
  const bgTextOpacity = useTransform(c, (valC) => +(1 - valC * 0.9).toFixed(3));

  const alTranslateX = useTransform(desktopTextSeparation, (d) => -(desktopBaseOffset + d));
  const ghwasaTranslateX = useTransform(desktopTextSeparation, (d) => desktopBaseOffset + d);

  const mobileAlTranslateX = useTransform(mobileHorizontalSeparation, (d) => -d);
  const mobileGhwasaTranslateX = useTransform(mobileHorizontalSeparation, (d) => d);

  // Navigation and button click handlers
  const handleNavigateToSection = (_sectionId: string, ratio: number) => {
    if (!containerRef.current) return;
    const targetProgress = 0.18 + ratio * (0.86 - 0.18);
    const totalScroll = containerRef.current.scrollHeight - window.innerHeight;
    const targetScrollY = containerRef.current.offsetTop + targetProgress * totalScroll;
    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handleOpenClick = () => {
    if (!containerRef.current) return;
    const totalScroll = containerRef.current.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: containerRef.current.offsetTop + 0.18 * totalScroll,
      behavior: "smooth",
    });
  };

  const handleReopenClick = () => {
    if (!containerRef.current) return;
    const totalScroll = containerRef.current.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: containerRef.current.offsetTop + 0.18 * totalScroll,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[580vh] w-full bg-[#FFFFFF] text-[#0F2E53] transition-colors duration-500 overflow-x-hidden"
    >
      {/* 1. TOP HEADER: AL GHWASA® (Left) + Backdrop Switcher (Right) */}
      <TopNavigation backdrop={backdrop} onBackdropChange={changeBackdrop} />

      {/* 2. DYNAMIC STUDIO BACKDROP LAYER */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 bg-[#FFFFFF]">
        {/* Glow backdrop mode: Navy blue atmospheric lighting */}
        {backdrop === "glow" && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[840px] h-[840px] rounded-full bg-gradient-to-tr from-[#0F2E53]/15 via-[#164377]/10 to-transparent blur-[140px] transition-all duration-700" />
        )}

        {/* Orbit backdrop mode: Geometric precision rings */}
        {backdrop === "orbit" && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[940px] h-[940px] pointer-events-none">
            <div className="absolute inset-0 rounded-full border border-[#0F2E53]/10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-24 rounded-full border border-dashed border-[#0F2E53]/10 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-48 rounded-full border border-[#0F2E53]/08 animate-[spin_80s_linear_infinite]" />
          </div>
        )}

        {/* 
          A. DESKTOP HERO OVERSIZED TYPOGRAPHY (MATCHES IMAGE 3 & 1 WITH AL GHWASA BRAND)
          "AL" on the left of closed phone, "GHWASA" on the right of closed phone.
          Rendered in primary brand blue #0F2E53.
          Both text elements sit BEHIND the device (z-index: 10 vs device z-index: 20).
          When scrolling starts, AL immediately glides left, GHWASA immediately glides right!
        */}
        <motion.div
          style={{ opacity: bgTextOpacity }}
          className={`${!isPortraitMode ? "flex" : "hidden"
            } absolute inset-0 items-center justify-center pointer-events-none select-none z-10 overflow-hidden`}
        >
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            {/* Left Typography: "AL" - Matching size and visual weight with right side */}
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

            {/* Right Typography: "GHWASA" - Matching size and visual weight with left side */}
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

        {/* 
          B. MOBILE HERO OVERSIZED TYPOGRAPHY (MATCHES IMAGE 4)
          Initial state:
          - "AL" is centered horizontally ABOVE the closed phone.
          - "GHWASA" is centered horizontally BELOW the closed phone.
          - The phone is centered between both words.
          During scrolling:
          - "AL" moves HORIZONTALLY to the LEFT (x: -d).
          - "GHWASA" moves HORIZONTALLY to the RIGHT (x: +d).
          - Zero vertical movement (preserving initial vertical placement).
          - Opacity fades via bgTextOpacity (1 - 0.9*c).
        */}
        <motion.div
          style={{ opacity: bgTextOpacity }}
          className={`${isPortraitMode ? "flex" : "hidden"
            } absolute inset-0 items-center justify-center pointer-events-none select-none z-10 overflow-hidden`}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">
            {/* Top Typography: "AL" - Centered above phone, glides left during scroll */}
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

            {/* Bottom Typography: "GHWASA" - Centered below phone, glides right during scroll */}
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

      {/* 3. VIEWPORT-FIXED PRESENTATION STAGE: 100% FIXED AT EXACT SCREEN CENTER */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center pointer-events-none z-20">
        {/* Authentic 3D Foldable Mobile Device */}
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
    </div>
  );
}

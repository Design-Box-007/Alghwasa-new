"use client";

import { useMemo } from "react";
import { motion, MotionValue, useTransform } from "motion/react";
import { DeviceFinishId, DEVICE_FINISHES } from "@/lib/config/design-tokens";
import { FOLDFOLIO_CONFIG } from "@/lib/animations/fold-config";
import { CoverScreen } from "../foldfolio/CoverScreen";
import { InternalDeviceWebsite } from "../foldfolio/InternalDeviceWebsite";
import { IncomingCallScreen } from "../foldfolio/IncomingCallScreen";

interface FoldableDevice3DProps {
  finish: DeviceFinishId;
  c: MotionValue<number>;
  u: MotionValue<number>;
  innerProgress: MotionValue<number>;
  o: MotionValue<number>;
  viewport: { width: number; height: number };
  isPortraitMode: boolean;
  onNavigateToSection: (sectionId: string, ratio: number) => void;
  onOpenClick: () => void;
  onReopenClick: () => void;
}

export function FoldableDevice3D({
  finish,
  c,
  u,
  innerProgress,
  o,
  viewport,
  isPortraitMode,
  onNavigateToSection,
  onOpenClick,
  onReopenClick,
}: FoldableDevice3DProps) {
  const currentFinish = DEVICE_FINISHES[finish];
  const cfg = FOLDFOLIO_CONFIG;

  // =========================================================================
  // 1. DYNAMIC AUTO-SCALE FACTOR (z)
  // Ensures unscaled hardware dimensions (1000x684 landscape / 380x740 portrait)
  // scale proportionally to match any viewport cleanly (default desktop ~0.70)
  // =========================================================================
  const scaleZ = useMemo(() => {
    if (isPortraitMode) {
      const se = viewport.width * 0.88;
      const oe = Math.max(200, viewport.height - 140);
      return Math.min(se / cfg.portrait.W, oe / cfg.portrait.H, 0.95);
    } else {
      // Desktop Reference Standard: increased for large devices (both folded & unfolded)
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

  // =========================================================================
  // 2. KINEMATIC ANGLES & CENTER COMPENSATION
  // =========================================================================
  // Physical 3D fold angle in degrees: d = 180 * u
  // Closed state: u = 1.0 -> d = 180deg
  // Fully open state: u = 0.0 -> d = 0deg
  const foldAngle = useTransform(u, (valU) => valU * 180);

  // Landscape Fixed-Center Compensation: translate(-u * W / 4, 0)
  // At u = 1 (closed), shifts the container by -W/4 (-250px unscaled)
  // Since U.cover is at left: 500px, shifting by -250px places the closed 500px phone
  // exactly between -250px and +250px relative to stage center -> 100% DEAD CENTER!
  // At u = 0 (open), shift is 0px -> 1000px wide opened phone spans -500px to +500px -> 100% DEAD CENTER!
  const desktopCompensationX = useTransform(u, (valU) => -valU * (cfg.landscape.W / 4));

  // Portrait Fixed-Center Compensation: translate(0, -u * H / 4)
  const mobileCompensationY = useTransform(u, (valU) => -valU * (cfg.portrait.H / 4));

  // Ground drop shadows compensation: tracks the visible base footprint
  const desktopShadowShiftX = useTransform(u, (valU) => (cfg.landscape.W / 4) * valU);
  const shadowScaleX = useTransform(c, (valC) => 0.5 + 0.5 * valC);

  // =========================================================================
  // 3. VISIBILITY & PANEL ROTATIONS (EXACT REFERENCE MATHEMATICAL MODEL)
  // =========================================================================
  // In the reference engine (mod-shared-lib.BXNwuamL.mjs:27400):
  // 1. Right Wing (U.rightH): visibility = d > 176 ? 'hidden' : 'visible'
  //    -> IN CLOSED STATE (d = 180deg), THE RIGHT PANEL IS COMPLETELY HIDDEN!
  // 2. Cover Screen (U.cover): visibility = d < 90 ? 'hidden' : 'visible'
  //    -> IN CLOSED STATE (d >= 90deg), THE COVER SCREEN IS VISIBLE!
  // 3. Left Leaf (U.leaf): visibility = d < 90 ? 'visible' : 'hidden'
  //    -> IN CLOSED STATE (d >= 90deg), THE INNER LEFT LEAF IS HIDDEN!
  const rightWingVisibility = useTransform(foldAngle, (deg) => (deg > 176 ? "hidden" : "visible"));
  const rightWingOpacity = useTransform(foldAngle, (deg) => (deg > 176 ? 0 : 1));

  const isCoverActive = useTransform(foldAngle, (deg) => deg >= 90);
  const coverVisibility = useTransform(isCoverActive, (active) => (active ? "visible" : "hidden"));
  const coverOpacity = useTransform(isCoverActive, (active) => (active ? 1 : 0));

  const leafVisibility = useTransform(isCoverActive, (active) => (active ? "hidden" : "visible"));
  const leafOpacity = useTransform(isCoverActive, (active) => (active ? 0 : 1));

  // Panel Rotations:
  // Left leaf rotates along Y-axis from 90deg down to 0deg (flat)
  const leafRotateY = useTransform(foldAngle, (deg) => `perspective(2800px) rotateY(${deg.toFixed(3)}deg)`);

  // Cover screen sits at left: 500px, transformOrigin: 0% 50% (at the hinge seam x = 500px)
  // Rotates by (d - 180)deg.
  // When closed (d = 180deg): (180 - 180) = 0deg -> Cover sits completely flat!
  // When opening (d: 180 -> 90): (d - 180) swings from 0deg to -90deg (opens outward toward left)
  const coverRotateY = useTransform(foldAngle, (deg) => {
    if (deg > 179.8) return "none";
    return `perspective(2800px) rotateY(${(deg - 180).toFixed(3)}deg)`;
  });

  // Mobile Clamshell Rotations:
  const mobileLeafRotateX = useTransform(foldAngle, (deg) => `perspective(2800px) rotateX(${(-deg).toFixed(3)}deg)`);
  const mobileCoverRotateX = useTransform(foldAngle, (deg) => {
    if (deg > 179.8) return "none";
    return `perspective(2800px) rotateX(${(180 - deg).toFixed(3)}deg)`;
  });

  // =========================================================================
  // 4. DYNAMIC FOUR-CORNER CURVATURE MORPHING
  // =========================================================================
  // When closed (d >= 90deg): All four outer corners are rounded (46px landscape, 42px portrait)
  // When open (d < 90deg): Inner hinge corners transition to 0px so screens meet flush
  const rightWingRadius = useTransform(isCoverActive, (closed) =>
    closed ? "46px 46px 46px 46px" : "0px 46px 46px 0px"
  );
  const leftWingRadius = useTransform(isCoverActive, (closed) =>
    closed ? "46px 46px 46px 46px" : "46px 0px 0px 46px"
  );
  const mobileBottomRadius = useTransform(isCoverActive, (closed) =>
    closed ? "42px 42px 42px 42px" : "0px 0px 42px 42px"
  );
  const mobileTopLeafRadius = useTransform(isCoverActive, (closed) =>
    closed ? "42px 42px 42px 42px" : "42px 42px 0px 0px"
  );

  // =========================================================================
  // 5. UNIFIED SCREEN VS 3D FOLDING PANELS SEAMLESS HANDOFF
  // =========================================================================
  // When fully unfolded / browsing (u < 0.04, fold angle < 8°):
  // Renders ONE unified continuous pure white (#FFFFFF) screen viewport with
  // ONE shared coordinate system. Completely eliminates center seams, gaps,
  // dividers, shadows, and dual-state desync.
  // When folding starts (u >= 0.04):
  // Seamlessly hands off to the 3D rotating panels and physical hinge mechanics.
  const isFullyOpen = useTransform(u, (valU) => valU < 0.04);
  const unifiedScreenOpacity = useTransform(u, [0, 0.05], [1, 0]);
  const foldingPanelsOpacity = useTransform(u, [0, 0.05], [0, 1]);

  // Dynamic light shading overlays (strictly 0 when flat / unfolded)
  const leafShadowOpacity = useTransform(foldAngle, (deg) => {
    if (deg >= 90 || deg < 2) return 0;
    const m = deg / 90;
    return Math.pow(m, 1.6) * 0.8;
  });

  const coverShadowOpacity = useTransform(foldAngle, (deg) => {
    if (deg < 90) return 0;
    const m = deg / 90;
    return Math.pow(2 - m, 1.6) * 0.7;
  });

  // Incoming Call Overlay inside Cover Screen at end of scroll runway
  // Framer reference formula: let e = K((o - .02) * 6, 0, 1)
  const callOverlayOpacity = useTransform(o, (valO) => Math.max(0, Math.min(1, (valO - 0.02) * 6)));
  const lockScreenOpacity = useTransform(callOverlayOpacity, (val) => 1 - val);
  const isCallActive = useTransform(callOverlayOpacity, (val) => val > 0.5);

  return (
    <div className="relative flex items-center justify-center pointer-events-none select-none">
      {/* 
        ======================================================================
        A. DESKTOP LANDSCAPE VIEWPORT (Authentic Foldfolio Geometry)
        Unscaled dimensions: 1000px × 684px. Scaled dynamically via scaleZ.
        ======================================================================
      */}
      <div className={`${!isPortraitMode ? "flex" : "hidden"} relative items-center justify-center`}>
        {/* Ground Drop Shadows under device */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <motion.div
            style={{
              x: desktopShadowShiftX,
              scaleX: shadowScaleX,
              scale: scaleZ,
              width: `${cfg.landscape.W * 1.05}px`,
              height: `${cfg.landscape.H * 0.09}px`,
              marginTop: `${cfg.landscape.H * 0.52}px`,
            }}
            className="rounded-full bg-[radial-gradient(closest-side,rgba(15,46,83,0.18),rgba(15,46,83,0.06)_50%,transparent)] blur-[2px]"
          />
          <motion.div
            style={{
              x: desktopShadowShiftX,
              scaleX: shadowScaleX,
              scale: scaleZ,
              width: `${cfg.landscape.W * 0.86}px`,
              height: `${cfg.landscape.H * 0.03}px`,
              marginTop: `${cfg.landscape.H * 0.48}px`,
            }}
            className="rounded-full bg-[radial-gradient(closest-side,rgba(15,46,83,0.24),rgba(15,46,83,0.08)_55%,transparent)] blur-[1px]"
          />
        </div>

        {/* 
          Main Rigid Device Container (U.dev)
          Outer wrapper scales cleanly around center; inner container compensates x = -u * W / 4
        */}
        <motion.div
          style={{
            scale: scaleZ,
            transformOrigin: "50% 50%",
          }}
          className="relative pointer-events-auto flex items-center justify-center"
        >
          <motion.div
            style={{
              width: `${cfg.landscape.W}px`,
              height: `${cfg.landscape.H}px`,
              x: desktopCompensationX,
              transformStyle: "preserve-3d",
            }}
            className="relative pointer-events-auto"
          >
          {/* 
            ==================================================================
            A. UNIFIED CONTINUOUS SCREEN (ACTIVE WHEN FULLY OPEN: u < 0.005)
            Fulfills exact requirements:
            - ONE continuous website content container (no split coordinate systems)
            - Pure white #FFFFFF display from left edge to right edge
            - Zero vertical divider, zero gap, zero shadow, zero center seam
            - Exact matching 976px × 660px display with 34px rounded corners
            ==================================================================
          */}
          <motion.div
            style={{
              width: `${cfg.landscape.W}px`,
              height: `${cfg.landscape.H}px`,
              opacity: unifiedScreenOpacity,
              pointerEvents: useTransform(isFullyOpen, (open) => (open ? "auto" : "none")),
            }}
            className="absolute inset-0 z-20 overflow-hidden"
          >
            <div
              style={{
                borderRadius: "46px",
                background: currentFinish.frameGradient,
                boxShadow: currentFinish.boxShadow,
              }}
              className="absolute inset-0 p-[4px] overflow-hidden"
            >
              <div
                style={{
                  borderRadius: "38px",
                }}
                className="relative w-full h-full bg-[#081B33] p-[8px] overflow-hidden"
              >
                <div
                  style={{
                    borderRadius: "34px",
                  }}
                  className="relative w-full h-full bg-white overflow-hidden shadow-inner"
                >
                  <InternalDeviceWebsite
                    motionProgress={innerProgress}
                    onNavigateToSection={onNavigateToSection}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 
            ==================================================================
            B. 3D FOLDING PANELS & KINEMATICS (ACTIVE WHILE FOLDING: u >= 0.005)
            Preserves authentic 3D mechanical fold kinematics, cover screen,
            and final incoming call consultation desk.
            ==================================================================
          */}
          <motion.div
            style={{
              opacity: foldingPanelsOpacity,
              pointerEvents: useTransform(isFullyOpen, (open) => (open ? "none" : "auto")),
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0"
          >
            {/* 
              1. RIGHT PANEL (U.rightH)
              Positioned at left: 500px, top: 0, width: 500px, height: 684px.
              CRITICAL REFERENCE RULE:
              When closed (foldAngle > 176deg), U.rightH is HIDDEN!
              Only becomes visible once the user starts scrolling to unfold!
              Zero left rim & bezel so screens meet flush at center seam x = 500px.
            */}
            <motion.div
              style={{
                width: `${cfg.landscape.halfW}px`,
                height: `${cfg.landscape.H}px`,
                left: `${cfg.landscape.halfW}px`,
                top: 0,
                borderRadius: rightWingRadius,
                transformOrigin: "0% 50%",
                visibility: rightWingVisibility,
                opacity: rightWingOpacity,
              }}
              className="absolute overflow-hidden transition-[border-radius] duration-200"
            >
              {/* Outer Hardware Rim Chamfer (f = 4px, left rim is 0px) */}
              <motion.div
                style={{
                  borderRadius: rightWingRadius,
                  background: currentFinish.frameGradient,
                  boxShadow: currentFinish.boxShadow,
                  padding: "4px 4px 4px 0px",
                }}
                className="absolute inset-0 overflow-hidden"
              >
                {/* Inner Dark Protective Bezel (bz = 8px, left bezel is 0px) */}
                <div
                  style={{
                    borderRadius: "0px 38px 38px 0px",
                    padding: "8px 8px 8px 0px",
                  }}
                  className="relative w-full h-full bg-[#081B33] overflow-hidden"
                >
                  {/* Active Screen Display (Right half slice: width 488px) */}
                  <div
                    style={{
                      borderRadius: "0px 34px 34px 0px",
                    }}
                    className="relative w-full h-full bg-white overflow-hidden"
                  >
                    <div
                      style={{
                        width: `${cfg.landscape.displayW}px`,
                        height: `${cfg.landscape.displayH}px`,
                        position: "absolute",
                        left: `-${cfg.landscape.displayW / 2}px`,
                        top: 0,
                      }}
                    >
                      <InternalDeviceWebsite
                        motionProgress={innerProgress}
                        onNavigateToSection={onNavigateToSection}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 
              2. ROTATING LEFT LEAF (U.leaf)
              Positioned at left: 0, top: 0, width: 500px, height: 684px.
              Transform origin: 100% 50% (at hinge seam x = 500px).
              CRITICAL REFERENCE RULE:
              Visible ONLY when foldAngle < 90deg (when opening into flat state).
              Hidden when closed (d >= 90deg).
              Zero right rim & bezel so screens meet flush at center seam x = 500px.
            */}
            <motion.div
              style={{
                width: `${cfg.landscape.halfW}px`,
                height: `${cfg.landscape.H}px`,
                left: 0,
                top: 0,
                borderRadius: leftWingRadius,
                transformOrigin: "100% 50%",
                transform: leafRotateY,
                visibility: leafVisibility,
                opacity: leafOpacity,
                backfaceVisibility: "hidden",
              }}
              className="absolute overflow-hidden z-20 transition-[border-radius] duration-200"
            >
              {/* Outer Hardware Rim Chamfer (f = 4px, right rim is 0px) */}
              <motion.div
                style={{
                  borderRadius: leftWingRadius,
                  background: currentFinish.frameGradient,
                  boxShadow: currentFinish.boxShadow,
                  padding: "4px 0px 4px 4px",
                }}
                className="absolute inset-0 overflow-hidden"
              >
                {/* Inner Dark Protective Bezel (bz = 8px, right bezel is 0px) */}
                <div
                  style={{
                    borderRadius: "38px 0px 0px 38px",
                    padding: "8px 0px 8px 8px",
                  }}
                  className="relative w-full h-full bg-[#081B33] overflow-hidden"
                >
                  {/* Active Screen Display (Left half slice: width 488px) */}
                  <div
                    style={{
                      borderRadius: "34px 0px 0px 34px",
                    }}
                    className="relative w-full h-full bg-white overflow-hidden"
                  >
                    <div
                      style={{
                        width: `${cfg.landscape.displayW}px`,
                        height: `${cfg.landscape.displayH}px`,
                        position: "absolute",
                        left: 0,
                        top: 0,
                      }}
                    >
                      <InternalDeviceWebsite
                        motionProgress={innerProgress}
                        onNavigateToSection={onNavigateToSection}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dynamic front leaf shadow overlay */}
              <motion.div
                style={{
                  opacity: leafShadowOpacity,
                  borderRadius: leftWingRadius,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 pointer-events-none z-30"
              />
            </motion.div>

            {/* 
              3. ROTATING COVER SCREEN (U.cover)
              CRITICAL REFERENCE ARCHITECTURE:
              Positioned at left: 500px (zt style in Framer bundle), top: 0, width: 500px, height: 684px.
              Transform origin: 0% 50% (at the hinge seam x = 500px).
              In closed state (d = 180deg):
              - Rotates by (d - 180)deg = 0deg (completely flat!).
              - Container translation is -250px (-W/4).
              - U.cover sits exactly from -250px to +250px relative to stage center -> 100% DEAD CENTER!
              - U.rightH is HIDDEN. U.leaf is HIDDEN.
              - RESULT: ONE COMPACT, PERFECTLY ROUNDED PORTRAIT SMARTPHONE (MATCHING IMAGE 3)!
            */}
            <motion.div
              style={{
                width: `${cfg.landscape.halfW}px`,
                height: `${cfg.landscape.H}px`,
                left: `${cfg.landscape.halfW}px`,
                top: 0,
                borderRadius: "46px",
                transformOrigin: "0% 50%",
                transform: coverRotateY,
                visibility: coverVisibility,
                opacity: coverOpacity,
                backfaceVisibility: "hidden",
              }}
              className="absolute shadow-2xl shadow-[#0F2E53]/20 overflow-hidden z-20"
            >
              {/* Outer Hardware Rim with 4-Corner Radius (R = 46px) */}
              <div
                style={{
                  borderRadius: "46px",
                  background: currentFinish.frameGradient,
                  boxShadow: currentFinish.boxShadow,
                }}
                className="absolute inset-0 p-[4px] overflow-hidden"
              >
                {/* Inner Protective Bezel (bz = 8px) */}
                <div
                  style={{
                    borderRadius: "42px",
                  }}
                  className="relative w-full h-full bg-[#081B33] p-[8px] overflow-hidden"
                >
                  {/* Cover Active Screen (Radius: 34px, all 4 corners smooth) */}
                  <div
                    style={{
                      borderRadius: "34px",
                    }}
                    className="relative w-full h-full bg-white overflow-hidden shadow-inner"
                  >
                    {/* Layer 1: Cover Lock Screen (visible initially, fades out as incoming call appears) */}
                    <motion.div
                      style={{
                        opacity: lockScreenOpacity,
                        pointerEvents: useTransform(isCallActive, (act) => (act ? "none" : "auto")),
                      }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <CoverScreen onUnfold={onOpenClick} isCompact={false} />
                    </motion.div>

                    {/* Layer 2: Incoming Call Screen (Framer U.call: fades in directly inside cover screen as device closes) */}
                    <motion.div
                      style={{
                        opacity: callOverlayOpacity,
                        pointerEvents: useTransform(isCallActive, (act) => (act ? "auto" : "none")),
                      }}
                      className="absolute inset-0 w-full h-full z-10"
                    >
                      <IncomingCallScreen onReopen={onReopenClick} />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Dynamic back cover shadow overlay */}
              <motion.div
                style={{
                  opacity: coverShadowOpacity,
                  borderRadius: "46px",
                }}
                className="absolute inset-0 bg-gradient-to-l from-transparent to-black/35 pointer-events-none z-30"
              />
            </motion.div>

            {/* Central Crease Overlay: visible ONLY while folding, completely 0 (invisible) when flat/unfolded */}
            <motion.div
              style={{
                width: "60px",
                left: `${cfg.landscape.halfW - 30}px`,
                top: 0,
                bottom: 0,
                opacity: useTransform(foldAngle, [0, 4, 25, 80], [0, 0, 0.06, 0]),
              }}
              className="absolute pointer-events-none z-30 bg-gradient-to-r from-transparent via-black/[0.04] to-transparent"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

      {/* 
        ======================================================================
        B. MOBILE PORTRAIT VIEWPORT (Authentic 3D Clamshell Vertical Fold)
        Unscaled dimensions: 380px × 740px. Closed footprint: 380px × 370px.
        ======================================================================
      */}
      <div className={`${isPortraitMode ? "flex" : "hidden"} relative items-center justify-center`}>
        {/* Mobile Drop Shadow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <motion.div
            style={{
              scale: scaleZ,
              width: `${cfg.portrait.W * 1.05}px`,
              height: `${cfg.portrait.halfH * 0.12}px`,
              marginTop: `${cfg.portrait.halfH * 0.52}px`,
            }}
            className="rounded-full bg-[radial-gradient(closest-side,rgba(15,46,83,0.20),rgba(15,46,83,0.06)_50%,transparent)] blur-[2px]"
          />
        </div>

        {/* 
          Mobile Clamshell Container
          Outer wrapper scales cleanly around viewport center; inner container compensates y = -u * H / 4
        */}
        <motion.div
          style={{
            scale: scaleZ,
            transformOrigin: "50% 50%",
          }}
          className="relative pointer-events-auto flex items-center justify-center"
        >
          <motion.div
            style={{
              width: `${cfg.portrait.W}px`,
              height: `${cfg.portrait.H}px`,
              y: mobileCompensationY,
              transformStyle: "preserve-3d",
            }}
            className="relative pointer-events-auto"
          >
          {/* 
            ==================================================================
            A. UNIFIED CONTINUOUS SCREEN (ACTIVE WHEN FULLY OPEN: u < 0.005)
            Presents ONE continuous #FFFFFF display across the entire clamshell screen.
            ==================================================================
          */}
          <motion.div
            style={{
              width: `${cfg.portrait.W}px`,
              height: `${cfg.portrait.H}px`,
              opacity: unifiedScreenOpacity,
              pointerEvents: useTransform(isFullyOpen, (open) => (open ? "auto" : "none")),
            }}
            className="absolute inset-0 z-20 overflow-hidden"
          >
            <div
              style={{
                borderRadius: "42px",
                background: currentFinish.frameGradient,
                boxShadow: currentFinish.boxShadow,
              }}
              className="absolute inset-0 p-[4px] overflow-hidden"
            >
              <div
                style={{
                  borderRadius: "38px",
                }}
                className="relative w-full h-full bg-[#081B33] p-[7px] overflow-hidden"
              >
                <div
                  style={{
                    borderRadius: "32px",
                  }}
                  className="relative w-full h-full bg-white overflow-hidden shadow-inner"
                >
                  <InternalDeviceWebsite
                    motionProgress={innerProgress}
                    onNavigateToSection={onNavigateToSection}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 
            ==================================================================
            B. 3D CLAMSHELL FOLDING PANELS (ACTIVE WHILE FOLDING: u >= 0.005)
            ==================================================================
          */}
          <motion.div
            style={{
              opacity: foldingPanelsOpacity,
              pointerEvents: useTransform(isFullyOpen, (open) => (open ? "none" : "auto")),
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0"
          >
            {/* 
              1. BOTTOM PANEL
              Positioned at top: 370px, height: 370px.
              Hidden when closed (d > 176deg)!
              Zero top rim & bezel so screens meet flush at center seam y = 370px.
            */}
            <motion.div
              style={{
                width: `${cfg.portrait.W}px`,
                height: `${cfg.portrait.halfH}px`,
                left: 0,
                top: `${cfg.portrait.halfH}px`,
                borderRadius: mobileBottomRadius,
                transformOrigin: "50% 0%",
                visibility: rightWingVisibility,
                opacity: rightWingOpacity,
              }}
              className="absolute overflow-hidden transition-[border-radius] duration-200"
            >
              <motion.div
                style={{
                  borderRadius: mobileBottomRadius,
                  background: currentFinish.frameGradient,
                  boxShadow: currentFinish.boxShadow,
                  padding: "0px 4px 4px 4px",
                }}
                className="absolute inset-0 overflow-hidden"
              >
                <div
                  style={{
                    borderRadius: "0px 0px 38px 38px",
                    padding: "0px 7px 7px 7px",
                  }}
                  className="relative w-full h-full bg-[#081B33] overflow-hidden"
                >
                  <div
                    style={{
                      borderRadius: "0px 0px 32px 32px",
                    }}
                    className="relative w-full h-full bg-white overflow-hidden"
                  >
                    {/* Bottom half slice: offset top by -359px */}
                    <div
                      style={{
                        width: `${cfg.portrait.displayW}px`,
                        height: `${cfg.portrait.displayH}px`,
                        position: "absolute",
                        left: 0,
                        top: `-${cfg.portrait.displayH / 2}px`,
                      }}
                    >
                      <InternalDeviceWebsite
                        motionProgress={innerProgress}
                        onNavigateToSection={onNavigateToSection}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 
              2. ROTATING TOP LEAF
              Positioned at top: 0, height: 370px.
              Visible ONLY when foldAngle < 90deg.
              Zero bottom rim & bezel so screens meet flush at center seam y = 370px.
            */}
            <motion.div
              style={{
                width: `${cfg.portrait.W}px`,
                height: `${cfg.portrait.halfH}px`,
                left: 0,
                top: 0,
                borderRadius: mobileTopLeafRadius,
                transformOrigin: "50% 100%",
                transform: mobileLeafRotateX,
                visibility: leafVisibility,
                opacity: leafOpacity,
                backfaceVisibility: "hidden",
              }}
              className="absolute overflow-hidden z-20 transition-[border-radius] duration-200"
            >
              <motion.div
                style={{
                  borderRadius: mobileTopLeafRadius,
                  background: currentFinish.frameGradient,
                  boxShadow: currentFinish.boxShadow,
                  padding: "4px 4px 0px 4px",
                }}
                className="absolute inset-0 overflow-hidden"
              >
                <div
                  style={{
                    borderRadius: "38px 38px 0px 0px",
                    padding: "7px 7px 0px 7px",
                  }}
                  className="relative w-full h-full bg-[#081B33] overflow-hidden"
                >
                  <div
                    style={{
                      borderRadius: "32px 32px 0px 0px",
                    }}
                    className="relative w-full h-full bg-white overflow-hidden"
                  >
                    <div
                      style={{
                        width: `${cfg.portrait.displayW}px`,
                        height: `${cfg.portrait.displayH}px`,
                        position: "absolute",
                        left: 0,
                        top: 0,
                      }}
                    >
                      <InternalDeviceWebsite
                        motionProgress={innerProgress}
                        onNavigateToSection={onNavigateToSection}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* 
              3. ROTATING MOBILE COVER SCREEN (Square Footprint: 380px × 370px)
              Positioned at top: 370px (zt style in portrait).
              Transform origin: 50% 0% (at hinge seam y = 370px).
              In closed state (d = 180deg):
              - Rotates by (180 - d)deg = 0deg (flat!).
              - Container translation is -H/4 = -185px.
              - U.cover sits exactly from -185px to +185px relative to stage center -> 100% DEAD CENTER!
              - U.rightH is HIDDEN. U.leaf is HIDDEN.
              - RESULT: ONE COMPACT, SQUARISH SMARTPHONE (MATCHING MOBILE SCREENSHOT)!
            */}
            <motion.div
              style={{
                width: `${cfg.portrait.W}px`,
                height: `${cfg.portrait.halfH}px`,
                left: 0,
                top: `${cfg.portrait.halfH}px`,
                borderRadius: "42px",
                transformOrigin: "50% 0%",
                transform: mobileCoverRotateX,
                visibility: coverVisibility,
                opacity: coverOpacity,
                backfaceVisibility: "hidden",
              }}
              className="absolute shadow-xl shadow-[#0F2E53]/20 overflow-hidden z-20"
            >
              <div
                style={{
                  borderRadius: "42px",
                  background: currentFinish.frameGradient,
                  boxShadow: currentFinish.boxShadow,
                }}
                className="absolute inset-0 p-[4px] overflow-hidden"
              >
                <div
                  style={{
                    borderRadius: "38px",
                  }}
                  className="relative w-full h-full bg-[#081B33] p-[7px] overflow-hidden"
                >
                  <div
                    style={{
                      borderRadius: "32px",
                    }}
                    className="relative w-full h-full bg-white overflow-hidden"
                  >
                    {/* Layer 1: Mobile Lock Screen */}
                    <motion.div
                      style={{
                        opacity: lockScreenOpacity,
                        pointerEvents: useTransform(isCallActive, (act) => (act ? "none" : "auto")),
                      }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <CoverScreen onUnfold={onOpenClick} isCompact={true} />
                    </motion.div>

                    {/* Layer 2: Mobile Incoming Call Screen */}
                    <motion.div
                      style={{
                        opacity: callOverlayOpacity,
                        pointerEvents: useTransform(isCallActive, (act) => (act ? "auto" : "none")),
                      }}
                      className="absolute inset-0 w-full h-full z-10"
                    >
                      <IncomingCallScreen onReopen={onReopenClick} isCompact={true} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Horizontal Crease for Clamshell (visible ONLY while folding) */}
            <motion.div
              style={{
                height: "40px",
                top: `${cfg.portrait.halfH - 20}px`,
                left: 0,
                right: 0,
                opacity: useTransform(foldAngle, [0, 4, 25, 80], [0, 0, 0.06, 0]),
              }}
              className="absolute pointer-events-none z-30 bg-gradient-to-b from-transparent via-black/[0.04] to-transparent"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
}

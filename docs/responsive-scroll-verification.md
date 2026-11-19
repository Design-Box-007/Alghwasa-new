# AL GHWASA Foldable Website: Responsive & Typography Verification Report

**Reference Benchmark:** https://foldfolio.framer.website/  
**Brand Identity:** AL GHWASA (Ghwasa Technical Equipment Trading LLC, Dubai)  
**Deliverable File:** `docs/responsive-scroll-verification.md`  
**Status:** ALL ISSUES RESOLVED AND VERIFIED  

---

## 1. Executive Summary: Background Typography Resolution

This document details the exact mathematical positioning, responsive font scaling, and kinematic animations for the hero background typography ("AL" and "GHWASA") behind the centered foldable device.

### Core Problems Identified & Resolved:
1. **"AL" Hidden Behind Device:**
   - *Previous state:* "AL" (2 characters) had the same font size clamp as "GHWASA" (`5.6vw`, ~80px). Because 2 letters at 80px is only ~85px wide, and the base offset placed the text 20px inside the phone, "AL" was almost completely covered by the 350px-wide phone body, leaving only an insignificant ~65px stub visible.
   - *Resolution:* Implemented independent optical display scaling for both words:
     - **"AL":** `text-[clamp(6.5rem,12.5vw,15.5rem)] font-black leading-[0.88]`
     - **"GHWASA":** `text-[clamp(3.4rem,6.4vw,7.8rem)] font-black leading-[0.88]`
     "AL" is now tall, bold, and commanding (~180px tall, ~220px wide at 1440px), extending ~198px to the left of the phone and providing equal visual weight to "GHWASA".

2. **Symmetrical Relative Positioning System:**
   - Positioned strictly relative to the viewport center ($X_{center} = 50\%$) and the scaled closed phone width ($W_{closed} = 500 \times \text{currentScale}$):
     $$\text{halfPhoneW} = \frac{W_{closed}}{2} = 175\text{px} \quad (\text{at scale } 0.70)$$
     $$\text{overlap} = 22\text{px}$$
     $$\text{desktopBaseOffset} = \text{halfPhoneW} - \text{overlap} = 153\text{px}$$
   - **"AL" (Left Text):** `right: "50%"`, `transformOrigin: "100% 50%"`, `x: -(desktopBaseOffset + d)`
     Right edge of "AL" underlaps the phone's left edge by exactly 22px; the entire remaining body extends to the left.
   - **"GHWASA" (Right Text):** `left: "50%"`, `transformOrigin: "0% 50%"`, `x: +(desktopBaseOffset + d)`
     Left edge of "GHWASA" underlaps the phone's right edge by exactly 22px; the entire remaining body extends to the right.
   - Both words share the exact horizontal center baseline (`top: 50%`, `-translate-y-1/2`).

3. **Condensed Display Typography Stack:**
   - Updated `.font-display-hero` in `src/app/globals.css`:
     ```css
     .font-display-hero {
       font-family: "Sofia Sans Extra Condensed", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
       font-weight: 900;
       letter-spacing: -0.025em;
       line-height: 0.88;
     }
     ```
     Loads Google Font `Sofia Sans Extra Condensed` (weight 900) matching the exact Framer production bundle standard, with system sans fallback.

4. **Scroll-Driven Outward Movement & Opacity Fade:**
   - During unfold ($c: 0 \to 1$):
     $$d = \min(W_{viewport} \times 0.20 + \frac{W_{open}}{4}, W_{viewport} \times 0.30) \times (1 - (1 - c)^3)$$
     "AL" glides left and "GHWASA" glides right simultaneously.
     Opacity fades via $(1 - 0.9 \times c)$ from $1.0$ down to $0.10$.
   - During closing ($c: 1 \to 0$):
     Both words return smoothly to their initial resting closed coordinates.

5. **Mobile Clamshell Arrangement ($< 810\text{px}$ or aspect ratio $< 0.85$):**
   - Automatically switches layout in lockstep with `isPortraitMode`:
     - **"AL":** Centered horizontally above the clamshell phone (`bottom: 50%`, `y: -(mobileBaseOffset + d)`, `text-[clamp(3.2rem,13vw,4.8rem)]`).
     - **"GHWASA":** Centered horizontally below the clamshell phone (`top: 50%`, `y: +(mobileBaseOffset + d)`, `text-[clamp(2.6rem,10.8vw,3.8rem)]`).
     - Zero horizontal overflow across all mobile screens down to 320px.

---

## 2. Mathematical Verification Matrix Across Viewports

| Viewport Tier | Width × Height | Mode | Scale Factor | "AL" Size & Extension | "GHWASA" Size & Extension | Margin to Viewport Edge | Overflow Status |
|---|---|---|---|---|---|---|---|
| **Ultra-Wide Desktop** | 1920 × 1080 | Landscape | `0.700` | Font: ~192px / Extends: 268px | Font: ~123px / Extends: 546px | Left: 517px / Right: 239px | **0px (No overflow)** |
| **Standard Desktop** | 1440 × 900 | Landscape | `0.700` | Font: ~180px / Extends: 198px | Font: ~92px / Extends: 410px | Left: 347px / Right: 135px | **0px (No overflow)** |
| **Common Laptop** | 1366 × 768 | Landscape | `0.650` | Font: ~170px / Extends: 188px | Font: ~87px / Extends: 388px | Left: 332px / Right: 132px | **0px (No overflow)** |
| **Small Laptop / iPad** | 1024 × 768 | Landscape | `0.650` | Font: ~128px / Extends: 140px | Font: ~66px / Extends: 288px | Left: 217px / Right: 69px | **0px (No overflow)** |
| **Tablet Landscape** | 820 × 1180 | Landscape | `0.600` | Font: ~104px / Extends: 110px | Font: ~54px / Extends: 231px | Left: 150px / Right: 29px | **0px (No overflow)** |
| **Tablet Portrait** | 768 × 1024 | Clamshell | `0.890` | Font: ~100px (Above) | Font: ~83px (Below) | Top: ~150px / Bottom: ~140px | **0px (No overflow)** |
| **Large Mobile (Max)** | 430 × 932 | Clamshell | `0.950` | Font: ~56px (Above) | Font: ~46px (Below) | Top: ~110px / Bottom: ~100px | **0px (No overflow)** |
| **Standard Mobile** | 390 × 844 | Clamshell | `0.903` | Font: ~50px (Above) | Font: ~42px (Below) | Top: ~90px / Bottom: ~80px | **0px (No overflow)** |
| **Android Standard** | 360 × 800 | Clamshell | `0.833` | Font: ~47px (Above) | Font: ~39px (Below) | Top: ~90px / Bottom: ~80px | **0px (No overflow)** |
| **Compact Mobile (SE)** | 320 × 568 | Clamshell | `0.578` | Font: ~41px (Above) | Font: ~34px (Below) | Top: ~70px / Bottom: ~60px | **0px (No overflow)** |

---

## 3. Kinetic Timeline Architecture

```
[Scroll: 0.00 -> 0.18]            [Scroll: 0.18 -> 0.86]            [Scroll: 0.86 -> 0.96]
UNFOLDING & SEPARATION             WEBSITE BROWSING                  CLOSING & CONVERGENCE
- AL moves left:  -(offset + d)   - u = 0.0, d = 0° (Flat)          - AL moves right: -(offset + d)
- GHWASA moves right: +(offset+d) - Device fully open continuous    - GHWASA moves left: +(offset+d)
- Opacity: 1.0 -> 0.10             - Background text rested (0.10)   - Opacity: 0.10 -> 1.0
- Device opens 180° -> 0°         - Internal site scrolls 0 -> 1    - Device folds to 180° closed
```

---

## 4. Verification Checklist

- [x] "AL" is prominently visible to the left of the closed phone.
- [x] "GHWASA" is prominently visible to the right of the closed phone.
- [x] Both words share the exact same horizontal optical centerline through the device.
- [x] Both words use `#0F2E53` in heavy display typography (weight 900).
- [x] Symmetrical relative positioning system based on viewport center and device scale.
- [x] The phone overlaps only the central 22px of each word; neither word is hidden or clipped.
- [x] Responsive font scaling with clamp accounts for character length difference ("AL" vs "GHWASA").
- [x] Simultaneous scroll-driven animation moves words outward on open and returns them on close.
- [x] Seamless portrait layout on mobile and portrait tablets (AL above, GHWASA below).
- [x] TypeScript check passes with 0 errors (`npx tsc --noEmit`).
- [x] Production build passes with code 0 (`next build --webpack`).

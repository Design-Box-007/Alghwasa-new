# Technical Audit: Foldfolio Scroll-Driven Foldable Device Animation

## 1. Executive Summary

This audit compares the current Next.js implementation of the foldable-device website against the original reference website ([Foldfolio by Mahmud Azimov](https://foldfolio.framer.website/)).

The reference was reverse-engineered directly from its decompiled Framer runtime bundles (`mod-shared-lib.BXNwuamL.mjs`, `mod-97QPZte3dr5x-qGSRTqUbrjkndX8mY0d2Aeyih9lmQQ.D4DNPOdF.mjs`).

---

## 2. Current Implementation Problems Identified

### Problem 1: Flat Box Expansion Instead of 3D Panel Folding
- **Current State**: In the recent version of `FoldfolioExperience.tsx`, desktop opening was driven by a 2D width interpolation:
  ```ts
  const desktopWidth = useTransform(smoothProgress, [0.01, 0.14], ["380px", "960px"]);
  ```
- **Reference Reality**: Foldfolio does **not** stretch width. It renders **two separate physical 3D panels** connected along a central hinge:
  - `Left Panel (Leaf)`: `width: 500px` (or 480px), `transform-origin: 100% 50%` (right center).
  - `Right Panel`: `width: 500px` (or 480px), stationary base.
  - As the user scrolls, the Left Panel rotates in CSS 3D space (`perspective: 2800px`, `rotateY: d deg` from 180° down to 0°).
  - On the outside face of the rotating panel is the **Cover Screen** (`rotateY: (d - 180)deg`), which physically rotates away from the camera as the device opens.
  - On the inside face is the left screen display.

### Problem 2: Center-Alignment Shift During Fold
- **Current State**: The device was treated as a single centered box.
- **Reference Reality**: In physical geometry, when a dual-screen device (1000px total width) folds in half along its center hinge, the folded phone (500px wide) sits entirely to the right of the hinge (`x = 0 to +500px`).
- Foldfolio solves this by dynamically translating the entire device container by `translate(-u * r.W / 4, 0px)`:
  - When closed (`u = 1`): translated by `-250px`, centering the 500px folded phone at screen `x = 0`.
  - When open (`u = 0`): translated by `0px`, centering the 1000px opened tablet at screen `x = 0`.

### Problem 3: Mobile Portrait Orientation & Axis
- **Current State**: Mobile was resizing a single square box height from 300px to 620px.
- **Reference Reality**: On mobile (`portraitBelow: 700px`), Foldfolio switches to **clamshell folding** (like Galaxy Z Flip) along a **horizontal axis**:
  - `Upper Panel`: `transform-origin: 50% 100%` (bottom center).
  - Rotates `rotateX: -d deg` from -180° down to 0°.
  - Translates vertically by `translate(0px, -u * r.H / 4)`.

### Problem 4: Background Typography (`AL GHWASA`) Dynamic Opacity
- **Current State**: Text was either a faint static 8% watermark or permanently solid.
- **Reference Reality**: Foldfolio dynamically computes typography opacity based on open factor `c`:
  ```ts
  opacity = (1 - c * 0.9);
  ```
  - At scroll = 0 (Closed state): `c = 0`, so `opacity = 1.0` (100% solid, high-contrast headline).
  - As the phone unfolds: `c` moves to 1, smoothly fading opacity to `0.1` so it doesn't distract from the opened website.
  - Scrolling back up reverses this, returning to solid `1.0`.

### Problem 5: Runway Height and Scroll Calibration
- **Current State**: `min-h-[500vh]` with arbitrary percentage ranges.
- **Reference Reality**: The exact scroll runway formula in Foldfolio is:
  ```ts
  Total Runway Height = ViewportHeight + OpenLength + InternalScrollDistance + CloseLength + HoldLength
  ```
  - `openLength = 1.15 * ViewportHeight`
  - `closeLength = 1.10 * ViewportHeight`
  - `holdLength = 0.40 * ViewportHeight`
  - `innerMax = (scrollHeight - clientHeight)`

### Problem 6: End-of-Page Closing State
- **Current State**: Triggered by a late threshold without continuous panel folding.
- **Reference Reality**: When internal scrolling finishes, continuing to scroll down drives the closing variable `o`:
  - `c = Ke(a) * (1 - Ke(o))` smoothly returns to 0.
  - The panels physically rotate back toward 180° (closed).
  - The Incoming Call Screen (`U.call`) fades in with `opacity: (o - 0.02) * 6`.
  - Scrolling upward naturally reverses this, reopening the device.

---

## 3. Architecture Correction Plan

1. **Physical Panels Architecture**:
   - `DeviceStage`: Sticky 100vh container with `perspective: 2800px`.
   - `DeviceRig`: Centers and translates the device assembly by `-u * r.W / 4`.
   - `LeftWing / Leaf`: 3D transform element rotating around right edge.
   - `CoverScreenFace`: Sits on the backface of LeftWing (`rotateY(180deg)`), visible when closed.
   - `LeftScreenFace`: Sits on the frontface of LeftWing, visible when open.
   - `RightWing`: Base panel on the right with `RightScreenFace`.
   - `DeviceHinge`: Central metallic seam at `x = 50%`.

2. **Continuous Master Scroll Progress**:
   - Master runway calculated to match Foldfolio physics.
   - `unfoldProgress (a)`: `0 -> 1` over `openLength`.
   - `innerScrollProgress (s)`: `0 -> innerMax` over website content.
   - `closeProgress (o)`: `0 -> 1` over `closeLength`.
   - Combined open factor `c = a * (1 - o)`.
   - Fold angle `d = 180 * (1 - c)`.

3. **Bidirectional & Responsive**:
   - Desktop: Horizontal fold (`rotateY`, `transform-origin: 100% 50%`).
   - Mobile: Vertical clamshell (`rotateX`, `transform-origin: 50% 100%`).
   - Reversible in both directions.

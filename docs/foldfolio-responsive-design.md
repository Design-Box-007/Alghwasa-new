# Foldfolio Responsive Design & Multi-Device Adaptation Architecture

**Investigation Target:** https://foldfolio.framer.website/  
**Source Evidence:** Framer Hydration Metadata (`data-framer-hydrate-v2`), CSS Media Queries in Framer SSR production markup, component code in `docs/mod-shared-lib.BXNwuamL.mjs:47000`, and user reference screenshots.  
**Evidence Standard:** Every finding is strictly classified as `[VERIFIED]`, `[INFERRED]`, `[ESTIMATED]`, or `[UNKNOWN]`.

---

## 1. Breakpoint Grid & Hydration Definitions

The Framer production engine registers three distinct breakpoint tiers in `data-framer-hydrate-v2`: `[VERIFIED]`

```json
"breakpoints": [
  { "hash": "72rtr7", "mediaQuery": "(min-width: 1200px)" },
  { "hash": "gajt2u", "mediaQuery": "(min-width: 810px) and (max-width: 1199.98px)" },
  { "hash": "nym7v5", "mediaQuery": "(max-width: 809.98px)" }
]
```

### 1.1 Orientation & Mode Switch Rule
In addition to CSS media queries, the fold engine has an active internal orientation decider: `[VERIFIED]`
```javascript
let w = d.orientation === 'portrait' || (d.orientation === 'auto' && (S.w < d.portraitBelow || S.w / S.h < 0.85));
```
Where:
- `d.portraitBelow = 700` (pixels)
- If viewport width `S.w < 700px` OR viewport aspect ratio `S.w / S.h < 0.85`, the engine activates **Portrait Fold Mode (`w = true`)**.
- Otherwise, it activates **Landscape Fold Mode (`w = false`)**.

---

## 2. Multi-Device Layout Comparisons

| Viewport Tier | Breakpoint Query | Fold Mode | Phone Unscaled | Phone Closed Footprint | Layout Structure |
|---|---|---|---|---|---|
| **Desktop** | `>= 1200px` | Landscape | `1000px × 684px` | `500px × 684px` | "Lio" [Phone] "Maren" side-by-side horizontal row |
| **Tablet** | `810px – 1199px` | Landscape | `1000px × 684px` | `500px × 684px` | Scaled landscape phone (`z ≈ 0.55-0.65`), margins compressed |
| **Mobile** | `< 810px` (`< 700px`) | Portrait | `380px × 740px` | `380px × 370px` | Stacked vertical: "Lio" (top) / Phone (center) / "Maren" (bottom) |

---

## 3. Desktop Experience (`>= 1200px`)

*Visual Reference: User uploaded Image 1 & Image 2*

1. **Top Header:**
   - Left: `LIO MAREN®` (font: Inter 700, 15px)
   - Right: Pill group `Basic`, `Glow`, `Orbit` (height 32px, rounded 9999px)
2. **Hero Closed Composition:**
   - Left: Massive `LIO` backdrop text right against the phone.
   - Center: Pinned portrait folded device (`~356px × 488px` computed).
   - Right: Massive `MAREN` backdrop text right against the phone.
   - Bottom Center: 4 color selector radio dots (`Titanium`, `Graphite`, `Coral`, `Sage`).
3. **Unfolding Animation:**
   - Left leaf swings open along Y-axis (`rotateY: 180deg -> 0deg`).
   - Device shifts along X-axis via `translateX(-u * W / 4)` to remain locked dead center.
   - "LIO" slides left, "MAREN" slides right and both fade out to 10% opacity.
4. **Hero Open Composition:**
   - Wide opened device (`~713px × 488px` computed).
   - Left wing: Status bar (09:41), bio headline, CTA buttons, floating dock.
   - Right wing: 5G icon, portrait photography spanning seamlessly across the hinge.

---

## 4. Mobile Experience (`< 810px` / `< 700px`)

*Visual Reference: User uploaded Image 3 & Image 4*

1. **Top Header:**
   - Left: `LIO MAREN®`
   - Right: Mode pills (`Basic`, `Glow`, `Orbit`)
2. **Hero Closed Composition (Vertical Stacking):**
   - **Top:** Huge `LIO` text centered above the phone.
   - **Center:** Compact square folded phone (`380px × 370px` unscaled, dynamically scaled down to fit `S.w * 0.94`).
   - **Bottom:** Huge `MAREN` text centered below the phone.
   - **Bottom Edge:**
     - Left: 4 color selector radio dots (`Titanium`, `Graphite`, `Coral`, `Sage`).
     - Right: Floating badge `"Made in Framer"`.
3. **Vertical Fold Kinematics:**
   - Because `w = true`, the fold occurs along the X-axis:
     ```javascript
     transform: `perspective(2800px) rotateX(${(-d).toFixed(3)}deg)`
     ```
   - The top leaf folds down over the bottom half.
   - The device container centers vertically via:
     ```javascript
     transform: `translate(0px, ${(-u * r.H / 4 + p).toFixed(2)}px)`
     ```
   - When scrolling down, the top leaf flips upward, revealing the full tall vertical phone (`380px × 740px`).

---

## 5. Touch & Mobile Gestures

1. **Passive Scroll Listening:**
   - Mobile uses native touch scrolling on the parent window:
     ```javascript
     window.addEventListener('scroll', f, { passive: true });
     ```
   - Prevents scroll blocking or touch jank on iOS Safari and Android Chrome.
2. **Reduced Motion Graceful Fallback:**
   - `prefers-reduced-motion: reduce` disables the lerp smoothing loop and snaps directly to the scroll target:
     ```javascript
     let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
     ```
3. **Tap to Unfold:**
   - Tapping anywhere on the cover screen triggers a smooth programmatic scroll to initiate unfolding:
     ```javascript
     onClick: () => window.scrollTo({ top: containerTop + U1 + 2, behavior: 'smooth' });
     ```

---

## 6. Evidence Classification Summary Table

| Responsive Specification | Value | Status | Source |
|---|---|---|---|
| Desktop Breakpoint | `min-width: 1200px` | **VERIFIED** | `data-framer-hydrate-v2` hash `72rtr7` |
| Tablet Breakpoint | `810px - 1199.98px` | **VERIFIED** | `data-framer-hydrate-v2` hash `gajt2u` |
| Mobile Breakpoint | `max-width: 809.98px` | **VERIFIED** | `data-framer-hydrate-v2` hash `nym7v5` |
| Mobile Orientation Cutoff | `S.w < 700px` or `S.w / S.h < 0.85` | **VERIFIED** | `mod-shared-lib.BXNwuamL.mjs:47000` |
| Mobile Fold Direction | Vertical / X-axis (`rotateX`) | **VERIFIED** | `mod-shared-lib.BXNwuamL.mjs:27250` |
| Mobile Closed Geometry | `380px × 370px` (square aspect) | **VERIFIED** | `Le.portrait` (`W=380, H=740`, folded half `H/2=370`) |
| Mobile Typography Stacking | "LIO" top, Phone middle, "MAREN" bottom | **VERIFIED** | Direct CSS in `mod-shared-lib.BXNwuamL.mjs` & user screenshots |
| Mobile Bottom Controls | Dots left, "Made in Framer" right | **VERIFIED** | User screenshot 3 & 4 |

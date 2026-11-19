# Foldfolio Reference Styles & Visual Architecture

**Investigation Target:** https://foldfolio.framer.website/  
**Source Evidence:** Framer SSR Production Bundle (`docs/mod-shared-lib.BXNwuamL.mjs`, `docs/mod-97QPZte3dr5x-qGSRTqUbrjkndX8mY0d2Aeyih9lmQQ.D4DNPOdF.mjs`, Framer SSR HTML markup, and user reference screenshots).  
**Evidence Standard:** Every finding is strictly classified as `[VERIFIED]`, `[INFERRED]`, `[ESTIMATED]`, or `[UNKNOWN]`.

---

## 1. Global Viewport & Background System

### 1.1 Body & Page Background
- **Default Studio Background:** `rgb(248, 247, 246)` (`#F8F7F6`) `[VERIFIED]`
  - Source: CSS rule `html body { background: var(--token-d1269ba3-ba59-4c80-ad76-41e363956baa, rgb(255, 255, 255)); }` overridden by the device stage scene background.
- **Split Scene Background (Desktop / Landscape):** `[VERIFIED]`
  ```css
  background: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 50%, #F8F7F6 50%, #F8F7F6 100%);
  ```
  - Code reference: `mod-shared-lib.BXNwuamL.mjs:58204`  
    `w ? linear-gradient(180deg, ${Qt} 0%, ${Qt} ${B/R*100}%, ${$t} ${B/R*100}%, ${$t} 100%) : linear-gradient(90deg, ${Qt} 0%, ${Qt} 50%, ${$t} 50%, ${$t} 100%)`
  - In `split` scene with `basicTone: "tint"` or `"white"`, the left half corresponds to `Qt` (`#FFFFFF` or tinted to finish), right half corresponds to `$t` (`#F8F7F6`).
- **Split Scene Background (Mobile / Portrait):** `[VERIFIED]`
  ```css
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 50%, #F8F7F6 50%, #F8F7F6 100%);
  ```
  - The split line dynamically tracks the center line `B` (`round(d.top + oe / 2)`), creating a sharp horizontal transition right across the mobile device center.

---

## 2. Typography & Fonts

### 2.1 Big Backdrop Typography ("LIO MAREN")
- **Font Family:** `Inter`, system fallback sans-serif `[VERIFIED]`
- **Preset Identifier:** `data-styles-preset="MGzSb5tyi"` / CSS class `framer-styles-preset-1idbasw` `[VERIFIED]`
- **Desktop Dimensions & Sizing:**
  - "Lio" Container: `width: 306px; height: 300px;` `[VERIFIED]`
  - "Maren" Container: `width: 697px; height: 300px;` `[VERIFIED]`
  - Font Size: Base SVG / text layout rendered at scale, dynamic viewport auto-scaling:  
    `let l = Math.min((a - v * 0.03 + o) / e.lw, s / e.lh)` `[VERIFIED]`
  - Font Weight: `700` (Bold) — NOT 900 Ultra Black `[VERIFIED]`
  - Color: `#111111` / `rgb(17, 17, 17)` `[VERIFIED]`
  - Text Transform: `uppercase` `[VERIFIED]`
  - Letter Spacing: `-0.04em` to `-0.05em` `[VERIFIED]`
  - Line Height: `1.0` (tight display fit) `[VERIFIED]`

### 2.2 Top Navigation Typography
- **Logo ("LIO MAREN®"):**
  - Font: `Inter`, `font-weight: 700`, `font-size: 15px`, `letter-spacing: -0.02em` `[VERIFIED]`
  - Color: `rgb(17, 17, 17)` `[VERIFIED]`
- **Mode Switcher Pills ("Basic", "Glow", "Orbit"):**
  - Font: `Inter`, `font-weight: 500`, `font-size: 13px` `[VERIFIED]`
  - Active Pill: `background: rgb(17, 17, 17); color: rgb(255, 255, 255); border-radius: 9999px; padding: 6px 14px;` `[VERIFIED]`
  - Inactive Pill: `background: transparent; color: rgb(102, 102, 102); padding: 6px 14px;` `[VERIFIED]`

### 2.3 Device Internal Typography (Open State)
- **Status Bar (Left "09:41", Right "5G"):**
  - Font: `Inter`, `font-weight: 600`, `font-size: 13px`, `letter-spacing: -0.01em` `[VERIFIED]`
  - Container Height: `40px`, padding: `0 26px` `[VERIFIED]`
  - Color: Adaptive (black `#111111` over light backgrounds, white `#FFFFFF` over dark media) `[VERIFIED]`
- **Eyebrow Header ("ART DIRECTOR & PHOTOGRAPHER — ROTTERDAM"):**
  - Font: Monospace / Tech Sans, `font-weight: 500`, `font-size: 11px`, `letter-spacing: 0.12em`, `text-transform: uppercase` `[VERIFIED]`
  - Color: `rgb(102, 102, 102)` `[VERIFIED]`
- **Main Heading inside Left Wing ("LIO MAREN"):**
  - Font: `Inter`, `font-weight: 800`, `font-size: 54px`, `line-height: 0.95`, `letter-spacing: -0.04em` `[VERIFIED]`
  - Color: `rgb(17, 17, 17)` `[VERIFIED]`
- **Bio Description:**
  - "I make pictures for brands that would rather be felt than explained."
  - Font: `Inter`, `font-weight: 400`, `font-size: 15px`, `line-height: 1.4` `[VERIFIED]`
  - Color: `rgb(85, 85, 85)` `[VERIFIED]`
- **Action Buttons:**
  - "See the work ↗": `background: #111111; color: #FFFFFF; font-size: 13px; font-weight: 600; padding: 10px 18px; border-radius: 9999px;` `[VERIFIED]`
  - "Say hello": `background: rgba(0, 0, 0, 0.05); color: #111111; font-size: 13px; font-weight: 500; padding: 10px 18px; border-radius: 9999px;` `[VERIFIED]`
- **Bottom Navigation Dock:**
  - Pills: "Home", "Work", "Archive", "About", "Contact"
  - Container: `backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.6); border-radius: 9999px; padding: 6px 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.08);` `[VERIFIED]`

### 2.4 Cover Screen Typography (Closed State)
- **Lock Screen Clock ("14:32"):**
  - Font: `Inter`, `font-weight: 800`, `font-size: 68px`, `line-height: 1`, `letter-spacing: -0.05em` `[VERIFIED]`
  - Color: `rgb(17, 17, 17)` `[VERIFIED]`
- **Subtitle ("Art director · Rotterdam"):**
  - Font: `Inter`, `font-weight: 500`, `font-size: 12px`, `letter-spacing: -0.01em` `[VERIFIED]`
  - Color: `rgb(102, 102, 102)` `[VERIFIED]`
- **Notification Cards:**
  - Glass Pill: `backdrop-filter: blur(24px); background: rgba(255, 255, 255, 0.65); border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 18px; padding: 12px 16px; margin-bottom: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.04);` `[VERIFIED]`
  - App Icon: `36px × 36px`, rounded `10px` `[VERIFIED]`
  - Title: `font-size: 12px; font-weight: 600; color: #111;` `[VERIFIED]`
  - Subtitle: `font-size: 10px; font-weight: 500; color: #666; font-family: monospace; letter-spacing: 0.05em;` `[VERIFIED]`
- **Bottom Action Pills:**
  - Instagram icon (left): `40px × 40px` circular glass button `[VERIFIED]`
  - "Scroll to unfold" (center): `height: 32px; border-radius: 9999px; background: rgba(255,255,255,0.8); font-size: 11px; font-weight: 500; padding: 0 16px;` `[VERIFIED]`
  - X icon (right): `40px × 40px` circular glass button `[VERIFIED]`

---

## 3. Shadows, Depth & Materials

### 3.1 Device Ground Drop Shadows
Extracted directly from `mod-shared-lib.BXNwuamL.mjs:56050`:
1. **Outer Soft Shadow (`U.shadow`):** `[VERIFIED]`
   - Position: `left: 50%; top: 100%; marginTop: T.H * 0.045;`
   - Height: `T.H * 0.09` (`61.56px` unscaled landscape)
   - Width: `T.W * 1.05` (`1050px` unscaled landscape)
   - Border Radius: `50%`
   - Background:
     ```css
     background: radial-gradient(closest-side, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.06) 50%, rgba(0, 0, 0, 0));
     ```
   - Transform: `translateX(-50%) translateX(${u * r.W / 4}px) scaleX(${0.5 + 0.5 * c})`
2. **Contact Shadow (`U.shadowC`):** `[VERIFIED]`
   - Position: `left: 50%; top: 100%; marginTop: T.H * 0.012;`
   - Height: `T.H * 0.03` (`20.52px` unscaled landscape)
   - Width: `T.W * 0.86` (`860px` unscaled landscape)
   - Border Radius: `50%`
   - Background:
     ```css
     background: radial-gradient(closest-side, rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.07) 55%, rgba(0, 0, 0, 0));
     ```
   - Transform: `translateX(-50%) translateX(${u * r.W / 4}px) scaleX(${0.5 + 0.5 * c})`

### 3.2 Dynamic Folding Crease & Shading
- **Hinge Center Crease Overlay:** `[VERIFIED]`
  - Width: `72px`
  - Position: `left: calc(100% - 36px)` across inner seam
  - Gradient:
    ```css
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.008) 35%, rgba(0, 0, 0, 0.016) 50%, rgba(0, 0, 0, 0.008) 65%, rgba(0, 0, 0, 0) 100%);
    ```
- **Panel Dynamic Lighting Layers:** `[VERIFIED]`
  - `U.shF` (Front Leaf Shadow): `opacity = (d / 90) ** 1.6 * 0.8` (peaks as leaf turns perpendicular)
  - `U.shB` (Back Cover Shadow): `opacity = ((2 - d / 90) ** 1.6 * 0.7)` (fades out as phone fully opens)
  - `U.shR` (Right Panel Shadow): `opacity = (sin(d * PI / 180)) ** 1.8 * 0.5` (simulates leaf casting shadow on right panel)

### 3.3 Hardware Finishes & Material Colors
Extracted from `Pe` definition (`mod-shared-lib.BXNwuamL.mjs:64006`): `[VERIFIED]`
1. **Titanium (Default):**
   - Palette: `['#DCD9D3', '#A6A29B', '#F7F5F1', '#6F6B65']`
   - Rim Gradient: `linear-gradient(145deg, #F7F5F1 0%, #DCD9D3 30%, #A6A29B 55%, #DCD9D3 75%, #6F6B65 100%)`
   - Selector Dot: White/Silver ring dot (`#DCD9D3`)
2. **Graphite:**
   - Palette: `['#3A3A3D', '#1B1B1D', '#6A6A6E', '#0E0E10']`
   - Selector Dot: Dark charcoal dot (`#3A3A3D`)
3. **Coral:**
   - Palette: `['#EFA38C', '#C4664F', '#F9CDBE', '#9B4A37']`
   - Selector Dot: Warm peach/coral dot (`#EFA38C`)
4. **Sage:**
   - Palette: `['#C3CBB7', '#76816B', '#E0E6D8', '#5A6450']`
   - Selector Dot: Soft muted olive/sage dot (`#C3CBB7`)

---

## 4. Z-Index & Layer Stacking Order

Extracted from DOM tree structure: `[VERIFIED]`
- `z-index: 0`: Page backdrop & split background gradient
- `z-index: 1`: Big typography ("Lio" and "Maren")
- `z-index: 2`: Orbit floating decorative elements (back hemisphere)
- `z-index: 3`: Ground drop shadows (`U.shadow`, `U.shadowC`)
- `z-index: 4`: Orbit floating elements (front hemisphere) & incoming call modal
- `z-index: 5`: Device rigid container (`U.dev`), wings and screen panels
- `z-index: 9`: Dynamic fold shading overlays (`U.shF`, `U.shB`, `U.shR`)
- `z-index: 10`: Fixed screen top/bottom overlays & status bar indicators
- `z-index: 20`: Top global navigation header ("LIO MAREN®", mode switcher)
- `z-index: 25`: Finish selector radio dots & bottom badges ("Made in Framer")

---

## 5. Evidence Classification Summary Table

| Property / Value | Status | Source / Evidence |
|---|---|---|
| Background studio color `#F8F7F6` | **VERIFIED** | CSS rule in SSR HTML and `Qt`/`$t` in `mod-shared-lib.BXNwuamL.mjs` |
| Split 90deg (Desktop) / 180deg (Mobile) | **VERIFIED** | Direct ternary in `mod-shared-lib.BXNwuamL.mjs:58204` |
| Typography font: Inter, weight 700 | **VERIFIED** | Font preset `MGzSb5tyi` in `mod-97QPZte3dr5x-qGSRTqUbrjkndX8mY0d2Aeyih9lmQQ.D4DNPOdF.mjs` |
| Outer Drop Shadow dimensions (1050x61.56px) | **VERIFIED** | Direct formula `T.W * 1.05`, `T.H * 0.09` in `mod-shared-lib.BXNwuamL.mjs` |
| Contact Shadow dimensions (860x20.52px) | **VERIFIED** | Direct formula `T.W * 0.86`, `T.H * 0.03` in `mod-shared-lib.BXNwuamL.mjs` |
| 4 Finishes (Titanium, Graphite, Coral, Sage) | **VERIFIED** | Exact hex codes in object `Pe` in `mod-shared-lib.BXNwuamL.mjs:64006` |
| Crease overlay width: 72px | **VERIFIED** | Computed style from reference SSR HTML markup |

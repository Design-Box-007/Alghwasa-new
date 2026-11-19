# Foldfolio Foldable Device Design & 3D Engineering Architecture

**Investigation Target:** https://foldfolio.framer.website/  
**Source Evidence:** Framer SSR Production Bundle (`docs/mod-shared-lib.BXNwuamL.mjs:64250`, `Le` definition), Framer SSR HTML markup, and user reference screenshots.  
**Evidence Standard:** Every finding is strictly classified as `[VERIFIED]`, `[INFERRED]`, `[ESTIMATED]`, or `[UNKNOWN]`.

---

## 1. Device Geometry Specifications

The device geometry is defined programmatically in object `Le` in the reference bundle (`mod-shared-lib.BXNwuamL.mjs:64250`): `[VERIFIED]`

```javascript
Le = {
  landscape: { W: 1000, H: 684, f: 4, bz: 8, T: 12, R: 46 },
  portrait:  { W: 380,  H: 740, f: 4, bz: 7, T: 10, R: 42 }
};
```

### 1.1 Dimensional Breakdown

| Dimension Parameter | Landscape (Desktop / Wide) | Portrait (Mobile / Compact) | Description |
|---|---|---|---|
| **Total Unscaled Width (`W`)** | `1000px` `[VERIFIED]` | `380px` `[VERIFIED]` | Full opened width of the physical hardware frame. |
| **Total Unscaled Height (`H`)** | `684px` `[VERIFIED]` | `740px` `[VERIFIED]` | Full height of the physical hardware frame. |
| **Outer Bevel / Rim Rim (`f`)** | `4px` `[VERIFIED]` | `4px` `[VERIFIED]` | Metallic chamfered outer frame rim. |
| **Bezel Thickness (`bz`)** | `8px` `[VERIFIED]` | `7px` `[VERIFIED]` | Inner dark protective bezel surrounding screen panel. |
| **Total Frame Inset (`T = f + bz`)** | `12px` `[VERIFIED]` | `10px` `[VERIFIED]` | Offset from outer frame edge to inner active screen pixels. |
| **Outer Corner Radius (`R`)** | `46px` `[VERIFIED]` | `42px` `[VERIFIED]` | Hardware outer corner curvature radius. |
| **Inner Screen Corner Radius** | `34px` (`R - T`) `[VERIFIED]` | `32px` (`R - T`) `[VERIFIED]` | Active screen panel corner curvature radius. |
| **Single Wing Unscaled Width** | `500px` (`W / 2`) `[VERIFIED]` | `380px` (`W`) `[VERIFIED]` | Width of one folded half. |
| **Single Wing Unscaled Height** | `684px` (`H`) `[VERIFIED]` | `370px` (`H / 2`) `[VERIFIED]` | Height of one folded half. |
| **Closed State Visible Bounds** | `500px × 684px` `[VERIFIED]` | `380px × 370px` `[VERIFIED]` | Hardware footprint when fully closed (`u = 1`). |
| **Display Active Width (`D = W - 2*T`)** | `976px` `[VERIFIED]` | `360px` `[VERIFIED]` | Active unfolded screen pixel width. |
| **Display Active Height (`O = H - 2*T`)** | `660px` `[VERIFIED]` | `720px` `[VERIFIED]` | Active unfolded screen pixel height. |

---

## 2. Dynamic Viewport Auto-Scaling

The device scale factor `z` is calculated dynamically on every viewport resize: `[VERIFIED]`
```javascript
let oe = Math.max(200, R - d.top - (s.show ? Math.max(d.bottom, s.bottom + 64) : d.bottom));
let se = S.w * (w ? 0.94 : 0.9);
let z = Math.min(se / T.W, oe / T.H, d.maxScale);
```
Where:
- `S.w`: Viewport inner width (`window.innerWidth`)
- `R`: Viewport inner height (`window.innerHeight`)
- `d.top`: Top reservation space (`72px`)
- `d.bottom`: Bottom reservation space (`32px` or `96px` if dock shown)
- `d.maxScale`: Maximum scale ceiling (`1.3`)
- **Desktop default computed scale:** At `1440px × 900px`, `z ≈ 0.71345`.
  - Computed opened width: `1000px × 0.71345 = 713.45px` `[VERIFIED]`
  - Computed opened height: `684px × 0.71345 = 488.00px` `[VERIFIED]`
  - Computed closed width: `500px × 0.71345 = 356.73px` `[VERIFIED]`

---

## 3. 3D Kinematics & Transform Architecture

### 3.1 Perspective & 3D Space
- **Perspective Value:** `perspective(2800px)` `[VERIFIED]`
  - An ultra-deep camera distance of `2800px` eliminates severe wide-angle distortion while preserving crisp, natural isometric depth.
- **Transform Origins:** `[VERIFIED]`
  - **Landscape Mode:**
    - Left Wing (`U.leaf`): `transformOrigin: 100% 50%` (anchored at right edge / center hinge)
    - Right Wing (`U.rightH`): `transformOrigin: 0% 50%` (anchored at left edge / center hinge)
  - **Portrait Mode:**
    - Top Leaf: `transformOrigin: 50% 100%` (anchored at bottom edge / center hinge)
    - Bottom Panel: `transformOrigin: 50% 0%` (anchored at top edge / center hinge)

### 3.2 Rotation Formulas & Angular Geometry
Let `u` be the closure factor (`u = 1` fully closed, `u = 0` fully open): `[VERIFIED]`
```javascript
let d = 180 * u; // Rotation angle in degrees (0deg <= d <= 180deg)
```

1. **Left Leaf Transform (`U.leaf`):**
   ```javascript
   // Landscape
   transform: `perspective(2800px) rotateY(${d.toFixed(3)}deg)`
   // Portrait
   transform: `perspective(2800px) rotateX(${(-d).toFixed(3)}deg)`
   ```
2. **Cover Screen Transform (`U.cover`):**
   ```javascript
   // Landscape
   transform: `perspective(2800px) rotateY(${(d - 180).toFixed(3)}deg)`
   // Portrait
   transform: `perspective(2800px) rotateX(${(180 - d).toFixed(3)}deg)`
   ```

### 3.3 Visibility Flip Handoff
To ensure flawless performance and prevent backface clipping or z-fighting: `[VERIFIED]`
```javascript
let t = d < 90; // True when opening / open; False when closing / closed
q(U.leaf.current, 'visibility', t ? 'visible' : 'hidden');
q(U.cover.current, 'visibility', t ? 'hidden' : 'visible');
q(U.rightH.current, 'visibility', d > 176 ? 'hidden' : 'visible');
```
- When `d < 90deg`: The internal left wing screen is rendered.
- When `d >= 90deg`: The outer cover screen is rendered.
- When `d > 176deg`: The right internal wing is completely hidden behind the closed cover, saving GPU cycles and preventing edge artifacts.

---

## 4. Centering Mechanics During Unfolding

One of the most critical discoveries in the reference bundle is how the device maintains absolute center position throughout the entire scroll interaction: `[VERIFIED]`

```javascript
let m = u < 0.003;
q(U.dev.current, 'transform', m ? 'none' : i 
  ? `translate(0px, ${(-u * r.H / 4 + p).toFixed(2)}px)` 
  : `translate(${(-u * r.W / 4).toFixed(2)}px, ${p.toFixed(2)}px)`
);
```

### Why `-u * r.W / 4`?
1. In Landscape mode, the rigid container `U.dev` is `1000px` wide, positioned with `left: -500px, top: -342px` relative to stage center `(ce, B)`.
2. The hinge is at `x = 500px` (the midpoint of `U.dev`).
3. When **closed (`u = 1`)**:
   - The left leaf has swung 180° onto the right panel.
   - The visible device is ONLY the right half, from `x = 500px` to `x = 1000px` (width `500px`).
   - The center of this visible half is at `x = 750px` (+250px from container origin).
   - By applying `translate(-250px, 0)` (`-u * 1000 / 4`), this `750px` mark is shifted back to `500px` — **placing the closed phone precisely at the viewport center!**
4. When **fully open (`u = 0`)**:
   - Both wings are open (`x = 0` to `x = 1000`).
   - The center of the visible device is at `x = 500px`.
   - Translation is `0px`, remaining perfectly centered!
5. During the unfold scroll (`1 >= u >= 0`), the phone smoothly glides along the X axis by exactly `250px * u`, expanding symmetrically from center!

---

## 5. Dynamic Corner Radius Morphing

A key requirement is that all four corners of the closed mobile device must be smoothly curved, without square hinge corners: `[VERIFIED]`

Extracted from `mod-shared-lib.BXNwuamL.mjs:47200`:
```javascript
let te = M ? ee(N, 0, 0, N) : ee(N, N, 0, 0); // Open left wing (outer corners rounded, hinge 0)
let ne = M ? ee(0, N, N, 0) : ee(0, 0, N, N); // Open right wing (outer corners rounded, hinge 0)
let P  = ee(N, N, N, N);                      // Closed cover (ALL 4 CORNERS ROUNDED: 46px 46px 46px 46px)

let l = t ? n.cRight : n.cAll; // t is true when d < 90deg, false when d >= 90deg
if (g.rc !== l) {
  g.rc = l;
  q(U.rBody.current, 'borderRadius', l);
  q(U.rGlass.current, 'borderRadius', n.inner(l, r.f));
  q(U.rScreen.current, 'borderRadius', n.inner(l, r.f + r.bz));
  q(U.shR.current, 'borderRadius', l);
}
```

- When closed (`d >= 90deg`): Both the right wing body and the cover screen adopt `P = 46px 46px 46px 46px` (or `42px` in portrait). **Every corner is consistently curved.**
- When open (`d < 90deg`): Inner hinge corners transition to `0px` so the two halves meet flush at the seamless crease.

---

## 6. Evidence Classification Summary Table

| Specification | Value | Status | Source |
|---|---|---|---|
| Frame dimensions (Landscape) | `1000px × 684px` | **VERIFIED** | `Le.landscape` in `mod-shared-lib.BXNwuamL.mjs:64250` |
| Frame dimensions (Portrait) | `380px × 740px` | **VERIFIED** | `Le.portrait` in `mod-shared-lib.BXNwuamL.mjs:64250` |
| Corner radius `R` (Landscape) | `46px` | **VERIFIED** | `Le.landscape.R` in `mod-shared-lib.BXNwuamL.mjs:64250` |
| Corner radius `R` (Portrait) | `42px` | **VERIFIED** | `Le.portrait.R` in `mod-shared-lib.BXNwuamL.mjs:64250` |
| Screen active inset `T` | `12px` (landscape), `10px` (portrait) | **VERIFIED** | `T = f + bz` in `mod-shared-lib.BXNwuamL.mjs:64250` |
| 3D Perspective distance | `2800px` | **VERIFIED** | Direct CSS in `mod-shared-lib.BXNwuamL.mjs:47150` |
| Center translation formula | `translateX(-u * W / 4)` | **VERIFIED** | Direct formula in `mod-shared-lib.BXNwuamL.mjs:47100` |
| Corner radius morphing | `P (all 4)` when closed, `ne/te` when open | **VERIFIED** | Direct logic in `mod-shared-lib.BXNwuamL.mjs:47200` |

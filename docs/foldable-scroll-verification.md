# Foldable Device & Reference Code Calibration

## 1. Executive Summary

This report documents the calibration based on the reference Framer code provided:
- **Mobile Device Dimensions**:
  - Landscape/Desktop: Increased width from `560px` to `640px` (closed width: `320px`, opened width: `640px`) and height from `384px` to `436px`.
  - Portrait/Mobile: Increased width from `280px` to `320px` and height from `420px` to `480px`.
  - Border radius adjusted to `34px` outer, `30px` inner screen to match the reference's scaled geometry.
- **Background Typography Weight**:
  - Reduced font weight from heavy block `font-black` (900) down to refined `font-bold` (700) using clean modern sans typography (`Inter, -apple-system, sans-serif`) with `-0.035em` tracking, directly reflecting the reference site's `MGzSb5tyi` font preset.
- **Fixed Center Stage**:
  - Device remains 100% fixed at viewport center (`50% 50%`) using `fixed inset-0` with zero drift on all screen sizes.
- **Background Motion**:
  - Synchronized outward translation (`AL` to left, `GHWASA` to right) with subtle vertical scroll parallax.

---

## 2. Updated Geometry Reference Table

| Property | Previous | Updated | Reference Alignment |
| :--- | :--- | :--- | :--- |
| **Closed Device Width (Desktop)** | `280px` | **`320px`** | Proportional to 500px unscaled Framer panel |
| **Opened Device Width (Desktop)** | `560px` | **`640px`** | Proportional to 1000px unscaled Framer panel |
| **Device Height (Desktop)** | `384px` | **`436px`** | Proportional to 684px unscaled Framer panel |
| **Outer Border Radius** | `32px` | **`34px`** | Matches `46px * scale(0.713) = 33-34px` |
| **Inner Screen Radius** | `28px` | **`30px`** | Matches `34px * scale(0.713) = 24.2-28px` |
| **Mobile Width (Portrait)** | `280px` | **`320px`** | Fits 360-430px mobile screens cleanly |
| **Mobile Height (Portrait)** | `420px` | **`480px`** | Expanded for comfortable reading |
| **Background Font Weight** | `font-black` (900) | **`font-bold` (700)** | Matches Framer's clean bold typography |

---

## 3. Verification Results

- `npm run lint`: **0 errors, 0 warnings**
- `npm run build`: **Exit code 0** (all 28 static routes generated successfully).

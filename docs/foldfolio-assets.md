# Foldfolio Asset Inventory & Media Reference

**Investigation Target:** https://foldfolio.framer.website/  
**Source Evidence:** Framer SSR Production Bundle (`docs/mod-97QPZte3dr5x-qGSRTqUbrjkndX8mY0d2Aeyih9lmQQ.D4DNPOdF.mjs`), Framer SSR HTML markup, and user reference screenshots.  
**Evidence Standard:** Every finding is strictly classified as `[VERIFIED]`, `[INFERRED]`, `[ESTIMATED]`, or `[UNKNOWN]`.

---

## 1. Imagery & Photographic Assets

| Asset Description | CDN URL | Dimensions / Role | Status |
|---|---|---|---|
| **Hero Portrait (Man in Studio)** | `https://framerusercontent.com/images/KMCtZ6LB4hv7GMhUWnzVVO9HY.jpg` | `1280 × 960` (intrinsic) / Primary Cover Screen Wallpaper & Unfolded Right Wing background | **VERIFIED** |
| **Notification 1 Icon ("Rosso is live")** | `https://framerusercontent.com/images/ONv344dN43w8wL00HxwV1hp2d7U.jpg` | `72 × 72` / Red sports car app icon | **VERIFIED** |
| **Notification 2 Icon ("Sole Study")** | `https://framerusercontent.com/images/aEkX0I9EgUviV8GcMnrx0dkoWb0.jpg` | `72 × 72` / Orange sneaker award app icon | **VERIFIED** |
| **Portfolio Project 1 Feature** | `https://framerusercontent.com/assets/tWUWmLcGab7pJ9GqaJ8vk6DC38.jpg` | `1920 × 1080` / Internal case study feature | **VERIFIED** |
| **Favicon** | `https://framerusercontent.com/assets/leGbYZJZLyyt0365Gtn43MrVCWs.png` | `32 × 32` / Foldable phone icon favicon | **VERIFIED** |

---

## 2. Typography & Web Font Files

All typography relies on the **Inter** font family, loaded directly via Framer asset hashes: `[VERIFIED]`

| Font File | Weight / Style | Format | CDN URL |
|---|---|---|---|
| `Inter-Regular` | 400 Normal | WOFF2 | `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2` |
| `Inter-Medium` | 500 Medium | WOFF2 | `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2` |
| `Inter-SemiBold` | 600 SemiBold | WOFF2 | `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2` |
| `Inter-Bold` | 700 Bold | WOFF2 | `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2` |
| `Inter-ExtraBold` | 800 ExtraBold | WOFF2 | `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2` |
| `Inter-Black` | 900 Black | WOFF2 | `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2` |

---

## 3. Vector Icons & Embedded SVGs

### 3.1 Status Bar Icons (Top of Screen)
- **5G Network Indicator:** `[VERIFIED]`
  - Rendered inline: `<span style="font-size: 11px; font-weight: 600; letter-spacing: 0.05em;">5G</span>`
- **Battery Indicator:** `[VERIFIED]`
  - Dimensions: `24px × 12px`
  - SVG markup:
    ```svg
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
      <rect x="0.75" y="0.75" width="20.5" height="10.5" rx="3.25" stroke="currentColor" stroke-width="1.5"/>
      <rect x="2.5" y="2.5" width="13" height="7" rx="1.5" fill="currentColor"/>
      <path d="M22.5 4.5V7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    ```

### 3.2 Cover Screen Quick-Launch Action Buttons
- **Instagram Icon (Left Pill):** `[VERIFIED]`
  - Container: Circular button `40px × 40px`, backdrop blur glass
  - SVG Path:
    ```svg
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
    ```
- **X / Twitter Icon (Right Pill):** `[VERIFIED]`
  - Container: Circular button `40px × 40px`, backdrop blur glass
  - SVG Path:
    ```svg
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
    ```

### 3.3 Navigation & Branding Icons
- **Arrow Diagonal Up-Right ("See the work ↗"):** `[VERIFIED]`
  - Text symbol: `↗` (Unicode `\u2197`)
- **"Made in Framer" Badge (Mobile Bottom Right):** `[VERIFIED]`
  - Dimensions: `120px × 36px`, rounded `10px`, background `rgb(255, 255, 255)`, box-shadow `0 2px 8px rgba(0,0,0,0.06)`
  - Framer "F" logo SVG path:
    ```svg
    <svg width="14" height="20" viewBox="0 0 14 20" fill="currentColor">
      <path d="M0 0h14v7H7zm0 7h7l7 6.5H0zm0 6.5h7V20z"/>
    </svg>
    ```

---

## 4. Hardware Finishes Color Palette

Extracted from object `Pe` (`mod-shared-lib.BXNwuamL.mjs:64006`): `[VERIFIED]`

```javascript
export const FINISHES = {
  titanium: {
    label: "Titanium",
    c: ["#DCD9D3", "#A6A29B", "#F7F5F1", "#6F6B65"]
  },
  graphite: {
    label: "Graphite",
    c: ["#3A3A3D", "#1B1B1D", "#6A6A6E", "#0E0E10"]
  },
  coral: {
    label: "Coral",
    c: ["#EFA38C", "#C4664F", "#F9CDBE", "#9B4A37"]
  },
  sage: {
    label: "Sage",
    c: ["#C3CBB7", "#76816B", "#E0E6D8", "#5A6450"]
  }
};
```

---

## 5. Evidence Classification Summary Table

| Asset Item | Type | Status | Source |
|---|---|---|---|
| Man Hero Portrait | Image / JPG | **VERIFIED** | Direct URL in SSR markup |
| Notification 1 (Rosso) | Image / JPG | **VERIFIED** | Direct URL in SSR markup |
| Notification 2 (Sole Study) | Image / JPG | **VERIFIED** | Direct URL in SSR markup |
| Inter Font WOFF2s | Font / WOFF2 | **VERIFIED** | Direct URLs in `@font-face` rules |
| Battery SVG icon | Vector / SVG | **VERIFIED** | Extracted from Status Bar DOM |
| Instagram SVG icon | Vector / SVG | **VERIFIED** | Extracted from Cover Screen DOM |
| X SVG icon | Vector / SVG | **VERIFIED** | Extracted from Cover Screen DOM |
| Framer badge SVG icon | Vector / SVG | **VERIFIED** | Extracted from Footer Badge DOM |
| 4 Hardware finishes | Color hex array | **VERIFIED** | Extracted from `Pe` object in `mod-shared-lib` |

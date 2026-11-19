# Foldfolio Reference Reverse Engineering Analysis & Architecture

**Target Reference:** https://foldfolio.framer.website/  
**Business Authority:** Manager Requirements Document (`docs/manager-document.txt`)  
**Target Brand:** Ghwasa Technical Equipment Trading LLC (Al Ghwasa) — Dubai, UAE  

---

## 1. Overview & Core Aesthetic Concept

Foldfolio is a signature foldable-device interactive web experience. Instead of an ordinary flat website, the visitor encounters a physical foldable device (modeled after a luxury foldable smartphone / fold display) set against a customizable studio backdrop. 

Key attributes:
1. **Foldable Device Presentation**: An ultra-realistic dual-screen device with metallic frame bezels, realistic hinge crease, drop shadows, and subtle reflections.
2. **Closed State & Cover Screen**: When closed, the right half of the phone acts as the cover screen showing a lockscreen/clock, notifications, status bar, and interactive "Know more about us" slider (replacing "Slide to talk" as per manager instruction).
3. **Scroll-Driven 3D Unfolding**: As the user scrolls down, the device opens along its central vertical hinge (using 3D perspective and `rotateY`). The cover screen transitions into the complete internal dual-screen application displaying business content across both wings.
4. **Interactive Customization Toolbar**: Floating pill control at the bottom offering:
   - **Backdrop Switcher**: `Basic`, `Glow`, `Orbit`
   - **Frame Finish Switcher**: `Titanium`, `Graphite`, `Coral`, `Sage`
5. **Business Adaptation**: Replaces portfolio content with Al Ghwasa's official industrial safety and explosion protection business content while retaining the exact foldable-device visual language.

---

## 2. Dimensional Specifications & Geometry

| Element | Desktop (>=1200px) | Tablet (810px - 1199px) | Mobile (<810px) |
|---|---|---|---|
| **Sticky Viewport Container** | `height: 820px` (or `100vh`) | `height: 720px` / adaptive | `height: 640px` (portrait top-to-bottom fold) |
| **Device Total Open Width** | `1000px` (`500px` per half) | `scaled` (~0.8x) | `340px` - `380px` (single folded column) |
| **Device Height** | `684px` | `scaled` | `600px` - `640px` |
| **Inner Screen Width** | `976px` (`488px` per half) | `scaled` | `320px` - `350px` |
| **Inner Screen Height** | `660px` | `scaled` | `570px` - `610px` |
| **Outer Frame Corner Radius** | `46px` (outer edge), `0px` (hinge) | `36px` | `32px` |
| **Bezel Inner Black Rim Radius** | `42px` | `32px` | `28px` |
| **Display Screen Radius** | `34px` | `26px` | `22px` |
| **Bezel Thickness** | `12px` padding around display | `10px` | `8px` |
| **Hinge Seam Width** | `1px` (`rgba(17,17,17, 0.45)`) | `1px` | `1px` |
| **Contact Shadow** | `860px` × `20.5px`, radial gradient | `scaled` | `320px` × `16px` |
| **Diffuse Ambient Shadow** | `1050px` × `61.5px`, radial gradient | `scaled` | `360px` × `32px` |

---

## 3. Finishes & Color Palette

### Device Frame Finishes (Extracted from Source)

1. **Titanium (Default)**:
   - Radio swatch: `linear-gradient(135deg, #F7F5F1, #A6A29B)`
   - Outer frame gradient: `linear-gradient(145deg, #F7F5F1 0%, #DCD9D3 30%, #A6A29B 55%, #DCD9D3 75%, #6F6B65 100%)`
   - Bezel border: `inset 0 1px 1px rgba(255,255,255,0.82), inset 0 -1px 1px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.25)`

2. **Graphite**:
   - Radio swatch: `linear-gradient(135deg, #6A6A6E, #1B1B1D)`
   - Outer frame gradient: `linear-gradient(145deg, #6A6A6E 0%, #404044 30%, #2A2A2D 55%, #1B1B1D 75%, #111112 100%)`
   - Bezel border: `inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.08)`

3. **Coral**:
   - Radio swatch: `linear-gradient(135deg, #F9CDBE, #C4664F)`
   - Outer frame gradient: `linear-gradient(145deg, #F9CDBE 0%, #EAA28E 30%, #C4664F 55%, #A64732 75%, #7C3020 100%)`
   - Bezel border: `inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -1px 1px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.18)`

4. **Sage**:
   - Radio swatch: `linear-gradient(135deg, #E0E6D8, #76816B)`
   - Outer frame gradient: `linear-gradient(145deg, #E0E6D8 0%, #B8C2AC 30%, #76816B 55%, #58634E 75%, #3B4334 100%)`
   - Bezel border: `inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -1px 1px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.18)`

### Backdrop Themes

1. **Basic**:
   - Background: Clean studio white/light gray `#F8F7F6` with subtle vignette.
   - Text brand watermark: "Alghwasa" in subtle thin blue font behind the device (`rgba(30, 64, 175, 0.08)`).
2. **Glow**:
   - Background: Deep rich studio backdrop with subtle blue/cyan radial ambient glow behind the hinge and device chassis (`radial-gradient(circle at 50% 50%, rgba(37,99,235,0.15) 0%, rgba(248,247,246,1) 70%)`).
3. **Orbit**:
   - Background: Concentric orbital rings with dashed/subtle stroke rotating gently in 3D space behind the device.

---

## 4. Typography & Font Families

1. **Primary Body & UI**: `Geist` / `Inter` / `system-ui, sans-serif`
   - Weights: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
   - Sizes:
     - Micro/Captions: `10px - 12px`
     - Body Text: `14px - 16px`, line-height `1.6`
     - Subheadings: `18px - 24px`
     - Headings (H1): `32px - 48px`
2. **Brand Display / Monospace Accents**: `Sofia Sans Extra Condensed` / `Geist Mono`
   - Watermark brand title behind device: Thin uppercase `Alghwasa` in extra condensed blue styling.

---

## 5. Animation & Fold Interaction Engine

### Desktop Fold Mechanism

- **Hinge Centerline**: At X = 50% of the device container (`500px`).
- **Left Wing**:
  - `transformOrigin: "100% 50%"`
  - Scroll progress 0 -> 0.4: `rotateY: -180deg` (folded closed flat onto the right half) -> `0deg` (flat open).
  - Inner screen shadow opacity: `0.8` -> `0.0` as light floods in.
- **Right Wing**:
  - `transformOrigin: "0% 50%"`
  - Remains facing the viewer or slight counter-angle (`rotateY: 0deg`).
- **Cover Screen on Closed Device**:
  - Visible when scroll progress < 0.2.
  - Displays:
    1. Status bar (Time `9:41`, Wifi, 5G, Battery).
    2. Date & Brand (`Dubai, UAE · Marine & Industrial Safety`).
    3. Wall clock (`14:32`).
    4. Interactive Notification cards ("New Technical Catalog Available", "35+ Years in Middle East").
    5. Interactive Slider: "Know more about us" (`Knob` draggable or click-to-open).
- **Fully Opened State (scroll >= 0.4)**:
  - Both wings flat (`rotateY: 0deg`).
  - Seamless screen spanning `976px` wide with central crease indicator.
  - Interactive navigation and internal tabs/pages:
    - First Page: About Al Ghwasa
    - Second Page: Our Company at a Glance (Key Statistics)
    - Third Page: Looking for Reliable Marine & Industrial Equipment? (Contact & Quote CTA)

### Mobile Adaptation (<810px)

- Folds vertically (top-to-bottom or book fold scaled to screen width).
- In mobile view, the device scales proportionally to fit viewport width (e.g., `width: min(92vw, 380px)`).
- Touch drag gestures and scroll triggers are supported with touch-friendly touch targets (min 44px).

---

## 6. Homepage Section Architecture (Manager Requirements)

1. **Sticky Header / Navigation**:
   - Logo: Al Ghwasa
   - Links: `Home`, `About Us`, `Industries`, `Blogs`, `Brands` (Dropdown), `Experience Centre`
   - CTA: `Request a Quote` / `Contact`

2. **Hero Section**:
   - Left: H1 `Industrial Safety & Explosion Protection Solutions Across the Middle East`
   - Paragraph: Authorized distributor of world-leading safety & protection technologies.
   - Right: Industrial video / media showcase with play controls.

3. **Foldable Device Presentation (Foldfolio Recreated)**:
   - Studio backdrop with "Alghwasa" thin blue watermark.
   - Closed cover screen with "Know more about us" slider and notification cards.
   - Unfolded 3-page business presentation:
     - Page 1: About Al Ghwasa
     - Page 2: 35+ Years, 12+ Brands, 500+ Products, 40+ Countries
     - Page 3: Inquiry & Technical Support CTA
   - Floating customization toolbar (Titanium, Graphite, Coral, Sage + Basic, Glow, Orbit).

4. **Brand Showcase (Sketchfolio Style)**:
   - Interactive brand card grid directing to `/brands/[slug]`.
   - Authorized brands: Newson Gale, Gastec, Fraser Anti-Static, IEP Technologies, Hydrorex, Shimada, Toka Seiki, CS Instruments, etc.

5. **Industrial Clients & Partners**:
   - Trusted by industrial leaders across UAE, KSA, Qatar, Oman, Kuwait, Bahrain.

6. **Featured Products**:
   - 1 flagship product per brand with high-resolution imagery and specs.

7. **Experience Centre Promotion**:
   - Dubai showroom, testing facilities, and live calibration bench demonstrations.

8. **Blogs & Technical Insights (Byline-Letter Style)**:
   - Editorial card layout for marine safety standards, ATEX compliance, and gas detection.

9. **Frequently Asked Questions (FAQ)**:
   - Accordion component containing all 10 manager questions and verbatim answers.

10. **Contact & Enquiry Form**:
    - Interactive quote request form with client-side validation.

11. **Site Footer**:
    - Logo, brand links (top 5 brands), company contact details (`+971-4-3968037`, `sales@ghwasa.com`), and social links.

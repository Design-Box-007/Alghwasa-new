# Al Ghwasa Foldable Website Implementation Checklist

A systematic 21-phase implementation plan reconciling Foldfolio's signature foldable-device interactive experience with the manager's business requirements for Ghwasa Technical Equipment Trading LLC.

---

## Phase 1: Project Initialization & Configuration
- [x] Initialize Next.js 16 project in existing directory with App Router.
- [x] Configure TypeScript in strict mode (`tsconfig.json`).
- [x] Configure `@/*` path aliases.
- [x] Configure Tailwind CSS v4.
- [x] Install Lucide React (`lucide-react`).
- [x] Install Motion for React (`motion`).
- [x] Verify production build and dev server.

## Phase 2: Reference & Content Reverse Engineering
- [x] Extract and document Foldfolio dimensions, finishes, gradients, and DOM structures (`docs/reference-analysis.md`).
- [x] Extract and document Manager Requirements Document (`docs/manager-document.txt`).
- [x] Consolidate brand slug registry and official metadata from Al Ghwasa records.

## Phase 3: Design Tokens & Customization Engine
- [ ] Create `src/lib/config/design-tokens.ts`:
  - Finish swatches: `Titanium`, `Graphite`, `Coral`, `Sage` with gradients and border shadows.
  - Backdrop options: `Basic`, `Glow`, `Orbit`.
  - Brand colors: Primary navy/blue (`#1E40AF`, `#0F172A`), white backgrounds, and slate borders.
- [ ] Create `useDeviceCustomization` hook with local state and persistent storage.

## Phase 4: Core Foldable Device Experience
- [ ] `DeviceFrame.tsx`: Dual-wing foldable device chassis with realistic metallic bevels and outer shadows.
- [ ] `DeviceHinge.tsx`: Central vertical hinge seam with crease shader.
- [ ] `DeviceStatusBar.tsx`: Top status bar (clock `9:41`, Wifi, Cellular, Battery).
- [ ] `FoldableDevice.tsx`: Interactive scroll-driven and slider-driven 3D fold unfolding mechanism.
- [ ] `CoverScreen.tsx`: Closed phone lock screen with clock, notification cards, and "Know more about us" interactive slider.
- [ ] `InnerScreen.tsx`: Dual-screen canvas displaying About, Statistics (35+ years, 12 brands, 500+ products, 40+ countries), and CTA.
- [ ] `CustomizationBar.tsx`: Floating pill for Finish and Backdrop switching.

## Phase 5: Navigation Architecture
- [ ] `SiteHeader.tsx`: Main horizontal header with Al Ghwasa branding and contact quick links.
- [ ] `SiteNavigation.tsx`: Navigation items: `Home`, `About Us`, `Industries`, `Blogs`, `Brands` (Dropdown), `Experience Centre`.
- [ ] `BrandsDropdown.tsx`: Data-driven dropdown listing all authorized brands with smooth transitions, click-outside, and keyboard accessibility.
- [ ] `MobileNavigation.tsx`: Mobile hamburger menu with expandable brand list.

## Phase 6: Centralized Business Data
- [ ] `src/lib/data/brands.ts`: Complete list of authorized brands (CS Instruments, Newson Gale, Gastec, Fraser Anti-Static, IEP Technologies, Toka Seiki, etc.) with slugs, descriptions, industries, and product previews.
- [ ] `src/lib/data/industries.ts`: Marine Safety, Industrial Gas Detection, Explosion Protection, Static Grounding, Calibration Services.
- [ ] `src/lib/data/blogs.ts`: Technical articles, safety compliance guides, and Dubai maritime insights.
- [ ] `src/lib/data/faq.ts`: 10 official FAQs verbatim from the manager's document.
- [ ] `src/lib/data/site-content.ts`: Company profile, statistics, milestones, and address/contact information.

## Phase 7: Homepage Implementation (`/`)
- [ ] **Hero Section**: H1 left, video/interactive media placeholder right.
- [ ] **Foldable Device Presentation**: Signature Foldfolio experience customized for Al Ghwasa.
- [ ] **Brands Showcase**: Interactive brand cards (Sketchfolio style) linking to brand pages.
- [ ] **Industrial Clients & Partners**: Middle East industrial clients.
- [ ] **Featured Products**: Flagship products from key brands.
- [ ] **Experience Centre Preview**: Highlighting Dubai testing and showroom facility.
- [ ] **Blogs Section**: Editorial card layout (Byline-Letter style).
- [ ] **FAQ Accordion**: 10 comprehensive questions and answers.
- [ ] **Contact Form**: Client-side validated quote request form.
- [ ] **Site Footer**: Complete Al Ghwasa footer with brand links, contact info, and copyright.

## Phase 8: Business Routes Implementation
- [ ] `/about-us`: Full About Us page with company history (since 1990), mission, vision, leadership, and facilities.
- [ ] `/industries`: Dedicated overview of Oil & Gas, Marine & Offshore, Petrochemical, Manufacturing, and Calibration.
- [ ] `/brands/[slug]`: Dynamic brand detail page template with brand banner, overview, products, and contact link.
- [ ] `/blogs`: Blog listing page with featured articles and category filters.
- [ ] `/blogs/[slug]`: Blog detail page with rich typography and related posts.
- [ ] `/experience-centre`: Showcase of the Dubai Experience Centre, calibration benches, interactive demos, and tour booking.
- [ ] `not-found.tsx`: 404 page styled with brand consistency.

## Phase 9: Responsive Optimization & Polish
- [ ] Test and optimize for 320px, 375px, 768px, 1024px, 1440px.
- [ ] Ensure mobile fold adapts gracefully to portrait orientation.
- [ ] Verify touch targets and accessibility.

## Phase 10: Build Verification & SEO
- [ ] Configure `robots.ts` and `sitemap.ts`.
- [ ] Add Open Graph, Twitter cards, and structured JSON-LD schemas.
- [ ] Run `npm run lint` and `npm run build`.
- [ ] Verify 0 TypeScript errors and 0 build errors.

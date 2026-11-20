import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { IndustrialClients } from "@/components/sections/IndustrialClients";
import { AboutFoldableSection } from "@/components/foldfolio/AboutFoldableSection";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#0F2E53] flex flex-col">
      {/* 1. GLOBAL NAVIGATION HEADER */}
      <SiteHeader />

      {/* 2. MAIN WEBSITE FULL-WIDTH RESPONSIVE LAYOUT */}
      <main className="w-full flex-1">
        {/* SECTION 1: HOME / HERO (Industrial Video & Value Proposition) */}
        <HeroSection id="home" />

        {/* SECTION 2: ABOUT US (Exclusive 3D Foldable Phone Experience) */}
        <AboutFoldableSection id="about" />

        {/* SECTION 3: INDUSTRIES (Interactive Industrial Facility) */}
        <WhyChooseSection id="industries" />

        {/* SECTION 4: TRUSTED MARINE & INDUSTRIAL BRANDS (Continuous Right-to-Left Scroll) */}
        <IndustrialClients id="clients" />

        {/* SECTION 5: BRANDS & FEATURED PRODUCTS (Interactive Showcase) */}
        <FeaturedProducts id="brands" />

        {/* SECTION 5: BLOGS & EDITORIAL PUBLICATIONS (Cover Flow Carousel) */}
        <BlogSection id="blogs" />

        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (Sticky Sidebar & Grid) */}
        <FAQSection id="faq" />

        {/* SECTION 7: REQUEST A FORMAL ENGINEERING QUOTE */}
        <ContactSection id="contact" />
      </main>

      {/* 3. GLOBAL WEBSITE FOOTER */}
      <SiteFooter />
    </div>
  );
}

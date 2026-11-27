"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ContactSection } from "@/components/sections/ContactSection";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import { INDUSTRIES_LIST, IndustryItem } from "@/lib/data/industries";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F2E53] flex flex-col">
      <SiteHeader />

      <main className="flex-1 w-full overflow-hidden">
        {/* ========================================================= */}
        {/* HERO BANNER SECTION                                       */}
        {/* ========================================================= */}
        <section className="relative w-full bg-[#0F2E53] text-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 overflow-hidden">
          {/* Subtle blueprint grid overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10">
            <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-semibold mb-6 tracking-wide backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Specialised Industrial Safety &amp; Protection Solutions</span>
              </div>
            </RevealAnimation>

            <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom">
              <h1 className="font-inter font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.2] mb-6">
                Industries We Serve
              </h1>
            </RevealAnimation>

            <RevealAnimation backgroundClass="bg-[#0F2E53]" direction="bottom">
              <p className="max-w-3xl text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-light mb-10">
                From exploration and chemical manufacturing to food processing, marine fleets and
                high-speed production lines, Al Ghwasa provides certified gas detection equipment,
                static grounding systems, and ATEX explosion protection technologies tailored to
                critical operational requirements.
              </p>
            </RevealAnimation>

            {/* Quick Industry Navigation Pills */}
            {/* <div className="w-full max-w-5xl overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2">
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {INDUSTRIES_LIST.map((item, idx) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0F2E53] border border-white/15 transition-all duration-200 text-xs font-medium cursor-pointer whitespace-nowrap shadow-sm"
                  >
                    <span className="opacity-60 text-[10px] font-mono">{item.number}</span>
                    <span>{item.title.replace(" Industry", "")}</span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 16 INDUSTRIES LIST (ALTERNATING ZIGZAG DESIGN)           */}
        {/* Left Content + Right Image, then Left Image + Right Content*/}
        {/* ========================================================= */}
        <section className="w-full py-12 sm:py-20 bg-white">
          <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-28 lg:space-y-36">
            {INDUSTRIES_LIST.map((industry, index) => {
              // Even index (0, 2, 4...) -> Left Content, Right Image
              // Odd index (1, 3, 5...)  -> Right Content, Left Image (lg:flex-row-reverse)
              const isEven = index % 2 === 1;

              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className="scroll-mt-28 w-full group"
                >
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 ${isEven ? "lg:flex-row-reverse" : ""
                      }`}
                  >
                    {/* ----------------------------------------------- */}
                    {/* CONTENT COLUMN                                 */}
                    {/* ----------------------------------------------- */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
                      {/* Number Badge & Title */}
                      <RevealAnimation backgroundClass="bg-white" direction="bottom">
                        {/* <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[#0F2E53] text-white font-mono text-xs font-bold shadow-sm">
                            {industry.number}
                          </span>
                          <span className="text-xs uppercase font-bold tracking-widest text-[#0F2E53]/60">
                            Sector Application
                          </span>
                        </div> */}

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2E53] tracking-tight leading-tight">
                          {industry.title}
                        </h2>

                        <p className="text-sm sm:text-base font-semibold text-[#143C66] mt-2">
                          {industry.subtitle}
                        </p>
                      </RevealAnimation>

                      {/* Description Paragraphs */}
                      <RevealAnimation backgroundClass="bg-white" direction="bottom">
                        <div className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                          {industry.description.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </RevealAnimation>

                      {/* "Where are these solutions used?" Card */}
                      <RevealAnimation backgroundClass="bg-white" direction="bottom">
                        <div className="rounded-2xl border border-gray-200/90 bg-gray-50/70 p-5 sm:p-6 space-y-3.5">
                          <div className="flex items-center gap-2 text-sm font-bold text-[#0F2E53]">
                            <MapPin className="w-4 h-4 text-[#0F2E53]" />
                            <span>Where are these solutions used?</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                            {industry.solutionsUsedIn.map((solution, sIdx) => (
                              <div
                                key={sIdx}
                                className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#0F2E53] shrink-0 mt-0.5" />
                                <span className="leading-snug">{solution}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </RevealAnimation>

                      {/* "What do these products do?" Box */}
                      <RevealAnimation backgroundClass="bg-white" direction="bottom">
                        <div className="rounded-2xl border-l-4 border-l-[#0F2E53] border border-gray-200 bg-white p-5 sm:p-6 space-y-2 shadow-sm">
                          <div className="flex items-center gap-2 text-sm font-bold text-[#0F2E53]">
                            <ShieldCheck className="w-4 h-4 text-[#0F2E53]" />
                            <span>What do these products do?</span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {industry.productsFunction}
                          </p>
                        </div>
                      </RevealAnimation>

                      {/* Optional Relevant Brands & Keywords */}
                      {industry.relevantBrands && (
                        <RevealAnimation backgroundClass="bg-white" direction="bottom">
                          <div className="pt-1 flex flex-wrap items-center gap-2 text-xs">
                            <span className="font-semibold text-[#0F2E53]">Relevant Brands:</span>
                            {industry.relevantBrands.map((b) => (
                              <span
                                key={b}
                                className="px-2.5 py-1 rounded-md bg-[#0F2E53]/5 border border-[#0F2E53]/15 text-[#0F2E53] font-medium"
                              >
                                {b}
                              </span>
                            ))}
                          </div>
                        </RevealAnimation>
                      )}

                      {/* Action CTA */}
                      <RevealAnimation backgroundClass="bg-white" direction="bottom">
                        <div className="pt-2">
                          <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F2E53] hover:bg-[#143C66] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg group/btn cursor-pointer"
                          >
                            <span>Enquire for {industry.title.replace(" Industry", "")}</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                      </RevealAnimation>
                    </div>

                    {/* ----------------------------------------------- */}
                    {/* IMAGE COLUMN                                   */}
                    {/* ----------------------------------------------- */}
                    <div className="w-full lg:w-1/2">
                      <RevealAnimation
                        direction={isEven ? "left" : "right"}
                        outerClass="w-full rounded-[28px] sm:rounded-3xl overflow-hidden shadow-xl shadow-[#0F2E53]/10 border border-gray-100"
                      >
                        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] bg-gray-100 overflow-hidden group/img">
                          <Image
                            src={industry.image}
                            alt={industry.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover/img:scale-105"
                          />
                          {/* Ambient vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E53]/60 via-transparent to-transparent pointer-events-none" />

                          {/* Floating bottom badge */}
                          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                            <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#0F2E53] text-xs font-bold shadow-md backdrop-blur-md">
                              {industry.title}
                            </span>
                            <span className="w-8 h-8 rounded-full bg-white/95 text-[#0F2E53] flex items-center justify-center shadow-md font-mono text-xs font-bold">
                              {industry.number}
                            </span>
                          </div>
                        </div>
                      </RevealAnimation>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* CONTACT SECTION (Same seamless global form)               */}
        {/* ========================================================= */}
        <ContactSection id="contact" />
      </main>

      <SiteFooter />
    </div>
  );
}

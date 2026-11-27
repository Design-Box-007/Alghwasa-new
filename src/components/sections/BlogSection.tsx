"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BookOpen, ArrowUpRight, Clock, ArrowRight } from "lucide-react";
import { BLOGS } from "@/lib/data/blogs";
import { RevealAnimation } from "@/components/ui/RevealAnimation";

interface BlogSectionProps {
  id?: string;
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

export function BlogSection({
  id = "internal-blogs",
  className = "",
  onNavigate,
}: BlogSectionProps) {
  const CARDS = BLOGS;
  // Start with index 2 as initial center card, exactly matching the reference cover flow
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  }, []);

  const prevStep = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  }, []);

  // Continuous Step Scrolling from Right to Left (auto-advancing every 3.5s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextStep();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, nextStep]);

  // Exact Framer Cover Flow Geometry Reverse-Engineered from byline-letter.framer.website
  const getCardStyle = (index: number) => {
    const total = CARDS.length;
    let diff = (index - activeIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    let translateX = 0;
    let scale = 1.0;
    let zIndex = 10;
    let opacity = 1;
    let pointerEvents: "auto" | "none" = "auto";

    let txStyle = "0px";
    if (diff === 0) {
      txStyle = "0px";
      scale = 1.0;
      zIndex = 10;
    } else if (diff === 1) {
      txStyle = "var(--tx-1)";
      scale = 0.78;
      zIndex = 9;
    } else if (diff === -1) {
      txStyle = "calc(-1 * var(--tx-1))";
      scale = 0.78;
      zIndex = 9;
    } else if (diff === 2) {
      txStyle = "var(--tx-2)";
      scale = 0.60;
      zIndex = 8;
    } else if (diff === -2) {
      txStyle = "calc(-1 * var(--tx-2))";
      scale = 0.60;
      zIndex = 8;
    } else if (diff === 3) {
      txStyle = "var(--tx-3)";
      scale = 0.60;
      zIndex = 7;
      opacity = 0;
      pointerEvents = "none";
    } else if (diff === -3) {
      txStyle = "calc(-1 * var(--tx-3))";
      scale = 0.60;
      zIndex = 7;
      opacity = 0;
      pointerEvents = "none";
    } else {
      txStyle = diff > 0 ? "1000px" : "-1000px";
      scale = 0.5;
      zIndex = 5;
      opacity = 0;
      pointerEvents = "none";
    }

    return {
      position: "absolute" as const,
      left: "50%",
      bottom: "0px",
      zIndex,
      opacity,
      pointerEvents,
      transformOrigin: "50% 100%",
      transform: `translateX(-50%) translateX(${txStyle}) scale(${scale})`,
      transition: "transform 1s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.5s ease",
      willChange: "transform",
    };
  };

  return (
    <section
      id={id}
      className={`relative w-full bg-white py-4 sm:py-6 lg:py-8 border-b border-[#0F2E53]/10 overflow-hidden ${className}`}
    >
      {/* Header with Headings on the Left, Arrows & All Articles on the Right */}
      <div className="w-full px-6 sm:px-11 lg:px-14 mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
        <RevealAnimation backgroundClass="bg-white" direction="bottom">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#0F2E53] leading-snug">
              Featured Editorial Articles
            </h2>
            <p className="mt-1 text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
              Continuous insights on industrial hazard control, engineering regulations, and technical perspectives.
            </p>
          </div>
        </RevealAnimation>

        {/* Step Navigation Arrows & All Articles towards the Right */}
        <div className="flex items-center justify-end gap-2.5 sm:gap-3 shrink-0 self-end sm:self-auto">
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-full border border-slate-200">
            <button
              type="button"
              onClick={prevStep}
              className="w-8 h-8 rounded-full bg-white text-[#0F2E53] shadow-xs flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="Previous article"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="w-8 h-8 rounded-full bg-white text-[#0F2E53] shadow-xs flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="Next article"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F2E53] hover:text-[#164377] transition-colors pl-1"
          >
            <span>All Articles</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GALLERY STAGE: Reverse-Engineered Framer Cover Flow Carousel */}
      {/* Dynamic Content Cards Styled in Al Ghwasa Theme Blue */}
      {/* ========================================================= */}
      <div
        className="blog-coverflow-stage relative w-full overflow-hidden select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {CARDS.map((card, idx) => {
          const cardStyle = getCardStyle(idx);
          const isCenter = idx === activeIndex;

          return (
            <div
              key={card.slug}
              style={cardStyle}
              onClick={() => setActiveIndex(idx)}
              className="cursor-pointer group w-[265px] sm:w-[290px] lg:w-[335px] xl:w-[350px]"
            >
              <Link
                href={`/blogs/${card.slug}`}
                onClick={(e) => {
                  if (!isCenter) {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
                className="block w-full focus:outline-none"
              >
                {/* Dynamic Technical Editorial Card (Aspect ratio 1800/2400) in Theme Blue */}
                <div
                  className="relative w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-[#071933] via-[#0F2E53] to-[#164377] p-4 sm:p-4.5 lg:p-5 flex flex-col justify-between shadow-[0px_18px_40px_0px_rgba(15,46,83,0.25)] border border-white/15 transition-all duration-300 group-hover:shadow-[0px_24px_50px_0px_rgba(15,46,83,0.38)] group-hover:border-cyan-400/40 text-left select-none"
                  style={{
                    width: "100%",
                    aspectRatio: "1800 / 2400",
                  }}
                >
                  {/* Subtle decorative grid overlay & radial glows */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-[#0284c7]/20 rounded-full blur-2xl pointer-events-none" />

                  {/* Top: Blog Image Thumbnail with Floating Category Badge */}
                  <div className="relative z-10 w-full h-[135px] sm:h-[150px] lg:h-[175px] rounded-xl overflow-hidden mb-2.5 lg:mb-3 border border-white/15 shrink-0 bg-slate-900/60 shadow-inner">
                    <Image
                      src={card.imageUrl || "/images/industrial-facility-clean.jpg"}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 350px, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071933]/90 via-transparent to-black/30 pointer-events-none" />

                    <div className="absolute top-2 left-2 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#071933]/90 backdrop-blur-md border border-white/15 text-[9px] font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Prominent Article Title & Concise Excerpt */}
                  <div className="relative z-10 my-auto py-1">
                    <h4 className="font-bold text-[13px] sm:text-[13.5px] lg:text-[14.5px] leading-snug text-white group-hover:text-cyan-200 transition-colors line-clamp-2 tracking-tight">
                      {card.title}
                    </h4>
                    <p className="mt-1 lg:mt-1.5 text-[10.5px] sm:text-[11px] lg:text-[11.5px] leading-relaxed text-slate-300/85 line-clamp-2 font-normal">
                      {card.excerpt}
                    </p>
                  </div>

                  {/* Bottom: Read Time & Action CTA */}
                  <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                    <div className="flex items-center gap-1 font-mono text-[10px] text-cyan-200/90">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      <span>{card.readTime}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-white group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Subtitle / Story Headline Below Cover */}
                {/* <div className="mt-3 lg:mt-3.5 px-0.5">
                  <h5
                    className="font-serif text-[13px] sm:text-[14px] lg:text-[15px] leading-snug text-[#0F2E53] font-normal tracking-tight line-clamp-2 group-hover:text-[#164377] transition-colors"
                    style={{
                      fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
                    }}
                  >
                    {card.title}
                  </h5>
                </div> */}
              </Link>
            </div>
          );
        })}

        {/* Left & Right Subtle Soft Edge Fades */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-15" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-15" />
      </div>
    </section>
  );
}

// Named alias for backward compatibility
export { BlogSection as BlogsSection };

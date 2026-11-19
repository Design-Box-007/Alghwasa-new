"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BookOpen, ArrowUpRight } from "lucide-react";

interface EditorialCard {
  id: string;
  title: string;
  slug: string;
  imageSrc: string;
}

const CARDS: EditorialCard[] = [
  {
    id: "all-hands",
    title: "The quiet death of the all-hands meeting",
    slug: "combustible-dust-static-electricity-hazards",
    imageSrc: "/images/blogs/all-hands.jpg",
  },
  {
    id: "200-sources",
    title: "How I read 200 sources a week without drowning",
    slug: "enclosed-space-entry-safety-vessels",
    imageSrc: "/images/blogs/200-sources.jpg",
  },
  {
    id: "two-doors",
    title: "The two-door test, and where it breaks",
    slug: "combustible-dust-static-electricity-hazards",
    imageSrc: "/images/blogs/two-doors.jpg",
  },
  {
    id: "hot-dogs",
    title: "Costco's $1.50 hot dog, and the math behind it",
    slug: "marpol-annex-1-bilge-alarm-compliance",
    imageSrc: "/images/blogs/hot-dogs.jpg",
  },
  {
    id: "the-streak",
    title: "How Duolingo turned a streak into a business",
    slug: "enclosed-space-entry-safety-vessels",
    imageSrc: "/images/blogs/duolingo-streak.jpg",
  },
  {
    id: "airasia",
    title: "AirAsia, from an airline to a super app",
    slug: "marpol-annex-1-bilge-alarm-compliance",
    imageSrc: "/images/blogs/airasia.jpg",
  },
  {
    id: "week-without-meetings",
    title: "A week without meetings, and what it did to my calendar",
    slug: "combustible-dust-static-electricity-hazards",
    imageSrc: "/images/blogs/week-without-meetings.jpg",
  },
];

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
  // Start with "Two doors" (index 2) as initial center card, exactly matching the reference screenshot
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

    if (diff === 0) {
      // Center card: full scale (1.0), tallest, centered
      translateX = 0;
      scale = 1.0;
      zIndex = 10;
    } else if (diff === 1) {
      translateX = 247.08;
      scale = 0.78;
      zIndex = 9;
    } else if (diff === -1) {
      translateX = -247.08;
      scale = 0.78;
      zIndex = 9;
    } else if (diff === 2) {
      translateX = 426;
      scale = 0.60;
      zIndex = 8;
    } else if (diff === -2) {
      translateX = -426;
      scale = 0.60;
      zIndex = 8;
    } else if (diff === 3) {
      translateX = 596.4;
      scale = 0.60;
      zIndex = 7;
      opacity = 0;
      pointerEvents = "none";
    } else if (diff === -3) {
      translateX = -596.4;
      scale = 0.60;
      zIndex = 7;
      opacity = 0;
      pointerEvents = "none";
    } else {
      translateX = diff > 0 ? 800 : -800;
      scale = 0.5;
      zIndex = 5;
      opacity = 0;
      pointerEvents = "none";
    }

    return {
      position: "absolute" as const,
      left: "50%",
      bottom: "0px",
      width: "239px",
      zIndex,
      opacity,
      pointerEvents,
      transformOrigin: "50% 100%",
      transform: `translateX(-50%) translateX(${translateX}px) scale(${scale})`,
      transition: "transform 1s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.5s ease",
      willChange: "transform",
    };
  };

  return (
    <section
      id={id}
      className={`relative w-full bg-white py-10 sm:py-14 border-b border-[#0F2E53]/10 overflow-hidden ${className}`}
    >
      {/* Header with Technical Badge & Subtle Step Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0F2E53]/15 bg-[#0F2E53]/5 px-3 py-1 text-xs font-semibold text-[#0F2E53]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Publications &amp; Editorial</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F2E53]">
            Featured Editorial Articles
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 max-w-xl">
            Continuous insights on industrial hazard control, engineering regulations, and technical perspectives.
          </p>
        </div>

        {/* Manual Step Controls */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-full border border-slate-200/80">
            <button
              type="button"
              onClick={prevStep}
              className="w-8 h-8 rounded-full bg-white text-[#0F2E53] shadow-xs flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="w-8 h-8 rounded-full bg-white text-[#0F2E53] shadow-xs flex items-center justify-center hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2E53] hover:text-[#164377] transition-colors pl-2"
          >
            <span>All Articles</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* GALLERY STAGE: Reverse-Engineered Framer Cover Flow Carousel */}
      {/* Exact Match to Reference Image (media_1795091198790_cf4ae967) */}
      {/* ========================================================= */}
      <div
        className="relative w-full overflow-hidden select-none"
        style={{ height: "410px" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {CARDS.map((card, idx) => {
          const cardStyle = getCardStyle(idx);
          const isCenter = idx === activeIndex;

          return (
            <div
              key={card.id}
              style={cardStyle}
              onClick={() => setActiveIndex(idx)}
              className="cursor-pointer group"
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
                {/* Book Cover Illustration (1800x2400 aspect ratio) */}
                <div
                  className="relative w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-[0px_18px_40px_0px_rgba(18,19,22,0.1)] transition-shadow duration-300 group-hover:shadow-[0px_22px_45px_0px_rgba(18,19,22,0.18)]"
                  style={{
                    width: "100%",
                    aspectRatio: "1800 / 2400",
                  }}
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1200px) 317px, (min-width: 810px) 317px, 317px"
                    className="object-cover object-center"
                    priority={isCenter}
                  />
                </div>

                {/* Subtitle / Story Headline Below Cover */}
                <div className="mt-3 px-0.5">
                  <h5
                    className="font-serif text-[13px] sm:text-[14px] leading-snug text-[#121316] font-normal tracking-tight line-clamp-2"
                    style={{
                      fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
                    }}
                  >
                    {card.title}
                  </h5>
                </div>
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

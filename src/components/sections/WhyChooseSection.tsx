"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldAlert,
  ArrowRight,
  Zap,
  Activity,
  Gauge,
  Flame,
  Radio,
  ExternalLink,
  MapPin,
  CheckCircle2,
} from "lucide-react";

interface Hotspot {
  id: string;
  name: string;
  category: string;
  locationLabel: string;
  description: string;
  x: number; // percentage from left
  y: number; // percentage from top
  icon: typeof Zap;
  brandColor: string;
  brandHref: string;
  equipmentType: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "fraser",
    name: "Fraser",
    category: "Anti-Static Techniques",
    locationLabel: "Rooftop Processing Facility",
    description: "Intelligent DC ionizing bars & static neutralizers preventing hazardous spark discharges in processing facilities.",
    x: 16.6,
    y: 36.5,
    icon: Zap,
    brandColor: "#0284c7",
    brandHref: "/brands/fraser-anti-static-techniques",
    equipmentType: "Industrial Static Elimination Bars",
  },
  {
    id: "gastec",
    name: "Gastec",
    category: "Gas Detection & Monitoring",
    locationLabel: "Central Distillation Columns",
    description: "Precision multi-gas detection systems, detector tubes & hazardous vapor sampling pumps for process columns.",
    x: 44.9,
    y: 23.4,
    icon: Activity,
    brandColor: "#dc2626",
    brandHref: "/brands/gastec",
    equipmentType: "Gas Detector Pumps & Sampling Tubes",
  },
  {
    id: "newson-gale",
    name: "Newson Gale",
    category: "Static Grounding & Bonding",
    locationLabel: "Road Tanker Loading Gantry",
    description: "ATEX/IECEx certified Earth-Rite interlocked grounding clamps for road tankers, railcars & solvent transfers.",
    x: 83.5,
    y: 37.3,
    icon: Radio,
    brandColor: "#0284c7",
    brandHref: "/brands/newson-gale",
    equipmentType: "Earth-Rite Tanker Grounding Clamps",
  },
  {
    id: "iep-technologies",
    name: "IEP Technologies",
    category: "Explosion Protection",
    locationLabel: "Vertical Storage Silos",
    description: "Active high-rate explosion suppression, rapid isolation valves & flameless venting for bulk storage silos.",
    x: 28.8,
    y: 56.4,
    icon: Flame,
    brandColor: "#b91c1c",
    brandHref: "/brands/iep-technologies",
    equipmentType: "Explosion Suppression Cannons",
  },
  {
    id: "hydrorex",
    name: "Hydrorex",
    category: "Pressure Testing & Recording",
    locationLabel: "Pipeline Manifold Skid",
    description: "Hydrostatic test benches, circular chart recorders & calibration instruments for pipeline manifold integrity.",
    x: 48.3,
    y: 75.5,
    icon: Gauge,
    brandColor: "#0369a1",
    brandHref: "/brands/hydrorex",
    equipmentType: "Pipeline Chart Recorders & Test Pumps",
  },
  {
    id: "shimada",
    name: "Shimada",
    category: "Explosion-Proof Electrical Equipment",
    locationLabel: "Electrical Control Substation",
    description: "Heavy-duty Zone 1 & Zone 21 flameproof enclosures, junction boxes & explosion-proof control gear.",
    x: 74.7,
    y: 65.1,
    icon: ShieldAlert,
    brandColor: "#be123c",
    brandHref: "/brands/shimada",
    equipmentType: "Ex-d Enclosures & Control Stations",
  },
];

interface WhyChooseSectionProps {
  id?: string;
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

export function WhyChooseSection({
  id = "internal-industries",
  className = "",
  onNavigate,
}: WhyChooseSectionProps) {
  // Default to Newson Gale for initial visual display below image
  const [activeSpotId, setActiveSpotId] = useState<string>("newson-gale");

  const activeSpot = HOTSPOTS.find((s) => s.id === activeSpotId) || HOTSPOTS[2];

  const handleActionClick = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      const el = document.getElementById(`internal-${target}`) || document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id={id}
      className={`relative w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#0F2E53]/10 ${className}`}
    >
      {/* Outer Card Container matching Hero & About design system */}
      <div className="relative w-full rounded-[26px] sm:rounded-[32px] border border-slate-200/90 bg-white p-4 sm:p-6 lg:p-7 shadow-[0_12px_40px_-18px_rgba(15,46,83,0.08)]">

        {/* ========================================================= */}
        {/* ROW 1: Content (Left) & Unobstructed Facility (Right)     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* LEFT SIDE: Heading, Content & Interactive Brand Selectors */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {/* <div>
              <span className="text-xs sm:text-sm font-mono font-semibold text-slate-400 tracking-wider">
                003.
              </span>
            </div> */}

            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#0F2E53] leading-snug">
              Looking for Reliable Marine &amp; Industrial Equipment?
            </h2>

            <div className="space-y-3 pt-1">
              <p className="text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed font-normal">
                Whether you require gas detection equipment, static grounding systems, anti-static
                solutions, explosion protection technologies or specialised marine equipment, Al
                Ghwasa is ready to support your requirements.
              </p>
              <p className="text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed font-normal">
                Get in touch with our team to explore our product portfolio, discuss your technical
                requirements and request a quotation.
              </p>
            </div>

            {/* Quick Interactive Brand Pills */}
            {/* <div className="pt-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Click or hover to highlight facility zones:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {HOTSPOTS.map((spot) => {
                  const isSelected = activeSpotId === spot.id;
                  const Icon = spot.icon;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      onMouseEnter={() => setActiveSpotId(spot.id)}
                      onClick={() => setActiveSpotId(spot.id)}
                      className={`text-left p-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? "bg-[#0F2E53] text-white border-[#0F2E53] shadow-sm scale-[1.02]"
                          : "bg-slate-50 text-[#0F2E53]/80 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-cyan-300" : "text-[#0F2E53]"}`} />
                      <span className="truncate">{spot.name}</span>
                    </button>
                  );
                })}
              </div>
            </div> */}

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleActionClick("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-[#0F2E53] text-white px-5 py-2.5 text-xs sm:text-sm font-semibold shadow-sm hover:bg-[#164377] hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => handleActionClick("brands")}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0F2E53] hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span>All 12+ Brands</span>
              </button>
            </div>
            {/* 2. HOVER / ACTIVE CONTENT PLACED CLEANLY BELOW THE IMAGE */}
            <div className="w-full rounded-2xl bg-slate-50/90 border border-slate-200/90 p-4 shadow-sm transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/70 pb-2.5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: activeSpot.brandColor }}
                  />
                  <span
                    className="text-base font-black tracking-tight"
                    style={{ color: activeSpot.brandColor }}
                  >
                    {activeSpot.name}
                  </span>
                  <span className="text-slate-300">•</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F2E53]">
                    {activeSpot.category}
                  </h4>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
                  <span>{activeSpot.locationLabel}</span>
                  <span className="rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 font-bold text-[10px] border border-emerald-200/60">
                    ATEX / IECEx
                  </span>
                </div>
              </div>

              <div className="pt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                    {activeSpot.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#0F2E53]/80 pt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{activeSpot.equipmentType}</span>
                  </div>
                </div>

                <a
                  href={activeSpot.brandHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:text-[#0369a1] bg-white px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-xs transition-all shrink-0 cursor-pointer self-start sm:self-center"
                >
                  <span>Explore Brand</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Unobstructed Image + Content Displayed Below */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">

            {/* 1. COMPLETELY UNOBSTRUCTED FACILITY IMAGE */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-[24px] overflow-hidden bg-slate-950 border border-slate-200/80 shadow-md group select-none">

              {/* LAYER 1: BASE FACILITY IMAGE (Transforms to Black & White) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/industrial-facility-clean.jpg"
                  alt="Industrial Facility Overview"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center grayscale contrast-[1.12] brightness-[0.82] transition-all duration-700 ease-out"
                />
              </div>

              {/* LAYER 2: SPOTLIGHT COLOR LAYER (Restricted to circle mask around active hotspot) */}
              {activeSpot && (
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-500 ease-out"
                  style={{
                    clipPath: `circle(85px at ${activeSpot.x}% ${activeSpot.y}%)`,
                  }}
                >
                  <Image
                    src="/images/industrial-facility-clean.jpg"
                    alt="Active Facility Zone in Full Color"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle glowing ring rimming the active color area */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle 85px at ${activeSpot.x}% ${activeSpot.y}%, rgba(2, 132, 199, 0.25) 0%, transparent 85%)`,
                    }}
                  />
                </div>
              )}

              {/* LAYER 3: HOTSPOT PINS & RIPPLE MARKERS (No covering overlay cards on image!) */}
              {HOTSPOTS.map((spot) => {
                const isActive = activeSpotId === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onMouseEnter={() => setActiveSpotId(spot.id)}
                    onClick={() => setActiveSpotId(spot.id)}
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none cursor-pointer group/pin"
                    aria-label={`View ${spot.name} - ${spot.category}`}
                  >
                    {/* Pulsing ring animation */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive
                        ? "animate-ping opacity-75 bg-cyan-400"
                        : "opacity-40 group-hover/pin:opacity-80 bg-white"
                        }`}
                    />

                    {/* Outer Target Circle */}
                    <div
                      className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${isActive
                        ? "w-7 h-7 sm:w-8 sm:h-8 bg-[#0284c7] ring-4 ring-cyan-300/60 shadow-lg scale-110"
                        : "w-5 h-5 sm:w-6 sm:h-6 bg-[#0F2E53]/90 ring-2 ring-white/90 shadow-md group-hover/pin:scale-110 group-hover/pin:bg-[#0284c7]"
                        }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </button>
                );
              })}

              {/* Subtle Helper Bar in Corner */}
              <div className="absolute top-2.5 left-3 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-white/90 border border-white/10 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Interactive Facility Spotlight</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Named alias for backward compatibility
export { WhyChooseSection as WhyChoose, WhyChooseSection as ExperienceCentreSection };

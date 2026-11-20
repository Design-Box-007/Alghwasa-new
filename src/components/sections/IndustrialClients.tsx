"use client";

import React from "react";
import Link from "next/link";

interface BrandItem {
  id: string;
  name: string;
  href?: string;
  logo: React.ReactNode;
}

// 1. CS INSTRUMENTS (Teal/Emerald loop mark with "CS INSTRUMENTS" text below)
function LogoCSInstruments() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        className="h-10 sm:h-12 w-auto"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* CS Interconnected Teal Curves */}
        <path
          d="M 58 16 C 40 16 26 27 26 42 C 26 57 40 68 58 68 C 68 68 76 64 82 58 L 74 50 C 70 54 64 57 58 57 C 46 57 37 49 37 42 C 37 34 46 27 58 27 C 68 27 75 32 78 38 L 88 38 C 84 25 73 16 58 16 Z"
          fill="#00B59B"
        />
        <path
          d="M 46 38 C 46 45 52 50 60 50 L 78 50 C 84 50 89 54 89 60 C 89 66 84 70 78 70 L 64 70 L 64 78 L 78 78 C 89 78 98 70 98 60 C 98 49 89 42 78 42 L 60 42 C 55 42 53 40 53 38 C 53 35 56 33 60 33 L 74 33 L 74 25 L 60 25 C 51 25 46 30 46 38 Z"
          fill="#00B59B"
          opacity="0.9"
        />
      </svg>
      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#00B59B] mt-1 uppercase font-sans">
        CS INSTRUMENTS
      </span>
    </div>
  );
}

// 2. GUANG CAI ELECTRIC (Purple circle with red swooshes & text)
function LogoGuangCai() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-2.5">
      <svg
        className="h-10 sm:h-12 w-auto"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Purple circle base */}
        <circle cx="36" cy="46" r="24" fill="#554488" />
        {/* Red dynamic upward swooshes */}
        <path
          d="M 28 32 C 36 24 50 20 62 18 C 54 22 42 27 34 35 Z"
          fill="#E5383B"
        />
        <path
          d="M 32 40 C 42 32 56 28 70 25 C 60 30 48 35 38 43 Z"
          fill="#E5383B"
        />
        <path
          d="M 38 48 C 48 42 60 38 74 36 C 64 40 52 44 44 50 Z"
          fill="#E5383B"
        />
      </svg>
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="text-xs sm:text-sm font-extrabold text-[#233560] tracking-tight">
            GUANG CAI
          </span>
          <span className="text-[8px] font-bold text-[#233560] ml-0.5">®</span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-bold text-[#233560] tracking-[0.2em] uppercase">
          ELECTRIC
        </span>
      </div>
    </div>
  );
}

// 3. BRANNSTROM SWEDEN (Light Blue 3D ribbon 'B' with text below)
function LogoBrannstrom() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        className="h-9 sm:h-11 w-auto"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brannstromGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="bShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#1E3A8A" floodOpacity="0.25" />
          </filter>
        </defs>
        {/* Isometric 3D Ribbon B */}
        <path
          d="M 28 14 L 46 14 C 58 14 66 20 66 28 C 66 33 62 38 56 40 C 64 43 68 49 68 56 C 68 66 58 72 45 72 L 28 72 Z"
          fill="url(#brannstromGrad)"
          filter="url(#bShadow)"
        />
        <path
          d="M 37 23 L 44 23 C 51 23 56 26 56 30 C 56 34 51 37 44 37 L 37 37 Z"
          fill="#FFFFFF"
        />
        <path
          d="M 37 46 L 46 46 C 53 46 58 49 58 54 C 58 59 53 62 46 62 L 37 62 Z"
          fill="#FFFFFF"
        />
      </svg>
      <span className="text-[11px] sm:text-xs font-black tracking-wide text-slate-800 uppercase mt-0.5 font-sans">
        BRANNSTROM
      </span>
      <span className="text-[8px] sm:text-[9px] font-semibold text-slate-500 tracking-widest uppercase">
        SWEDEN
      </span>
    </div>
  );
}

// 4. HANSUN (Blue circular seal with yellow sunburst/helm & HANSUN below)
function LogoHansun() {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        className="h-9 sm:h-11 w-auto"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="35" r="28" stroke="#1E40AF" strokeWidth="4" fill="none" />
        <circle cx="35" cy="35" r="19" fill="#1E40AF" />
        {/* Golden Sunburst / Maritime Spokes */}
        <circle cx="35" cy="35" r="10" fill="#F59E0B" />
        <path
          d="M 35 12 L 35 22 M 35 48 L 35 58 M 12 35 L 22 35 M 48 35 L 58 35 M 19 19 L 26 26 M 44 44 L 51 51 M 19 51 L 26 44 M 44 26 L 51 19"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xs sm:text-sm font-black tracking-wider text-[#1E40AF] uppercase mt-1">
        HANSUN
      </span>
    </div>
  );
}

// 5. Shimada ELECTRIC (Italicized bold "Shimada" with red oval dot on 'i' + "ELECTRIC")
function LogoShimada() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-baseline relative">
        <span className="text-xl sm:text-2xl font-black italic tracking-tight text-slate-700 font-sans">
          Sh
        </span>
        {/* Distinctive red oval dot above i */}
        <div className="relative inline-flex items-baseline">
          <span className="text-xl sm:text-2xl font-black italic tracking-tight text-slate-700">
            ı
          </span>
          <span className="absolute -top-1.5 left-0.5 w-3 h-1.5 bg-[#E11D48] rounded-full rotate-[-12deg]" />
        </div>
        <span className="text-xl sm:text-2xl font-black italic tracking-tight text-slate-700">
          mada
        </span>
      </div>
      <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-[0.25em] uppercase mt-0.5">
        ELECTRIC
      </span>
    </div>
  );
}

// 6. NEWSON GALE (Hazardous Area Static Grounding)
function LogoNewsonGale() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 font-bold">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-extrabold text-[#0F2E53] tracking-tight">
          Newson Gale
        </span>
        <span className="text-[8px] sm:text-[9px] font-semibold text-amber-600 tracking-wider uppercase">
          Static Control
        </span>
      </div>
    </div>
  );
}

// 7. GASTEC (Japanese Precision Gas Detection)
function LogoGastec() {
  return (
    <div className="flex items-center gap-2">
      <div className="px-2.5 py-1 rounded bg-red-600 text-white font-black text-xs sm:text-sm tracking-wider uppercase">
        GASTEC
      </div>
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hidden sm:inline">
        Japan
      </span>
    </div>
  );
}

// 8. FRASER ANTI-STATIC TECHNIQUES
function LogoFraser() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs">
        FR
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-extrabold text-blue-900 tracking-tight">
          FRASER
        </span>
        <span className="text-[8px] font-semibold text-slate-500 uppercase">
          Anti-Static
        </span>
      </div>
    </div>
  );
}

// 9. IEP TECHNOLOGIES
function LogoIEP() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-xs tracking-tighter">
        IEP
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight uppercase">
          IEP Technologies
        </span>
        <span className="text-[8px] font-semibold text-red-600 uppercase">
          Explosion Protection
        </span>
      </div>
    </div>
  );
}

// 10. HYDROREX PRESSURE SYSTEMS
function LogoHydrorex() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-black text-xs">
        HX
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-black text-sky-950 tracking-tight">
          HYDROREX
        </span>
        <span className="text-[8px] font-semibold text-sky-600 uppercase">
          Pressure Testing
        </span>
      </div>
    </div>
  );
}

// 11. TOKA SEIKI JAPAN
function LogoTokaSeiki() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full border-2 border-indigo-600 text-indigo-700 flex items-center justify-center font-bold text-xs">
        TS
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-black text-slate-800 tracking-tight">
          TOKA SEIKI
        </span>
        <span className="text-[8px] font-semibold text-slate-500 uppercase">
          Marine Sensors
        </span>
      </div>
    </div>
  );
}

// 12. ADNOC GROUP
function LogoADNOC() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-black text-[11px]">
        ADN
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
          ADNOC
        </span>
        <span className="text-[8px] font-bold text-cyan-700 uppercase">
          Approved Supplier
        </span>
      </div>
    </div>
  );
}

// 13. SAUDI ARAMCO
function LogoAramco() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-[11px]">
        SA
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
          Saudi Aramco
        </span>
        <span className="text-[8px] font-bold text-emerald-700 uppercase">
          Approved Vendor
        </span>
      </div>
    </div>
  );
}

// 14. DRYDOCKS WORLD
function LogoDrydocks() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-navy text-white flex items-center justify-center font-black text-[10px]">
        DW
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-black text-[#0F2E53] tracking-tight">
          DRYDOCKS WORLD
        </span>
        <span className="text-[8px] font-bold text-slate-500 uppercase">
          Dubai Maritime
        </span>
      </div>
    </div>
  );
}

// 15. DP WORLD
function LogoDPWorld() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-[#00818A] text-white flex items-center justify-center font-black text-[11px]">
        DP
      </div>
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight">
          DP WORLD
        </span>
        <span className="text-[8px] font-bold text-[#00818A] uppercase">
          Terminal Marine
        </span>
      </div>
    </div>
  );
}

const BRANDS_LIST: BrandItem[] = [
  { id: "cs-instruments", name: "CS Instruments", href: "/brands/cs-instruments", logo: <LogoCSInstruments /> },
  { id: "guang-cai", name: "Guang Cai Electric", logo: <LogoGuangCai /> },
  { id: "brannstrom", name: "Brannstrom Sweden", href: "/brands/brannstrom", logo: <LogoBrannstrom /> },
  { id: "hansun", name: "Hansun Marine", href: "/brands/hansun", logo: <LogoHansun /> },
  { id: "shimada", name: "Shimada Electric", href: "/brands/shimada", logo: <LogoShimada /> },
  { id: "newson-gale", name: "Newson Gale", href: "/brands/newson-gale", logo: <LogoNewsonGale /> },
  { id: "gastec", name: "Gastec", href: "/brands/gastec", logo: <LogoGastec /> },
  { id: "fraser", name: "Fraser Anti-Static", href: "/brands/fraser-anti-static-techniques", logo: <LogoFraser /> },
  { id: "iep", name: "IEP Technologies", href: "/brands/iep-technologies", logo: <LogoIEP /> },
  { id: "hydrorex", name: "Hydrorex", href: "/brands/hydrorex", logo: <LogoHydrorex /> },
  { id: "toka-seiki", name: "Toka Seiki", href: "/brands/toka-seiki", logo: <LogoTokaSeiki /> },
  { id: "adnoc", name: "ADNOC Group", logo: <LogoADNOC /> },
  { id: "aramco", name: "Saudi Aramco", logo: <LogoAramco /> },
  { id: "drydocks", name: "Drydocks World", logo: <LogoDrydocks /> },
  { id: "dpworld", name: "DP World", logo: <LogoDPWorld /> },
];

interface IndustrialClientsProps {
  id?: string;
  className?: string;
}

export function IndustrialClients({
  id = "clients",
  className = "",
}: IndustrialClientsProps) {
  return (
    <section
      id={id}
      aria-label="Trusted Marine and Industrial Equipment Brands"
      className={`w-full bg-white py-14 sm:py-20 lg:py-24 border-y border-slate-100 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-12">
        {/* Title matching reference image: "Trusted Marine & Industrial Equipment Brands" */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1f2937] tracking-tight">
          Trusted Marine &amp; Industrial Equipment Brands
        </h2>
      </div>

      {/* Marquee ticker container with subtle edge gradient masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Soft Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Continuous Marquee Track scrolling Right to Left */}
        <div className="flex w-max items-center animate-scroll-left hover:[animation-play-state:paused]">
          {/* First loop of items */}
          <div className="flex items-center gap-10 sm:gap-14 md:gap-18 px-6">
            {BRANDS_LIST.map((brand, idx) => {
              const content = (
                <div
                  key={`b1-${brand.id}-${idx}`}
                  className="shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  {brand.logo}
                </div>
              );

              return brand.href ? (
                <Link
                  key={`b1-${brand.id}-${idx}`}
                  href={brand.href}
                  className="shrink-0 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
                  title={`Explore ${brand.name}`}
                >
                  {brand.logo}
                </Link>
              ) : (
                content
              );
            })}
          </div>

          {/* Second duplicate loop of items for seamless infinite scrolling */}
          <div className="flex items-center gap-10 sm:gap-14 md:gap-18 px-6" aria-hidden="true">
            {BRANDS_LIST.map((brand, idx) => {
              const content = (
                <div
                  key={`b2-${brand.id}-${idx}`}
                  className="shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  {brand.logo}
                </div>
              );

              return brand.href ? (
                <Link
                  key={`b2-${brand.id}-${idx}`}
                  href={brand.href}
                  className="shrink-0 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
                  tabIndex={-1}
                >
                  {brand.logo}
                </Link>
              ) : (
                content
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Named alias for backward compatibility
export { IndustrialClients as IndustrialClientsSection };

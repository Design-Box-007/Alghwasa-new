"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

interface ProductFeature {
  num: string;
  title: string;
  desc: string;
}

interface ProductSpec {
  value: string;
  label: string;
}

interface FeaturedProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  tag: string;
  badge: string;
  colorName: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  auxText: string;
  brandHref: string;
  accentColor: string;
  themeGradient: string;
  renderVisual: () => React.ReactNode;
}

const PRODUCTS: FeaturedProductItem[] = [
  {
    id: "newson-gale",
    name: "Earth-Rite® PLUS Static Ground Monitoring System",
    brand: "Newson Gale",
    category: "Static Grounding & Bonding",
    tag: "Earth-Rite® PLUS",
    badge: "Ex-Stock Dubai",
    colorName: "Stainless / Amber",
    accentColor: "#F59E0B",
    themeGradient: "from-amber-500/10 via-slate-100 to-slate-200/50",
    features: [
      {
        num: "01",
        title: "Zone 0/20 Interlock",
        desc: "Continuous resistance loop checking under 10 Ohms with automatic pump shutdown.",
      },
      {
        num: "02",
        title: "Intrinsically Safe",
        desc: "Universal clamp circuit certified ATEX, IECEx, and cCSAus for hazardous atmospheres.",
      },
      {
        num: "03",
        title: "High-Visibility LED",
        desc: "Pulse-flashing green cluster confirming safe ground before tanker transfer starts.",
      },
    ],
    specs: [
      { value: "10 Ω", label: "max resistance" },
      { value: "Zone 0", label: "ATEX certified" },
      { value: "IP66", label: "enclosure rating" },
    ],
    auxText: "Ex-stock Dubai warehouse · Official manufacturer warranty · ATEX & IECEx certificates included.",
    brandHref: "/brands/newson-gale",
    renderVisual: () => (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Grounding Clamp Visual */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-56 h-56 sm:w-64 sm:h-64 drop-shadow-[0_20px_25px_rgba(15,46,83,0.25)] transition-transform duration-500 hover:scale-105"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Coiled Blue Cable */}
            <path
              d="M30 160 C 50 170, 70 145, 90 165 C 110 185, 130 155, 150 175 C 165 190, 180 175, 185 160"
              stroke="#0284c7"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Stainless Steel Jaws */}
            <path
              d="M65 70 L115 105 L155 75 L145 60 L110 85 L75 55 Z"
              fill="#94a3b8"
              stroke="#475569"
              strokeWidth="2"
            />
            <path
              d="M65 130 L115 95 L155 125 L145 140 L110 115 L75 145 Z"
              fill="#cbd5e1"
              stroke="#475569"
              strokeWidth="2"
            />
            {/* Clamp Pivot & Spring Mechanism */}
            <circle cx="112" cy="100" r="16" fill="#475569" />
            <circle cx="112" cy="100" r="9" fill="#e2e8f0" />
            {/* Tungsten Carbide Contact Tips */}
            <polygon points="65,70 58,74 65,78" fill="#f59e0b" />
            <polygon points="65,130 58,126 65,122" fill="#f59e0b" />
            {/* Amber Status Halo */}
            <circle cx="112" cy="100" r="28" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" className="animate-spin" style={{ animationDuration: "12s" }} />
          </svg>
        </div>
        {/* Soft Contact Shadow */}
        <div className="w-48 h-3.5 rounded-full bg-slate-900/15 blur-md -mt-4 pointer-events-none" />
      </div>
    ),
  },
  {
    id: "gastec",
    name: "Gastec GV-100S Precision Gas Sampling Pump Kit",
    brand: "Gastec",
    category: "Gas Detection & Sampling",
    tag: "Gastec GV-100S",
    badge: "350+ Tubes",
    colorName: "Metallic / Rose",
    accentColor: "#EF4444",
    themeGradient: "from-rose-500/10 via-slate-100 to-slate-200/50",
    features: [
      {
        num: "01",
        title: "Dual-Volume Intake",
        desc: "Exact 50ml or 100ml air volume draw with automatic calibrated stroke lock.",
      },
      {
        num: "02",
        title: "Ceramic Tip Cutter",
        desc: "Safe, diamond-edge ampoule cutting slot with interior glass shard receptacle.",
      },
      {
        num: "03",
        title: "Zero Spark Hazard",
        desc: "Fully non-electrical mechanical stroke with built-in flow finish indicator.",
      },
    ],
    specs: [
      { value: "260 g", label: "pump weight" },
      { value: "350+", label: "substances detected" },
      { value: "0.01 ppm", label: "min detection" },
    ],
    auxText: "Ex-stock Dubai warehouse · Official Gastec Japan calibration certification included.",
    brandHref: "/brands/gastec",
    renderVisual: () => (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Gas Sampling Pump Visual */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-56 h-56 sm:w-64 sm:h-64 drop-shadow-[0_20px_25px_rgba(15,46,83,0.25)] transition-transform duration-500 hover:scale-105"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pump Body Cylinder */}
            <rect x="50" y="86" width="95" height="28" rx="6" fill="#e2e8f0" stroke="#475569" strokeWidth="2.5" />
            <rect x="55" y="90" width="85" height="20" rx="3" fill="#cbd5e1" />
            {/* Measurement Scale Marks */}
            <line x1="75" y1="90" x2="75" y2="100" stroke="#0F2E53" strokeWidth="1.5" />
            <line x1="95" y1="90" x2="95" y2="105" stroke="#ef4444" strokeWidth="2" />
            <line x1="115" y1="90" x2="115" y2="100" stroke="#0F2E53" strokeWidth="1.5" />
            {/* Intake Nose Cone */}
            <path d="M50 90 L30 96 L30 104 L50 110 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            {/* Glass Detector Tube Mounted in Front */}
            <rect x="10" y="98" width="22" height="4" rx="2" fill="#f87171" stroke="#ef4444" strokeWidth="1" />
            {/* Pull Handle & Piston Shaft */}
            <rect x="145" y="96" width="30" height="8" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
            <path d="M175 75 C 182 85, 182 115, 175 125 L168 120 C 173 112, 173 88, 168 80 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
          </svg>
        </div>
        {/* Soft Contact Shadow */}
        <div className="w-48 h-3.5 rounded-full bg-slate-900/15 blur-md -mt-4 pointer-events-none" />
      </div>
    ),
  },
  {
    id: "fraser",
    name: "Fraser NEOS 20 Long-Range 24V Static Eliminator Bar",
    brand: "Fraser",
    category: "Anti-Static Techniques",
    tag: "Fraser NEOS 20",
    badge: "Custom Sizes",
    colorName: "Sapphire / Blue",
    accentColor: "#3B82F6",
    themeGradient: "from-blue-500/10 via-slate-100 to-slate-200/50",
    features: [
      {
        num: "01",
        title: "Reactive Ionization",
        desc: "Dynamic polarity output adapting to electrostatic field charge on fast web lines.",
      },
      {
        num: "02",
        title: "Integrated 24V DC",
        desc: "Compact onboard power unit eliminating hazardous external high-voltage cables.",
      },
      {
        num: "03",
        title: "1500 mm Range",
        desc: "High-power tungsten emitters designed for high-speed industrial converting lines.",
      },
    ],
    specs: [
      { value: "24 V", label: "DC operating" },
      { value: "1500 mm", label: "effective range" },
      { value: "IP67", label: "sealed body" },
    ],
    auxText: "Ex-stock Dubai warehouse · Official Fraser UK warranty & technical integration support.",
    brandHref: "/brands/fraser-anti-static-techniques",
    renderVisual: () => (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Static Eliminator Bar Visual */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-56 h-56 sm:w-64 sm:h-64 drop-shadow-[0_20px_25px_rgba(15,46,83,0.25)] transition-transform duration-500 hover:scale-105"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Extruded Aluminum Profile Body */}
            <rect x="25" y="85" width="150" height="24" rx="4" fill="#1e293b" stroke="#0284c7" strokeWidth="2" />
            <rect x="35" y="90" width="130" height="14" rx="2" fill="#0f172a" />
            {/* Glowing Ionizing Emitters */}
            {[45, 65, 85, 105, 125, 145].map((x, i) => (
              <g key={i}>
                <circle cx={x} cy="97" r="3" fill="#38bdf8" />
                <line x1={x} y1="97" x2={x} y2="120" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.8" />
              </g>
            ))}
            {/* Diagnostic LED Indicator */}
            <circle cx="165" cy="97" r="2.5" fill="#10b981" />
            {/* Industrial Power Connector */}
            <rect x="175" y="91" width="10" height="12" rx="2" fill="#64748b" />
          </svg>
        </div>
        {/* Soft Contact Shadow */}
        <div className="w-48 h-3.5 rounded-full bg-slate-900/15 blur-md -mt-4 pointer-events-none" />
      </div>
    ),
  },
  {
    id: "iep",
    name: "IEP Technologies HRD High-Rate Discharge Suppressor",
    brand: "IEP Technologies",
    category: "Explosion Protection",
    tag: "IEP HRD Suppressor",
    badge: "ATEX Zone 20",
    colorName: "Signal Red / Steel",
    accentColor: "#DC2626",
    themeGradient: "from-red-600/10 via-slate-100 to-slate-200/50",
    features: [
      {
        num: "01",
        title: "Millisecond Action",
        desc: "Rapid propellant activation extinguishing dust fireball inside vessel in under 10ms.",
      },
      {
        num: "02",
        title: "Food-Grade Powders",
        desc: "Sodium bicarbonate extinguishing agent safe for processing food, grain, & pharma.",
      },
      {
        num: "03",
        title: "Real-Time Monitored",
        desc: "Dynamic cylinder pressure sensor notifying plant PLC of active operational readiness.",
      },
    ],
    specs: [
      { value: "< 10 ms", label: "deployment speed" },
      { value: "60 bar", label: "nitrogen charge" },
      { value: "Zone 20", label: "ATEX certified" },
    ],
    auxText: "Ex-stock Dubai warehouse · Official IEP factory inspection certificates & NFPA compliance.",
    brandHref: "/brands/iep-technologies",
    renderVisual: () => (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Explosion Suppression Cannon Visual */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-56 h-56 sm:w-64 sm:h-64 drop-shadow-[0_20px_25px_rgba(15,46,83,0.25)] transition-transform duration-500 hover:scale-105"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Red Pressure Vessel Canister */}
            <rect x="65" y="60" width="70" height="85" rx="35" fill="#dc2626" stroke="#991b1b" strokeWidth="2.5" />
            <rect x="75" y="75" width="50" height="55" rx="10" fill="#ef4444" />
            {/* High-Pressure Flange Mount */}
            <rect x="55" y="145" width="90" height="15" rx="3" fill="#475569" stroke="#334155" strokeWidth="2" />
            {/* Actuator & Quick Discharge Valve */}
            <circle cx="100" cy="55" r="14" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
            {/* Integrated Pressure Gauge */}
            <circle cx="135" cy="85" r="10" fill="#f8fafc" stroke="#475569" strokeWidth="1.5" />
            <line x1="135" y1="85" x2="140" y2="82" stroke="#dc2626" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Soft Contact Shadow */}
        <div className="w-48 h-3.5 rounded-full bg-slate-900/15 blur-md -mt-4 pointer-events-none" />
      </div>
    ),
  },
];

interface FeaturedProductsProps {
  id?: string;
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

export function FeaturedProducts({
  id = "internal-brands",
  className = "",
  onNavigate,
}: FeaturedProductsProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>("newson-gale");

  const currentProduct =
    PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

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
      className={`relative w-full bg-white p-4 sm:p-6 lg:p-8 border-b border-[#0F2E53]/10 ${className}`}
    >
      {/* Outer Card Container matching the reference design */}
      <div className="relative w-full rounded-[26px] sm:rounded-[34px] border border-slate-200/90 bg-white p-5 sm:p-7 shadow-[0_12px_44px_-18px_rgba(15,46,83,0.08)]">
        
        {/* 3-Column Grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* ========================================================= */}
          {/* 1. LEFT COLUMN: 3 Stacked Feature Callouts (01, 02, 03)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-4">
            {currentProduct.features.map((feature, idx) => (
              <div key={feature.num}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {feature.num}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6">
                    {feature.desc}
                  </p>
                </div>
                {idx < currentProduct.features.length - 1 && (
                  <div className="border-b border-slate-200/70 mt-4" />
                )}
              </div>
            ))}
          </div>

          {/* ========================================================= */}
          {/* 2. MIDDLE COLUMN: Product Showcase Stage                  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className={`relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-br ${currentProduct.themeGradient} overflow-hidden flex items-center justify-center p-6 border border-slate-200/60 shadow-inner group transition-all duration-500`}>
              {/* Product Pill Tag in Top-Left (matching "The Daily" in reference) */}
              <div className="absolute top-4 left-4 z-20">
                <span className="rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-slate-800 shadow-2xs border border-slate-200/70">
                  {currentProduct.tag}
                </span>
              </div>

              {/* Dynamic Product Visual Component */}
              <div className="w-full h-full flex items-center justify-center">
                {currentProduct.renderVisual()}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. RIGHT COLUMN: Specs Bar, Variant Selector & Dark CTA   */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-4">
            
            {/* Top Specs Bar: 3 Metric Stats (matching 240g, 32mm, 8mm in reference) */}
            <div>
              <div className="grid grid-cols-3 gap-2 text-left">
                {currentProduct.specs.map((spec) => (
                  <div key={spec.label} className="space-y-0.5">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight block">
                      {spec.value}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-medium leading-tight block">
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtle Horizontal Divider */}
              <div className="border-b border-slate-200/70 my-3.5" />

              {/* Variant Selector Row (matching Colour Chalk/Sky thumbnails in reference) */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="text-slate-400">Model</span>
                  <span className="text-slate-800 font-bold">{currentProduct.colorName}</span>
                </div>

                {/* 4 Selectable Product Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {PRODUCTS.map((prod) => {
                    const isSelected = selectedProductId === prod.id;
                    return (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => setSelectedProductId(prod.id)}
                        className={`relative rounded-xl p-2 flex flex-col items-center justify-center aspect-square transition-all cursor-pointer ${
                          isSelected
                            ? "ring-2 ring-slate-900 border-transparent bg-white shadow-xs scale-105"
                            : "border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300"
                        }`}
                        aria-label={`Select ${prod.name}`}
                      >
                        <div
                          className="w-3.5 h-3.5 rounded-full"
                          style={{ backgroundColor: prod.accentColor }}
                        />
                        <span className="text-[9px] font-bold text-slate-600 mt-1 truncate max-w-full">
                          {prod.brand.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Section: Delivery/Warranty Text & Dark Pill CTA Button */}
            <div className="space-y-3 pt-2">
              <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                {currentProduct.auxText}
              </p>

              {/* Primary Dark Pill Button with White Pill Badge (matching Shop the Daily in reference) */}
              <button
                type="button"
                onClick={() => handleActionClick("contact")}
                className="w-full rounded-full bg-[#0F2E53] hover:bg-[#091D36] text-white pl-5 pr-2 py-2 flex items-center justify-between text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Request Equipment Quote</span>
                <span className="rounded-full bg-white text-[#0F2E53] px-3 py-1 text-xs font-extrabold shadow-xs group-hover:scale-105 transition-transform">
                  {currentProduct.badge}
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Named alias for backward compatibility
export { FeaturedProducts as FeaturedProductsSection };

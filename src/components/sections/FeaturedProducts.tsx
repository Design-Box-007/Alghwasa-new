"use client";

import { useState, useEffect } from "react";

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
  accentColor: string;
  themeGradient: string;
  imageUrl: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  auxText: string;
}

const PRODUCTS: FeaturedProductItem[] = [
  {
    id: "newson-gale",
    name: "Cen-Stat™ Static Grounding Cable Reels",
    brand: "Newson Gale",
    category: "Static Grounding & Bonding",
    tag: "Cen-Stat™ Cable Reels",
    badge: "Ex-Stock Dubai",
    colorName: "Industrial / Safety Amber",
    accentColor: "#F59E0B",
    themeGradient: "from-amber-500/10 via-slate-50 to-slate-200/50",
    imageUrl: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jun_21_2026_02_37_14_PM_eoqjcf_CPs9Dx3-M.png",
    features: [
      {
        num: "01",
        title: "Auto-Retracting Reel",
        desc: "Smooth self-retracting spring-driven drum mechanism keeping static cables organized and protected.",
      },
      {
        num: "02",
        title: "Hytrel® Coated Cable",
        desc: "Chemical-resistant, anti-static spiral sheath with high mechanical tensile durability.",
      },
      {
        num: "03",
        title: "ATEX Zone 0/20 Rated",
        desc: "Certified for safe deployment in high-hazard flammable vapor, gas, and combustible dust areas.",
      },
      {
        num: "04",
        title: "Heavy-Duty Clamps",
        desc: "Stainless steel Cen-Stat grounding clamps with tungsten carbide contact points for paint piercing.",
      },
      {
        num: "05",
        title: "Controlled Tension Stop",
        desc: "Positive ratchet locking mechanism holds cable at desired operational extension.",
      },
      {
        num: "06",
        title: "Corrosion Resistance",
        desc: "Robust epoxy powder-coated steel housing designed for marine and petrochemical environments.",
      },
    ],
    specs: [
      { value: "30 m", label: "max cable length" },
      { value: "Zone 0/20", label: "ATEX / IECEx" },
      { value: "< 10 Ω", label: "loop resistance" },
    ],
    auxText: "Ex-stock Dubai warehouse · Official manufacturer warranty · ATEX & IECEx certificates included.",
  },
  {
    id: "gastec",
    name: "Gas Sampling Pump GV100S / GV100LS / GV110S",
    brand: "Gastec",
    category: "Gas Detection & Sampling",
    tag: "Gastec GV Series",
    badge: "350+ Tubes",
    colorName: "Precision / Metallic Blue",
    accentColor: "#EF4444",
    themeGradient: "from-rose-500/10 via-slate-50 to-slate-200/50",
    imageUrl: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jun_21_2026_06_24_08_PM_cjcdfb_bxv18dNEV.png",
    features: [
      {
        num: "01",
        title: "Dual-Volume Intake",
        desc: "Full stroke (100 ml) and half stroke (50 ml) with automatic calibrated stroke lock.",
      },
      {
        num: "02",
        title: "Ceramic Tip Cutter",
        desc: "Safe, diamond-edge ampoule cutting slot with interior glass shard storage receptacle.",
      },
      {
        num: "03",
        title: "Zero Spark Hazard",
        desc: "Non-sparking ABS resin body with mechanical stroke requiring zero electrical power.",
      },
      {
        num: "04",
        title: "Flow Finish Indicator",
        desc: "Integral visual vacuum indicator confirming completion of precise sample draw.",
      },
      {
        num: "05",
        title: "Field Tested Durability",
        desc: "Ergonomic contoured handle providing effortless one-hand operation in confined spaces.",
      },
      {
        num: "06",
        title: "600+ Gas Library",
        desc: "Direct compatibility with full range of precision GASTEC colorimetric detector tubes.",
      },
    ],
    specs: [
      { value: "270 g", label: "pump weight" },
      { value: "50/100 ml", label: "stroke volume" },
      { value: "600+", label: "vapors detected" },
    ],
    auxText: "Ex-stock Dubai warehouse · Official Gastec Japan calibration certification included.",
  },
  {
    id: "fraser",
    name: "1250 / 1250-S AC Static Eliminators",
    brand: "Fraser",
    category: "Anti-Static Techniques",
    tag: "Fraser 1250 Series",
    badge: "Custom Lengths",
    colorName: "Sapphire / Electric Blue",
    accentColor: "#3B82F6",
    themeGradient: "from-blue-500/10 via-slate-50 to-slate-200/50",
    imageUrl: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jun_23_2026_02_08_21_PM_tmdx20_xr7rIclgG.png",
    features: [
      {
        num: "01",
        title: "Stay-Sharp Emitters",
        desc: "Pure titanium and tungsten emitter pins pitched at 10mm for high-density ion output.",
      },
      {
        num: "02",
        title: "Resistive Coupled Safety",
        desc: "Internal safety resistance limits maximum current below 50 µA for shockless operation.",
      },
      {
        num: "03",
        title: "Anodised Aluminium Body",
        desc: "Rigid extruded profile with sealed epoxy resin encapsulation protecting inner electronics.",
      },
      {
        num: "04",
        title: "Hi-Flex Screened Cable",
        desc: "Shielded 30 kV high-voltage cable prevents electromagnetic interference on machine controls.",
      },
      {
        num: "05",
        title: "Flexible Mounting",
        desc: "Choice of fixed mounting slots (1250) or adjustable slide studs (1250-S) along the bar.",
      },
      {
        num: "06",
        title: "Cleanroom Compatible",
        desc: "ISO Class 5 cleanroom certified for pharmaceutical, packaging, and high-speed web lines.",
      },
    ],
    specs: [
      { value: "6 kV", label: "operating voltage" },
      { value: "20-150 mm", label: "optimal distance" },
      { value: "IP66", label: "protection rating" },
    ],
    auxText: "Ex-stock Dubai warehouse · Official Fraser UK warranty & technical integration support.",
  },
  {
    id: "iep",
    name: "Spark Detector SD300-EX and SDF300-EX",
    brand: "IEP Technologies",
    category: "Explosion Protection",
    tag: "Atexon® SD300-EX",
    badge: "ATEX Certified",
    colorName: "Signal Red / Industrial Steel",
    accentColor: "#DC2626",
    themeGradient: "from-red-600/10 via-slate-50 to-slate-200/50",
    imageUrl: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jun_21_2026_11_14_58_AM_wgyktx_X5II5f9U0.png",
    features: [
      {
        num: "01",
        title: "Broad Spectral Range",
        desc: "VIS/NIR/IR optical sensor detecting hot particles and embers through dense material layers.",
      },
      {
        num: "02",
        title: "180° Panoramic Coverage",
        desc: "Flush lens geometry ensures complete cross-sectional duct monitoring without blind spots.",
      },
      {
        num: "03",
        title: "Daylight Insensitive",
        desc: "Specialized infrared filtering eliminates false triggers from ambient and industrial lighting.",
      },
      {
        num: "04",
        title: "Direct Suppression Link",
        desc: "Instantaneous millisecond signal transmission activating automated water mist extinguishers.",
      },
      {
        num: "05",
        title: "Self-Diagnostic Optics",
        desc: "Continuous internal lens cleanliness testing and sensor health feedback to plant PLC.",
      },
      {
        num: "06",
        title: "Severe Environment Rated",
        desc: "Heavy-duty stainless steel sensor head rated for high-temperature and abrasive pneumatic lines.",
      },
    ],
    specs: [
      { value: "< 1 ms", label: "detection response" },
      { value: "180°", label: "field of view" },
      { value: "Zone 20", label: "ATEX rating" },
    ],
    auxText: "Ex-stock Dubai warehouse · Official IEP factory inspection certificates & NFPA compliance.",
  },
  {
    id: "hydrorex",
    name: "Circular Chart Recorder Papers & Pens",
    brand: "Hydrorex",
    category: "Pressure Testing & Recording",
    tag: "Hydrorex Charts & Pens",
    badge: "Up to 30K PSI",
    colorName: "Marine Cyan / Ocean",
    accentColor: "#0284C7",
    themeGradient: "from-cyan-500/10 via-slate-50 to-slate-200/50",
    imageUrl: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jun_19_2026_02_25_34_PM_vxf4pk_4JNK3Tx0f.png",
    features: [
      {
        num: "01",
        title: "Precision Calibration",
        desc: "Calibrated circular grid lines for precise pressure, temperature, and flow verification.",
      },
      {
        num: "02",
        title: "Universal Recorder Fit",
        desc: "Directly compatible with Barton, Palmer, OGME, Hydrorex, and Sonceboz chart drives.",
      },
      {
        num: "03",
        title: "Multiple Rotations",
        desc: "Available in 1-hour, 4-hour, 24-hour, and 7-day clock rotations for hydrostatic tests.",
      },
      {
        num: "04",
        title: "High-Fidelity Ink Flow",
        desc: "Smooth disposable fiber-tipped recorder pens preventing blotches, skips, or ink runs.",
      },
      {
        num: "05",
        title: "Moisture-Resistant Paper",
        desc: "Heavyweight archival stock resists humidity, oil mist, and field testing conditions.",
      },
      {
        num: "06",
        title: "Boxed in 100s",
        desc: "Cleanly packaged in reinforced moisture-barrier boxes with batch calibration certificates.",
      },
    ],
    specs: [
      { value: "30,000 PSI", label: "max pressure" },
      { value: "12\" / 8\"", label: "chart diameter" },
      { value: "1h - 7d", label: "rotation periods" },
    ],
    auxText: "Ex-stock Dubai warehouse · Factory calibrated for Barton, Palmer, OGME & Hydrorex recorders.",
  },
  {
    id: "shimada",
    name: "SFC Series Ex-Proof Flexible Conduits",
    brand: "Shimada",
    category: "Hazardous Area Electrical",
    tag: "Shimada SFC Conduits",
    badge: "Zone 1 & 21",
    colorName: "Metallic / Charcoal Slate",
    accentColor: "#475569",
    themeGradient: "from-slate-500/10 via-slate-50 to-slate-200/50",
    imageUrl: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jun_21_2026_11_35_16_AM_oujykq_8ikl4G5Nh.png",
    features: [
      {
        num: "01",
        title: "Heavy-Duty Flameproof",
        desc: "Certified Ex d IIC Gb for explosive gas atmospheres and Ex tb IIIC Db for combustible dust.",
      },
      {
        num: "02",
        title: "Vibration Damping",
        desc: "Accommodates severe motor vibration, piping movement, and thermal expansion safely.",
      },
      {
        num: "03",
        title: "Stainless Steel Core",
        desc: "Inner spiral metallic core wrapped in reinforced wire braiding and oil-resistant elastomer.",
      },
      {
        num: "04",
        title: "Marine Grade Fittings",
        desc: "Corrosion-resistant brass or stainless steel male/female union end connections.",
      },
      {
        num: "05",
        title: "High Ingress Sealing",
        desc: "IP66/IP67 rated joints preventing moisture, marine salt spray, and particulate ingress.",
      },
      {
        num: "06",
        title: "Zone 1 & 21 Approved",
        desc: "Ideal for hazardous terminal pumps, offshore deck junction boxes, and process skids.",
      },
    ],
    specs: [
      { value: "Ex d IIC", label: "explosion rating" },
      { value: "IP66/IP67", label: "ingress protection" },
      { value: "-20 to +80°C", label: "temperature" },
    ],
    auxText: "Ex-stock Dubai warehouse · Manufactured by SHIMADA Electric Japan · Authorized GCC Agent.",
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
}: FeaturedProductsProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Automatically cycle through products every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PRODUCTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentProduct = PRODUCTS[currentIdx];

  return (
    <section
      id={id}
      className={`relative w-full bg-white py-4 sm:py-6 lg:py-8 px-3 sm:px-6 lg:px-8 border-b border-[#0F2E53]/10 ${className}`}
    >
      {/* Outer Section Card (No shadow, clean border) */}
      <div className="relative w-full rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50/70 p-3 sm:p-5 lg:p-6">

        {/* 3-Column Responsive Layout:
            - Mobile: Center Stage (top), Pointers 1-3 (middle), Pointers 4-6 (bottom)
            - Tablet: Center Stage (full width), Pointers 1-3 & 4-6 (side-by-side)
            - Desktop: 3 Columns (Left 1-3, Center Product in White, Right 4-6) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* ========================================================= */}
          {/* 1. LEFT FLANK (BLUE): Pointers 1 - 3                      */}
          {/* ========================================================= */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 order-2 lg:order-1 flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#0F2E53] p-5 sm:p-6 text-white border border-[#164377]/80">
            <div className="space-y-4">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block pb-2 border-b border-white/10">
                Core Specifications (01 - 03)
              </span>

              {currentProduct.features.slice(0, 3).map((feature, idx) => (
                <div key={feature.num} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/10 text-cyan-300 font-mono text-xs font-bold shrink-0">
                      {feature.num}
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-blue-100/80 leading-relaxed pl-8">
                    {feature.desc}
                  </p>
                  {idx < 2 && <div className="border-b border-white/10 my-3" />}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 mt-4 flex items-center justify-between text-[11px] text-blue-200/80">
              <span className="font-medium">{currentProduct.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. CENTER STAGE (PURE WHITE): Brand Name & Product Image  */}
          {/* ========================================================= */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-between rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-5 sm:p-7 min-h-[400px] sm:min-h-[460px] lg:min-h-[480px]">
            {/* Brand Name Placed Above Image in White Area */}
            <div className="w-full text-center space-y-1 mb-2">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0284c7]">
                  {currentProduct.brand}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  {currentProduct.category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#0F2E53] tracking-tight leading-snug max-w-xl mx-auto">
                {currentProduct.name}
              </h3>
            </div>

            {/* High-Resolution Product Image on Pure White Background (No drop shadow) */}
            <div className="relative w-full flex-1 flex items-center justify-center p-3 sm:p-4 min-h-[240px] sm:min-h-[280px]">
              <img
                src={currentProduct.imageUrl}
                alt={`${currentProduct.brand} - ${currentProduct.name}`}
                className="max-h-[240px] sm:max-h-[300px] w-auto max-w-full object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
                loading="eager"
              />
            </div>

            {/* Auto-Rotating Progress Dots (Every Few Secs) */}
            <div className="w-full flex flex-col items-center gap-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-center gap-2">
                {PRODUCTS.map((prod, idx) => {
                  const isActive = idx === currentIdx;
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setCurrentIdx(idx)}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                        ? "w-7 h-1.5 bg-[#0F2E53]"
                        : "w-1.5 h-1.5 bg-slate-200 hover:bg-slate-400"
                        }`}
                      aria-label={`View ${prod.brand}`}
                      title={prod.brand}
                    />
                  );
                })}
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Auto-updating · {currentProduct.brand}
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. RIGHT FLANK (BLUE): Pointers 4 - 6                     */}
          {/* ========================================================= */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 order-3 lg:order-3 flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#0F2E53] p-5 sm:p-6 text-white border border-[#164377]/80">
            <div className="space-y-4">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block pb-2 border-b border-white/10">
                Key Features (04 - 06)
              </span>

              {currentProduct.features.slice(3, 6).map((feature, idx) => (
                <div key={feature.num} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white/10 text-cyan-300 font-mono text-xs font-bold shrink-0">
                      {feature.num}
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-blue-100/80 leading-relaxed pl-8">
                    {feature.desc}
                  </p>
                  {idx < 2 && <div className="border-b border-white/10 my-3" />}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 mt-4 flex items-center justify-between text-[11px] text-blue-200/80">
              <span className="truncate">{currentProduct.tag}</span>
              <span className="text-[10px] uppercase font-bold text-cyan-300">Certified</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Named alias for backward compatibility
export { FeaturedProducts as FeaturedProductsSection };

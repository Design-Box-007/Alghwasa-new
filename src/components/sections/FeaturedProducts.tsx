"use client";

import { useState } from "react";

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
      className={`relative w-full bg-white py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#0F2E53]/10 ${className}`}
    >
      {/* Outer Card Container matching the reference design */}
      <div className="relative w-full rounded-[26px] sm:rounded-[34px] border border-slate-200/90 bg-white p-5 sm:p-7 shadow-[0_12px_44px_-18px_rgba(15,46,83,0.08)]">

        {/* 3-Column Grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* ========================================================= */}
          {/* 1. LEFT COLUMN: All 6 Feature Callouts (01 through 06)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-3">
            {currentProduct.features.map((feature, idx) => (
              <div key={feature.num}>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {feature.num}
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug pl-6">
                    {feature.desc}
                  </p>
                </div>
                {idx < currentProduct.features.length - 1 && (
                  <div className="border-b border-slate-100 my-2.5" />
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

              {/* Real High-Res Product Image from ImageKit */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={currentProduct.imageUrl}
                  alt={currentProduct.name}
                  className="max-h-[280px] sm:max-h-[340px] w-auto max-w-full object-contain drop-shadow-[0_20px_35px_rgba(15,46,83,0.18)] transition-transform duration-500 hover:scale-105 select-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. RIGHT COLUMN: Specs Bar, 6 Variant Selectors & Dark CTA*/}
          {/* ========================================================= */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-4">

            {/* Top Specs Bar: 3 Metric Stats */}
            <div>
              <div className="grid grid-cols-3 gap-2 text-left">
                {currentProduct.specs.map((spec) => (
                  <div key={spec.label} className="space-y-0.5">
                    <span className="text-lg sm:text-xl lg:text-lg xl:text-xl font-bold text-slate-900 tracking-tight block">
                      {spec.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] lg:text-[10px] text-slate-400 uppercase font-medium leading-tight block truncate">
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtle Horizontal Divider */}
              <div className="border-b border-slate-200/70 my-3.5" />

              {/* Variant Selector Row */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-2.5">
                  <span className="text-slate-400">Selected Brand</span>
                  <span className="text-slate-900 font-bold">{currentProduct.brand}</span>
                </div>

                {/* 6 Selectable Product Thumbnails - 3 per row in 2 rows on large screens */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:gap-2">
                  {PRODUCTS.map((prod) => {
                    const isSelected = selectedProductId === prod.id;
                    return (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => setSelectedProductId(prod.id)}
                        className={`relative rounded-xl p-2 sm:p-2.5 lg:p-1.5 flex flex-col items-center justify-center aspect-square transition-all cursor-pointer ${isSelected
                            ? "ring-2 ring-slate-900 border-transparent bg-white shadow-xs scale-105"
                            : "border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300"
                          }`}
                        aria-label={`Select ${prod.name}`}
                        title={prod.name}
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:w-11 xl:h-11 flex items-center justify-center p-0.5">
                          <img
                            src={prod.imageUrl}
                            alt={prod.brand}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-xs sm:text-[13px] lg:text-[10px] xl:text-[11px] font-bold text-slate-700 mt-1 sm:mt-1.5 lg:mt-1 truncate max-w-full">
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

              {/* Primary Dark Pill Button with White Pill Badge */}
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

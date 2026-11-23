"use client";

import React from "react";

interface BrandItem {
  name: string;
  src: string;
}

const BRAND_LOGOS: BrandItem[] = [
  {
    name: "GASTEC Japan",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/gastec_k4ulsd_pD2vTAdCJ.png",
  },
  {
    name: "Arges Marine",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/arges_marine_ksdund_xE_o1W8bR.png",
  },
  {
    name: "Fraser Anti-Static Techniques",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/fraser-logo_uzsqoy_VNbmrTI4k.jpg",
  },
  {
    name: "CS Instruments",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/cs_instrument_logo_nlry4w_SnxIRgARW.jpg",
  },
  {
    name: "Guang Cai Electric",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/GCE_Logo_dsplh8_7ou6beMqA.jpg",
  },
  {
    name: "Brannstrom Sweden",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/Brannstrom_sweden_vertical_large_rbztvm_3j-jKPJxl.png",
  },
  {
    name: "HANSUN Marine",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/HANSUN-LOGO_uzf8xk_3-5LX21yP.jpg",
  },
  {
    name: "Shimada Electric",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/shimada_logo_qmhv8e_k19eEZgDH.webp",
  },
  {
    name: "Georim",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/georim_logo_miarxx_Lto-xHeCG.jpg",
  },
  {
    name: "Xtronica",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/xtronica_logo_ylzs0f_ECAoH_bsm.png",
  },
  {
    name: "Toka Seiki Japan",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/toka_rhpnug_3IkuzK3Rc.png",
  },
  {
    name: "Safetec",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/safetec-logo_fmiku2_HnzXJhFm_.png",
  },
  {
    name: "Newson Gale",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/ChatGPT_Image_Jul_30_2026_02_11_00_PM_vnjgxa_cSefIwlbH.png",
  },
  {
    name: "Nippon Hakuyo Electronics",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/HSN_Logo_e7ouef_my0F6vIt-.jpg",
  },
  {
    name: "Hydrorex",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/hydrorex_logo_qtvfm7_XdtSAmk-4.jpg",
  },
  {
    name: "Seahover Technologies",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/seahover_technologies_fyhnkf_SuMk8XmEB.png",
  },
  {
    name: "Alla France",
    src: "https://ik.imagekit.io/ocxgdj8ih/ghwasa-migrated/alla-france-logo_tup7wf_nmeX3XgsP.jpg",
  },
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
        <div className="animate-marquee flex flex-nowrap w-max items-center gap-[40px] md:gap-[80px] hover:[animation-play-state:paused]">
          {/* First loop of ImageKit brand items */}
          {BRAND_LOGOS.map((brand, idx) => (
            <div
              key={`b1-${idx}-${brand.name}`}
              className="flex shrink-0 h-[84px] w-[160px] md:w-[220px] items-center justify-center md:h-[108px] select-none"
            >
              <img
                src={brand.src}
                alt={brand.name}
                loading="lazy"
                className="h-full w-full object-contain opacity-70 transition-opacity hover:opacity-100 mix-blend-multiply pointer-events-none"
              />
            </div>
          ))}

          {/* Second duplicate loop of ImageKit brand items for seamless infinite scroll */}
          {BRAND_LOGOS.map((brand, idx) => (
            <div
              key={`b2-${idx}-${brand.name}`}
              aria-hidden="true"
              className="flex shrink-0 h-[84px] w-[160px] md:w-[220px] items-center justify-center md:h-[108px] select-none"
            >
              <img
                src={brand.src}
                alt={brand.name}
                loading="lazy"
                className="h-full w-full object-contain opacity-70 transition-opacity hover:opacity-100 mix-blend-multiply pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Named alias for backward compatibility
export { IndustrialClients as IndustrialClientsSection };

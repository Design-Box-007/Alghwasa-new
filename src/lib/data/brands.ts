export interface BrandProduct {
  name: string;
  category: string;
  description: string;
  specs?: string[];
}

export interface Brand {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  origin: string;
  industry: string;
  accentColor: string;
  website?: string;
  featuredProduct: BrandProduct;
}

export const BRANDS: Brand[] = [
  {
    name: "Newson Gale",
    slug: "newson-gale",
    tagline: "Static Grounding & Bonding Hazardous Area Solutions",
    description: "Global leaders in hazardous area static control systems, preventing electrostatic sparks in explosive atmospheres.",
    origin: "United Kingdom",
    industry: "Static Grounding & Explosion Protection",
    accentColor: "#F59E0B",
    featuredProduct: {
      name: "Earth-Rite® PLUS Static Ground Monitoring System",
      category: "Grounding Systems",
      description: "Precision static grounding system with continuous ground loop monitoring and interlock capabilities for road tankers and process vessels.",
      specs: ["ATEX / IECEx certified for Zone 0/20", "Intrinsically safe monitoring", "Red/Green high-visibility LED cluster"],
    },
  },
  {
    name: "Gastec",
    slug: "gastec",
    tagline: "Precision Gas Detection Tubes & Sampling Pumps",
    description: "Internationally renowned Japanese manufacturer of direct-reading gas detector tubes and air sampling systems.",
    origin: "Japan",
    industry: "Gas Detection & Air Sampling",
    accentColor: "#EF4444",
    featuredProduct: {
      name: "Gastec GV-100S Gas Sampling Pump Kit",
      category: "Gas Detection",
      description: "Ergonomic, lightweight manual gas sampling pump delivering exact 50ml or 100ml air volume for detector tube measurement.",
      specs: ["Dual volume 50ml/100ml intake", "Built-in tip cutter", "Shock-resistant body design"],
    },
  },
  {
    name: "Fraser Anti-Static Techniques",
    slug: "fraser-anti-static-techniques",
    tagline: "Industrial Static Elimination & Generation Equipment",
    description: "Cutting-edge electrostatic elimination bars, blowers, and static control solutions for manufacturing and printing lines.",
    origin: "United Kingdom",
    industry: "Anti-Static & Surface Cleaning",
    accentColor: "#3B82F6",
    featuredProduct: {
      name: "NEOS 20 Long Range 24V Static Eliminator Bar",
      category: "Static Elimination",
      description: "Intelligent industrial ionising bar with built-in electronics providing effective neutralisation up to 1500mm distance.",
      specs: ["24V DC integrated power", "Adjustable frequency and balance", "LED status & cleanliness indicator"],
    },
  },
  {
    name: "IEP Technologies",
    slug: "iep-technologies",
    tagline: "Comprehensive Explosion Suppression & Isolation Systems",
    description: "World leaders in industrial explosion protection, providing active suppression, venting, and chemical isolation.",
    origin: "USA / Europe",
    industry: "Explosion Protection",
    accentColor: "#DC2626",
    featuredProduct: {
      name: "HRD (High Rate Discharge) Explosion Suppressor",
      category: "Explosion Suppression",
      description: "Ultra-fast explosion suppression unit that discharges extinguishing powder within milliseconds of deflagration detection.",
      specs: ["Millisecond deployment speed", "Food and pharmaceutical grade powders", "Integrated pressure monitoring"],
    },
  },
  {
    name: "Hydrorex",
    slug: "hydrorex",
    tagline: "High Pressure Testing Equipment & Power Units",
    description: "Specialized hydrostatic pressure testing systems, hydraulic power packs, and offshore calibration equipment.",
    origin: "Europe",
    industry: "Pressure Testing & Hydraulics",
    accentColor: "#0284C7",
    featuredProduct: {
      name: "HPU-700 Portable Hydrostatic Test Rig",
      category: "Pressure Testing",
      description: "Self-contained air-driven liquid pressure testing unit capable of generating hydraulic pressures up to 10,000 PSI.",
      specs: ["Air driven hydraulic pump", "Stainless steel pressure manifold", "Precision dual-scale pressure gauge"],
    },
  },
  {
    name: "Shimada",
    slug: "shimada",
    tagline: "Explosion-Proof Electrical & Lighting Fixtures",
    description: "Certified explosion-proof luminaires, junction boxes, and electrical control stations for hazardous Zone 1 and Zone 2 environments.",
    origin: "Japan",
    industry: "Hazardous Area Electrical",
    accentColor: "#8B5CF6",
    featuredProduct: {
      name: "EX-FL Series Explosion-Proof LED Floodlight",
      category: "Hazardous Lighting",
      description: "Heavy-duty copper-free aluminum alloy LED floodlight designed for offshore platforms and petrochemical plants.",
      specs: ["Ex d IIB+H2 T6 Gb certification", "High lumen efficiency LED chips", "Marine grade epoxy powder coating"],
    },
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}

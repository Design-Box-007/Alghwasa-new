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
    name: "CS Instruments",
    slug: "cs-instruments",
    tagline: "Compressed Air & Industrial Gas Measurement Technology",
    description: "Innovative German measurement solutions for dew point, flow, consumption, and leak detection in compressed air and industrial gases.",
    origin: "Germany",
    industry: "Flow & Dew Point Measurement",
    accentColor: "#10B981",
    featuredProduct: {
      name: "VA 500 Compact Consumption & Flow Sensor",
      category: "Flow Measurement",
      description: "Precision thermal mass flow sensor for compressed air and industrial gas lines with Modbus and 4-20mA output.",
      specs: ["Thermal mass flow measurement", "Integrated display and keyboard", "Installation under pressure via ball valve"],
    },
  },
  {
    name: "Toka Seiki",
    slug: "toka-seiki",
    tagline: "Marine & Industrial Gas Detectors and Safety Sensors",
    description: "Precision Japanese gas detection instruments specialized in toxic, combustible, and oxygen gas safety for marine vessels.",
    origin: "Japan",
    industry: "Marine Safety & Gas Monitoring",
    accentColor: "#6366F1",
    featuredProduct: {
      name: "TX-620 Portable Multi-Gas Detector",
      category: "Portable Gas Detectors",
      description: "Rugged multi-gas detector for enclosed space entry on marine tankers, bulk carriers, and offshore rigs.",
      specs: ["Detects O2, LEL, H2S, and CO", "Marine classification society approved", "IP67 waterproof and dustproof"],
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
  {
    name: "Nippon Hakuyo Electronics Japan",
    slug: "nippon-hakuyo-electronics-japan",
    tagline: "Marine Telecommunications & Navigation Systems",
    description: "Japanese manufacturer of marine telephones, public address systems, and safety electronics compliant with SOLAS standards.",
    origin: "Japan",
    industry: "Marine Communication & SOLAS",
    accentColor: "#4F46E5",
    featuredProduct: {
      name: "Marine Common Battery Telephone Station",
      category: "Marine Telephony",
      description: "Waterproof, shock-resistant common battery telephone unit designed for engine rooms and open deck mounting.",
      specs: ["IP56 weather resistant enclosure", "Noise-cancelling handset microphone", "Integrated high-output call buzzer"],
    },
  },
  {
    name: "Alla France",
    slug: "alla-france",
    tagline: "Precision Marine Thermometers & Hydrometers",
    description: "Historic French manufacturer of certified hydrometers, bimetallic thermometers, and laboratory instruments for marine bunker fuel testing.",
    origin: "France",
    industry: "Precision Hydrometry & Thermometry",
    accentColor: "#065F46",
    featuredProduct: {
      name: "ASTM Certified Bunker Fuel Hydrometer",
      category: "Density Measurement",
      description: "Calibrated precision glass hydrometer for accurate density measurement of marine residual fuels and bunker oils.",
      specs: ["Compliant with ASTM D287 / ISO 3675", "Factory calibration certificate included", "Shot metal ballast for rapid stabilisation"],
    },
  },
  {
    name: "Brannstrom",
    slug: "brannstrom",
    tagline: "Bilgmon 488 Oil-in-Water Monitors & MARPOL Solutions",
    description: "Renowned Swedish maker of Bilgmon 488 15 ppm bilge alarms, oil discharge monitoring equipment, and MARPOL compliance systems.",
    origin: "Sweden",
    industry: "MARPOL & Environmental Monitoring",
    accentColor: "#0D9488",
    featuredProduct: {
      name: "Bilgmon 488 15 ppm Bilge Alarm Monitor",
      category: "Bilge Alarms",
      description: "IMO MEPC.107(49) certified 15 ppm bilge alarm system with optical sensor technology and automated data logging.",
      specs: ["IMO MEPC.107(49) Type Approved", "Dual optical sensor with auto-zeroing", "Tamper-proof event data logger"],
    },
  },
  {
    name: "Georim",
    slug: "georim",
    tagline: "Oily Water Separators & Marine Pump Engineering",
    description: "Leading Korean engineering company specializing in marine oily water separators, bilge pump packages, and sewage treatment plants.",
    origin: "South Korea",
    industry: "Marine Environmental Equipment",
    accentColor: "#2563EB",
    featuredProduct: {
      name: "GOWC Oily Water Separator System",
      category: "Water Separation",
      description: "High-efficiency two-stage oily bilge water separator meeting stringent international maritime standards.",
      specs: ["Discharge oil content below 5 ppm", "Automatic oil discharge valve", "Compact skid-mounted design"],
    },
  },
  {
    name: "Hansun",
    slug: "hansun",
    tagline: "Marine Incinerators & Environmental Protection",
    description: "Supplying certified marine waste incinerators, fresh water generators, and reverse osmosis plants for international shipping.",
    origin: "South Korea",
    industry: "Marine Environmental & Water",
    accentColor: "#0891B2",
    featuredProduct: {
      name: "GS Series Marine Waste Incinerator",
      category: "Marine Incinerators",
      description: "Fully automatic marine incinerator for simultaneous burning of oil sludge and solid waste aboard commercial ships.",
      specs: ["IMO MEPC.76(40) / MED Type Approved", "Simultaneous solid and sludge burning", "Flue gas temperature interlock safety"],
    },
  },
  {
    name: "Safetec",
    slug: "safetec",
    tagline: "Smoke Detection Systems for Cargo Holds & Machinery",
    description: "German manufacturer of sample extraction smoke detection systems and fire alarm stations for cargo holds and vehicle spaces.",
    origin: "Germany",
    industry: "Fire & Smoke Detection",
    accentColor: "#B91C1C",
    featuredProduct: {
      name: "SDS-48 Cargo Hold Smoke Detection Panel",
      category: "Fire Detection",
      description: "Multi-line suction smoke detector system monitoring up to 48 cargo hold sampling points with high sensitivity.",
      specs: ["Continuous suction pipe monitoring", "Dual optical sensor chambers", "MED / Wheelmark certified"],
    },
  },
  {
    name: "Xtronica",
    slug: "xtronica",
    tagline: "Cargo Tank Gauging & Level Telemetry Solutions",
    description: "Norwegian specialist in radar tank level gauging, pressure transmitters, and cargo monitoring systems for chemical and oil tankers.",
    origin: "Norway",
    industry: "Tank Gauging & Telemetry",
    accentColor: "#1E3A8A",
    featuredProduct: {
      name: "Radar Cargo Level Transmitter X-Gauging",
      category: "Level Measurement",
      description: "Non-contact FMCW radar gauge designed for volatile, corrosive, and viscous liquid cargo monitoring.",
      specs: ["Millimetre accuracy FMCW radar", "Intrinsically safe Zone 0 mounting", "Hermetically sealed PTFE antenna"],
    },
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}

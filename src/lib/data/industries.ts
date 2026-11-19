export interface Industry {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  applications: string[];
  equipmentProvided: string[];
  iconName: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "oil-gas",
    title: "Oil & Gas / Petrochemicals",
    slug: "oil-gas",
    summary: "Explosion-proof instrumentation, ATEX gas detection, and certified static grounding for upstream and downstream operations.",
    description: "In environments where volatile hydrocarbons, flammable mists, and gases are constantly present, safety compliance is non-negotiable. Al Ghwasa delivers intrinsically safe gas monitors, active explosion suppression barriers, and certified static grounding systems.",
    applications: ["Refinery tank farms", "Offshore drill rigs and FPSOs", "Petrochemical processing units", "Fuel loading & offloading terminals"],
    equipmentProvided: ["Newson Gale Earth-Rite® Grounding", "IEP Technologies Explosion Venting", "Gastec Gas Detection Tubes", "Shimada Flameproof Fixtures"],
    iconName: "Flame",
  },
  {
    id: "marine-offshore",
    title: "Marine & Offshore Maritime",
    slug: "marine-offshore",
    summary: "SOLAS & MARPOL certified marine safety gear, 15 ppm bilge alarms, oily water separators, and cargo hold monitoring.",
    description: "Since 1990, Al Ghwasa has been a cornerstone maritime supplier in Dubai, outfitting commercial vessels, tankers, supply tugs, and shipyards with IMO-compliant safety, communication, and environmental equipment.",
    applications: ["Commercial shipping fleets", "Bunkering and fuel transfer", "Cargo hold fire detection", "Enclosed space entry safety"],
    equipmentProvided: ["Brannstrom Bilgmon 488 Alarms", "Georim Oily Water Separators", "Toka Seiki Multi-Gas Detectors", "Nippon Hakuyo Telephone Systems"],
    iconName: "Ship",
  },
  {
    id: "chemical-manufacturing",
    title: "Chemical & Industrial Processing",
    slug: "chemical-manufacturing",
    summary: "Electrostatic neutralisation, continuous static grounding, and process gas measurement for chemical production.",
    description: "Preventing combustible dust explosions and dangerous static electricity buildup during mixing, blending, grinding, and transport of powders and solvents.",
    applications: ["Dry powder conveying", "Solvent dispensing & batch reactors", "Silo & cyclone protection", "Bulk bag (FIBC) filling"],
    equipmentProvided: ["Fraser Ionising Static Bars", "Newson Gale Bond-Rite® Clamps", "CS Instruments Dew Point Monitors", "IEP Chemical Isolation Valves"],
    iconName: "FlaskConical",
  },
  {
    id: "pharmaceutical-food",
    title: "Pharmaceuticals & Food Processing",
    slug: "pharmaceutical-food",
    summary: "Clean-room compatible anti-static systems, hygiene-rated explosion vents, and compressed air quality monitoring.",
    description: "Dust created in grain handling, sugar milling, and active pharmaceutical ingredient (API) manufacturing presents severe combustible dust risks. We supply hygienic, washdown-rated safety and static dissipation solutions.",
    applications: ["Fluid bed dryers & tablet coaters", "Flour mills & grain silos", "Cleanroom packaging lines", "Food-grade nitrogen monitoring"],
    equipmentProvided: ["Sanitary Explosion Relief Panels", "Cleanroom Static Eliminators", "Oil-Free Compressed Air Analyzers", "Food-Grade Suppression Powder"],
    iconName: "Apple",
  },
  {
    id: "calibration-services",
    title: "Inspection, Testing & Calibration",
    slug: "calibration-services",
    summary: "Certified Dubai calibration facility, hydrostatic pressure test benches, and on-site annual instrument certification.",
    description: "Our dedicated Experience Centre and laboratory in Dubai provides traceable calibrations for portable gas detectors, bilge alarms, pressure gauges, and optical sensors with rapid turnaround for regional port calls.",
    applications: ["Annual safety recertification", "Gas detector bump test & calibration", "Hydrostatic testing up to 10,000 PSI", "MARPOL calibration certificate issuance"],
    equipmentProvided: ["Span Gas Calibration Cylinders", "Hydrorex High-Pressure Test Rigs", "Digital Calibration Certificates", "Certified Marine Service Engineers"],
    iconName: "Gauge",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug.toLowerCase() === slug.toLowerCase());
}

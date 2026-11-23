export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  category: string;
  readTime: string;
  imageUrl?: string;
}

export const BLOGS: BlogPost[] = [
  {
    title: "Combustible Dust & Static Electricity: Protecting Middle East Industrial Facilities",
    slug: "combustible-dust-static-electricity-hazards",
    excerpt: "How electrostatic discharge triggers catastrophic dust explosions in powder handling, and how ATEX certified grounding prevents incidents.",
    content: [
      "In industrial manufacturing throughout the UAE and Gulf region, combustible dusts from grain, sugars, polymers, and powdered chemicals represent an omnipresent hazard.",
      "When powders are moved through pneumatics, poured into hoppers, or mixed in blenders, triboelectric charging generates tens of thousands of volts of static charge. If an ungrounded conductor or isolated vessel reaches breakdown voltage, a spark initiates a primary explosion.",
      "Implementing certified active grounding systems like Newson Gale Earth-Rite® ensures equipment is continuously interlocked, shutting off pneumatic conveyors if loop resistance exceeds 10 ohms.",
    ],
    date: "November 2026",
    author: "Ghwasa Technical Engineering Team",
    category: "Explosion Protection",
    readTime: "5 min read",
    imageUrl: "/images/industrial-facility-clean.jpg",
  },
  {
    title: "Enclosed Space Entry Safety: Precision Gas Detection & Air Sampling on Marine Vessels",
    slug: "enclosed-space-entry-safety-vessels",
    excerpt: "Critical guidelines for atmospheric sampling and toxic gas monitoring prior to entering cargo tanks, ballast spaces, and pump rooms.",
    content: [
      "Enclosed spaces remain one of the most hazardous environments in marine operations. Depleted oxygen, toxic hydrogen sulphide (H2S), and explosive hydrocarbon vapors can overcome crew members within seconds.",
      "Regulations require pre-entry testing with calibrated multi-gas monitors and direct-reading detector tubes capable of remote aspirating with sampling hoses before personnel step onto ladders.",
      "We recommend regular bump testing with certified span gases and using rugged Japanese Gastec sampling pumps and detector tubes engineered for high ambient temperatures and humidity.",
    ],
    date: "October 2026",
    author: "Safety Specialist Team",
    category: "Gas Detection",
    readTime: "6 min read",
    imageUrl: "/images/industrial-facility-clean.jpg",
  },
  {
    title: "Controlling Static Hazards in Converting, Packaging & High-Speed Manufacturing",
    slug: "static-neutralisation-converting-printing",
    excerpt: "Modern 24V DC ionisation bars eliminate high-voltage electrostatic charges, operator shocks, and material jamming in production lines.",
    content: [
      "Frictional contact and rapid separation of insulating films, paper webs, and plastics produce massive electrostatic charges exceeding 50 kV.",
      "Uncontrolled static leads to dust contamination, misaligned stacking, hazardous shocks to operators, and dangerous sparking in solvent printing environments.",
      "Fraser Anti-Static techniques combine long-range pulsed DC ionisation with built-in microprocessors to deliver adaptive neutralisation up to 1500mm.",
    ],
    date: "September 2026",
    author: "Industrial Automation Division",
    category: "Anti-Static Tech",
    readTime: "4 min read",
    imageUrl: "/images/industrial-facility-clean.jpg",
  },
  {
    title: "Active Explosion Suppression & Chemical Isolation in Industrial Process Vessels",
    slug: "active-explosion-suppression-dust-collectors",
    excerpt: "Detecting deflagrations at incipient stages and discharging suppression agents in milliseconds to prevent vessel rupture.",
    content: [
      "Industrial dust collectors, spray dryers, and bucket elevators handling combustible materials are vulnerable to rapid pressure rise upon deflagration.",
      "Passive venting cannot always be safely directed outside, especially in indoor installations or urban processing facilities.",
      "IEP Technologies HRD (High Rate Discharge) systems employ optical and dynamic pressure sensors to flood vessels with suppressant within milliseconds, stopping the fireball in its tracks.",
    ],
    date: "August 2026",
    author: "Explosion Protection Engineers",
    category: "Explosion Suppression",
    readTime: "5 min read",
    imageUrl: "/images/industrial-facility-clean.jpg",
  },
  {
    title: "Hydrostatic Pressure Testing Best Practices for High-Pressure Offshore Systems",
    slug: "high-pressure-hydrostatic-testing-rigs",
    excerpt: "Ensuring structural integrity and leak-tight operation for valves, pipelines, and manifolds using air-driven liquid test rigs up to 10,000 PSI.",
    content: [
      "Periodic hydrostatic proof testing verifies that pressurized equipment can withstand operating and burst pressures without structural deformation or joint leakage.",
      "Offshore applications demand portable, self-contained air-operated power packs equipped with stainless steel manifolds and dual-scale pressure gauges.",
      "Hydrorex test units enable controlled incremental pressurization and hold cycles compliant with ASME and API verification standards.",
    ],
    date: "July 2026",
    author: "Hydraulics & Pressure Team",
    category: "Pressure Testing",
    readTime: "5 min read",
    imageUrl: "/images/industrial-facility-clean.jpg",
  },
  {
    title: "Ex-Proof Electrical Installations: Zone 1 & Zone 2 Lighting and Enclosures",
    slug: "hazardous-area-ex-proof-electrical-installations",
    excerpt: "Engineering requirements for explosion-proof luminaires, junction boxes, and terminal housings in hazardous petrochemical atmospheres.",
    content: [
      "Electrical apparatus operating in flammable gas or vapor environments must prevent ignition of the surrounding atmosphere under normal and fault conditions.",
      "Shimada flameproof (Ex d) luminaires feature heavy-duty copper-free aluminum alloy bodies and toughened borosilicate glass lenses that contain internal deflagrations.",
      "Proper cable gland selection and IP66 marine sealing ensure resistance against corrosive salt spray and extreme ambient temperatures in GCC plants.",
    ],
    date: "June 2026",
    author: "Hazardous Electrical Division",
    category: "Hazardous Electrical",
    readTime: "4 min read",
    imageUrl: "/images/industrial-facility-clean.jpg",
  },
  {
    title: "Understanding MARPOL Annex I & MEPC.107(49) 15 PPM Bilge Alarm Compliance",
    slug: "marpol-annex-1-bilge-alarm-compliance",
    excerpt: "A guide for ship operators calling at Dubai and GCC ports on maintaining oily water separator accuracy and tamper-proof event logging.",
    content: [
      "Port State Control (PSC) inspections across Jebel Ali, Port Rashid, and regional maritime hubs focus heavily on oily bilge water discharge compliance.",
      "The IMO MEPC.107(49) regulation mandates 15 ppm bilge alarms with automated cell cleaning, tamper-proof operational logging, and instant overboard valve shutoff when oil content exceeds 15 ppm.",
      "Al Ghwasa supplies and provides certified annual calibration for marine bilge alarm systems, ensuring vessels maintain compliant records and avoid heavy detention penalties.",
    ],
    date: "May 2026",
    author: "Marine Instrumentation Division",
    category: "Marine Safety",
    readTime: "4 min read",
    imageUrl: "/images/industrial-facility-clean.jpg",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}

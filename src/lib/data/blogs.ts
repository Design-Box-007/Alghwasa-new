export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  category: string;
  readTime: string;
}

export const BLOGS: BlogPost[] = [
  {
    title: "Combustible Dust & Static Electricity: Protecting Middle East Industrial Facilities",
    slug: "combustible-dust-static-electricity-hazards",
    excerpt: "How electrostatic discharge triggers catastrophic dust explosions in powder and chemical handling, and how ATEX certified grounding prevents incidents.",
    content: [
      "In industrial manufacturing throughout the UAE and Gulf region, combustible dusts from grain, sugars, polymers, and powdered chemicals represent an omnipresent hazard.",
      "When powders are moved through pneumatics, poured into hoppers, or mixed in blenders, triboelectric charging generates tens of thousands of volts of static charge. If an ungrounded conductor or isolated vessel reaches breakdown voltage, a spark initiates a primary explosion.",
      "Implementing certified active grounding systems like Newson Gale Earth-Rite® ensures equipment is continuously interlocked, shutting off pneumatic conveyors if loop resistance exceeds 10 ohms.",
    ],
    date: "November 2026",
    author: "Ghwasa Technical Engineering Team",
    category: "Explosion Protection",
    readTime: "5 min read",
  },
  {
    title: "Understanding MARPOL Annex I & MEPC.107(49) 15 PPM Bilge Alarm Compliance",
    slug: "marpol-annex-1-bilge-alarm-compliance",
    excerpt: "A guide for ship operators calling at Dubai and GCC ports on maintaining oily water separator accuracy and tamper-proof event logging.",
    content: [
      "Port State Control (PSC) inspections across Jebel Ali, Port Rashid, and regional maritime hubs focus heavily on oily bilge water discharge compliance.",
      "The IMO MEPC.107(49) regulation mandates 15 ppm bilge alarms with automated cell cleaning, tamper-proof operational logging, and instant overboard valve shutoff when oil content exceeds 15 ppm.",
      "Al Ghwasa supplies and provides certified annual calibration for Brannstrom Bilgmon 488 systems, ensuring vessels maintain compliant records and avoid heavy detention penalties.",
    ],
    date: "October 2026",
    author: "Marine Instrumentation Division",
    category: "Marine Safety",
    readTime: "4 min read",
  },
  {
    title: "Enclosed Space Entry Safety: Best Practices for Multi-Gas Detectors on Vessels",
    slug: "enclosed-space-entry-safety-vessels",
    excerpt: "Critical guidelines for atmospheric testing prior to entering cargo tanks, ballast spaces, and pump rooms.",
    content: [
      "Enclosed spaces remain one of the most hazardous environments in marine operations. Depleted oxygen, toxic hydrogen sulphide (H2S), and explosive hydrocarbon vapors can overcome crew members within seconds.",
      "Regulations require pre-entry testing with calibrated multi-gas monitors capable of remote aspirating with sampling hoses before personnel step onto ladders.",
      "We recommend regular bump testing with certified span gases and using rugged Japanese Toka Seiki detectors engineered for maritime humidity and salinity.",
    ],
    date: "September 2026",
    author: "Safety Specialist Team",
    category: "Gas Detection",
    readTime: "6 min read",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
}

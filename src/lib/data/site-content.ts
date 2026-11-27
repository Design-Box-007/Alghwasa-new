
export const SITE_METADATA = {
  companyName: "Ghwasa Technical Equipment Trading LLC",
  shortName: "Al Ghwasa",
  tagline: "Industrial Safety & Explosion Protection Solutions Across the Middle East",
  establishedYear: 1990,
  yearsOfExperience: "35+",
  brandsCount: "6",
  productsCount: "500+",
  countriesServed: "40+",
  phone: "+971-4-3968037",
  email: "sales@ghwasa.com",
  address: "Unit# M08/09, Al Shraifi-1, Zabeel Road, Dubai, UAE",
  poBox: "P.O. Box 52084",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/al-ghwasa-technical-equipment-trading",
    facebook: "https://www.facebook.com/p/Al-Ghwasa-Technical-Equipment-Trading-LLC-100069135072790/",
    instagram: "https://www.instagram.com/alghwasauae/",
    youtube: "https://www.youtube.com/@alghwasa",
  },
};

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/#brands", hasDropdown: true },
  { label: "Blogs", href: "/#blogs" },
  { label: "Experience Centre", href: "/experience-centre" },
];

export const CLIENT_LOGOS = [
  "ADNOC Group",
  "Saudi Aramco Approved Contractors",
  "Drydocks World Dubai",
  "DP World",
  "QatarEnergy Facilities",
  "Oman Ship Management Company",
  "Bahrain Petroleum Company (Bapco)",
  "Kuwait Oil Company (KOC)",
];

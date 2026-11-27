export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string[];
  solutionsUsedIn: string[];
  productsFunction: string;
  relevantBrands?: string[];
  keywords?: string[];
  image: string;
}

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "oil-and-gas",
    number: "01",
    title: "Oil & Gas Industry",
    subtitle: "Industrial Safety, Gas Detection & Static Grounding Solutions",
    description: [
      "The oil and gas industry operates in environments where flammable gases, toxic substances and combustible vapours can create serious safety risks. From exploration and extraction to refining, storage and transportation, reliable industrial safety equipment plays an essential role in protecting workers and facilities.",
      "Al Ghwasa supplies specialised gas detection equipment, static grounding systems and explosion protection technologies to support oil and gas operations.",
    ],
    solutionsUsedIn: [
      "Oil refineries and processing plants",
      "Offshore drilling platforms",
      "Gas storage and distribution terminals",
      "Tank farms and fuel transfer facilities",
      "Pipeline and petrochemical installations",
    ],
    productsFunction:
      "Gas detection equipment helps identify hazardous gas concentrations. Static grounding and bonding systems help prevent electrostatic discharges during fuel transfer and handling. Explosion protection technologies help mitigate the consequences of combustible dust and vapour explosions in applicable processes.",
    image: "/images/industries/oil-and-gas.jpg",
  },
  {
    id: "petrochemical-chemical",
    number: "02",
    title: "Petrochemical & Chemical Industry",
    subtitle: "Reliable Equipment for Chemical Processing and Handling",
    description: [
      "Chemical and petrochemical facilities handle flammable liquids, hazardous gases, powders and volatile substances. These operations require effective safety measures to control electrostatic discharge, monitor hazardous atmospheres and minimise explosion risks.",
      "Al Ghwasa provides industrial safety and specialised equipment solutions that support chemical manufacturing, storage and processing operations.",
    ],
    solutionsUsedIn: [
      "Chemical manufacturing plants",
      "Petrochemical processing facilities",
      "Solvent storage areas",
      "Chemical transfer and filling stations",
      "Powder handling and mixing facilities",
    ],
    productsFunction:
      "Gas detection equipment helps monitor toxic and hazardous gases. Static grounding systems reduce the risk of electrostatic ignition during liquid and powder transfers. Anti-static equipment controls unwanted static charges in production environments, while explosion protection systems help protect suitable process equipment against combustible dust explosions.",
    image: "/images/industries/petrochemical-chemical.jpg",
  },
  {
    id: "marine-offshore",
    number: "03",
    title: "Marine & Offshore Industry",
    subtitle: "Supporting Safer Marine and Offshore Operations",
    description: [
      "Marine and offshore facilities operate in challenging environments involving fuel storage, gas handling, confined spaces and industrial machinery. Accurate gas monitoring and effective static control are important for maintaining safe working conditions aboard vessels and offshore installations.",
      "Al Ghwasa supplies specialised equipment for marine, offshore and industrial applications.",
    ],
    solutionsUsedIn: [
      "Commercial ships and vessels",
      "Offshore oil and gas platforms",
      "Shipyards and repair facilities",
      "Fuel storage and transfer areas",
      "Marine engine rooms and confined spaces",
    ],
    productsFunction:
      "Gas detection tubes help identify potentially hazardous gases in working environments. Static grounding and bonding systems help control electrostatic discharge during fuel transfer and handling operations. Pressure testing equipment supports applicable inspection and testing activities.",
    image: "/images/industries/marine-offshore.jpg",
  },
  {
    id: "food-beverage",
    number: "04",
    title: "Food & Beverage Industry",
    subtitle: "Industrial Safety Solutions for Food Processing and Production",
    description: [
      "Food and beverage manufacturing involves various processes, including mixing, grinding, drying, packaging, refrigeration and storage. These operations can create gas-related hazards and combustible dust risks, particularly where flour, sugar, starch and other powdered ingredients are handled.",
      "Al Ghwasa provides specialised technologies that support safer food production and processing environments.",
    ],
    solutionsUsedIn: [
      "Food processing plants",
      "Flour and grain mills",
      "Sugar manufacturing facilities",
      "Dairy and beverage production",
      "Cold storage and refrigeration facilities",
      "Powder handling and packaging units",
    ],
    productsFunction:
      "Gas detection equipment helps monitor gases such as ammonia in refrigeration facilities and carbon dioxide in beverage production environments. Static grounding systems help control electrostatic discharge during powder handling and ingredient transfer. Explosion protection systems can help mitigate combustible dust explosion risks in silos, dust collectors and processing equipment.",
    image: "/images/industries/food-beverage.jpg",
  },
  {
    id: "water-wastewater",
    number: "05",
    title: "Water & Wastewater Treatment Industry",
    subtitle: "Gas Detection and Safety Solutions for Water Treatment Facilities",
    description: [
      "Water and wastewater treatment plants handle gases, chemicals and organic materials that can create hazardous working conditions. Sewage systems, pumping stations and treatment facilities may contain gases such as hydrogen sulphide, methane and oxygen-deficient atmospheres.",
      "Al Ghwasa supports water treatment and wastewater management operations with specialised gas detection and industrial safety equipment.",
    ],
    solutionsUsedIn: [
      "Sewage treatment plants",
      "Wastewater treatment facilities",
      "Water purification plants",
      "Pumping stations",
      "Sewer networks and underground chambers",
      "Sludge processing facilities",
    ],
    productsFunction:
      "Gas detection equipment helps identify hazardous gases and oxygen deficiencies in confined spaces and treatment areas. Gas detector tubes can support specific gas measurement and monitoring requirements. Pressure testing and measuring equipment can also support applicable industrial maintenance and testing activities.",
    image: "/images/industries/water-wastewater.jpg",
  },
  {
    id: "pharmaceutical-biotech",
    number: "06",
    title: "Pharmaceutical & Biotechnology Industry",
    subtitle: "Precision Safety Solutions for Pharmaceutical Manufacturing",
    description: [
      "Pharmaceutical manufacturing involves specialised production processes, chemical handling, powder processing and sterilisation. Maintaining controlled environments and managing combustible dust and electrostatic hazards are important for protecting personnel, products and production facilities.",
      "Al Ghwasa provides industrial technologies that support pharmaceutical processing and manufacturing environments.",
    ],
    solutionsUsedIn: [
      "Pharmaceutical manufacturing plants",
      "Powder mixing and blending facilities",
      "Tablet and capsule production",
      "Chemical storage areas",
      "Research and production laboratories",
      "Sterilisation facilities",
    ],
    productsFunction:
      "Gas detection equipment helps monitor specific hazardous gases and chemical vapours. Anti-static systems help manage electrostatic charges during powder handling and manufacturing. Static grounding solutions help establish effective bonding and grounding for suitable conductive equipment. Explosion protection systems help address combustible dust hazards in applicable processes.",
    image: "/images/industries/pharmaceutical-biotech.jpg",
  },
  {
    id: "mining-minerals",
    number: "07",
    title: "Mining & Minerals Industry",
    subtitle: "Industrial Monitoring and Explosion Protection for Mining Operations",
    description: [
      "Mining and mineral processing involve potentially hazardous gases, dust generation and heavy industrial equipment. Underground mines and mineral processing facilities require appropriate safety measures to monitor atmospheric conditions and manage dust-related hazards.",
      "Al Ghwasa offers specialised gas detection and industrial safety equipment to support relevant mining and mineral processing applications.",
    ],
    solutionsUsedIn: [
      "Underground mining operations",
      "Mineral processing plants",
      "Crushing and grinding facilities",
      "Ore storage and handling areas",
      "Dust collection systems",
      "Material conveying facilities",
    ],
    productsFunction:
      "Gas detection equipment helps monitor hazardous gases and oxygen levels in relevant working areas. Explosion protection systems help mitigate combustible dust risks in processing equipment, dust collectors and conveying systems. Static control technologies help manage electrostatic hazards in suitable applications.",
    relevantBrands: ["GASTEC", "Fraser Anti-Static", "Newson Gale", "IEP Technologies"],
    keywords: [
      "Mining safety equipment",
      "Mining gas detection",
      "Mineral processing safety",
      "Combustible dust explosion protection",
      "Industrial gas monitoring",
    ],
    image: "/images/industries/mining-minerals.jpg",
  },
  {
    id: "power-energy",
    number: "08",
    title: "Power Generation & Energy Industry",
    subtitle: "Industrial Safety Technologies for Energy Facilities",
    description: [
      "Power generation facilities and energy infrastructure operate with complex machinery, fuel systems, electrical installations and industrial processes. Gas monitoring and appropriate explosion protection measures help maintain safe operating conditions.",
      "Al Ghwasa supplies specialised industrial equipment and safety technologies for applicable power and energy operations.",
    ],
    solutionsUsedIn: [
      "Thermal power plants",
      "Gas-fired power stations",
      "Energy storage facilities",
      "Fuel handling and storage areas",
      "Industrial boiler rooms",
      "Energy processing facilities",
    ],
    productsFunction:
      "Gas detection equipment helps identify hazardous gases in relevant plant areas. Static grounding and bonding systems help control electrostatic discharge during fuel handling and transfer. Explosion protection technologies help protect applicable equipment handling combustible dust or vapours.",
    image: "/images/industries/power-energy.jpg",
  },
  {
    id: "agriculture-grain",
    number: "09",
    title: "Agriculture & Grain Processing Industry",
    subtitle: "Managing Dust and Gas Hazards in Agricultural Operations",
    description: [
      "Agricultural processing and grain handling facilities deal with organic materials such as wheat, rice, corn, flour and animal feed. The movement and processing of these materials can generate combustible dust, creating potential fire and explosion hazards.",
      "Al Ghwasa provides specialised industrial safety technologies for grain handling, storage and processing applications.",
    ],
    solutionsUsedIn: [
      "Grain storage silos",
      "Flour and rice mills",
      "Agricultural processing plants",
      "Animal feed manufacturing facilities",
      "Grain transportation and loading terminals",
      "Fertiliser storage and handling facilities",
    ],
    productsFunction:
      "Gas detection equipment helps monitor relevant gases and hazardous atmospheres. Static grounding systems help manage electrostatic discharge during bulk material transfer. Explosion protection systems help mitigate combustible dust explosion risks in silos, bucket elevators, conveyors and dust collection equipment.",
    image: "/images/industries/agriculture-grain.jpg",
  },
  {
    id: "plastics-rubber",
    number: "10",
    title: "Plastics & Rubber Manufacturing Industry",
    subtitle: "Static Control and Explosion Protection for Plastic Production",
    description: [
      "Plastic and rubber manufacturing involves processing, mixing, extrusion, moulding, coating and packaging. These operations can generate static electricity, particularly when handling plastic films, powders and synthetic materials.",
      "Al Ghwasa offers specialised anti-static and industrial safety solutions to support manufacturing operations.",
    ],
    solutionsUsedIn: [
      "Plastic manufacturing plants",
      "Rubber processing facilities",
      "Plastic film production lines",
      "Polymer processing units",
      "Packaging and extrusion facilities",
      "Raw material storage areas",
    ],
    productsFunction:
      "Anti-static equipment helps neutralise unwanted electrostatic charges on surfaces and materials. Static grounding systems help control electrostatic discharge from suitable conductive equipment. Explosion protection solutions can address combustible dust hazards associated with certain plastic and polymer processing operations.",
    image: "/images/industries/plastics-rubber.jpg",
  },
  {
    id: "paints-coatings",
    number: "11",
    title: "Paints, Coatings & Printing Industry",
    subtitle: "Electrostatic Control for Coating and Printing Operations",
    description: [
      "Paint manufacturing, coating and printing processes often involve flammable solvents, chemical vapours, fine powders and fast-moving materials. Static electricity can create ignition risks in certain environments and cause operational issues during production.",
      "Al Ghwasa provides static control and industrial safety technologies for applicable paint, coating and printing processes.",
    ],
    solutionsUsedIn: [
      "Paint manufacturing facilities",
      "Industrial coating plants",
      "Printing and packaging facilities",
      "Solvent storage and mixing areas",
      "Powder coating facilities",
      "Ink manufacturing units",
    ],
    productsFunction:
      "Static grounding systems help reduce electrostatic ignition risks during solvent transfer and handling. Anti-static equipment helps control unwanted static charges on materials and production surfaces. Gas detection equipment supports monitoring of selected hazardous gases and vapours, while explosion protection systems address relevant combustible dust hazards.",
    image: "/images/industries/paints-coatings.jpg",
  },
  {
    id: "wood-paper-pulp",
    number: "12",
    title: "Wood, Paper & Pulp Industry",
    subtitle: "Combustible Dust Management and Industrial Safety",
    description: [
      "Woodworking, paper manufacturing and pulp processing generate dust, fibres and combustible materials during cutting, grinding, drying and conveying operations. These materials can create fire and explosion hazards when dispersed in the air under suitable conditions.",
      "Al Ghwasa provides industrial technologies that help businesses manage electrostatic and combustible dust risks.",
    ],
    solutionsUsedIn: [
      "Paper manufacturing plants",
      "Pulp processing facilities",
      "Woodworking factories",
      "Saw mills",
      "Furniture manufacturing units",
      "Dust collection and filtration systems",
    ],
    productsFunction:
      "Explosion protection systems help mitigate combustible dust explosion risks in applicable dust collectors, dryers, silos and conveying equipment. Static grounding solutions help control electrostatic charge on suitable conductive equipment. Anti-static technologies help manage static electricity during material processing.",
    image: "/images/industries/wood-paper-pulp.jpg",
  },
  {
    id: "cement-building-materials",
    number: "13",
    title: "Cement & Building Materials Industry",
    subtitle: "Industrial Safety for Cement and Material Processing",
    description: [
      "Cement and building material manufacturing involve crushing, grinding, mixing, drying and transporting large quantities of raw materials. Dust accumulation and electrostatic charging can create operational and safety challenges.",
      "Al Ghwasa offers industrial safety and static control technologies for applicable material processing environments.",
    ],
    solutionsUsedIn: [
      "Cement manufacturing plants",
      "Limestone processing facilities",
      "Concrete production units",
      "Bulk powder handling facilities",
      "Industrial silos",
      "Dust collection systems",
    ],
    productsFunction:
      "Gas detection equipment supports monitoring of relevant gases in plant environments. Static grounding systems help control electrostatic discharge from suitable conductive equipment. Explosion protection systems can address combustible dust hazards where the materials and processes present such risks.",
    image: "/images/industries/cement-building-materials.jpg",
  },
  {
    id: "waste-management",
    number: "14",
    title: "Waste Management & Landfill Industry",
    subtitle: "Gas Monitoring and Safety for Waste Management Facilities",
    description: [
      "Waste management facilities handle organic waste, recyclable materials and industrial waste that can release gases during decomposition and processing. Landfills and waste treatment facilities may generate methane, hydrogen sulphide and other potentially hazardous gases.",
      "Al Ghwasa supports relevant waste management operations with gas detection and industrial safety equipment.",
    ],
    solutionsUsedIn: [
      "Municipal waste management facilities",
      "Landfill sites",
      "Waste sorting and recycling plants",
      "Organic waste processing facilities",
      "Biogas production facilities",
      "Wastewater sludge treatment areas",
    ],
    productsFunction:
      "Gas detection equipment helps monitor selected hazardous gases in waste processing and confined-space environments. Static grounding systems can support safe handling and transfer operations involving suitable conductive equipment. Explosion protection technologies can help manage combustible dust risks in applicable processing systems.",
    image: "/images/industries/waste-management.jpg",
  },
  {
    id: "automotive-manufacturing",
    number: "15",
    title: "Automotive & Industrial Manufacturing",
    subtitle: "Industrial Safety and Static Control for Manufacturing Facilities",
    description: [
      "Automotive and general manufacturing facilities involve multiple production stages, including assembly, painting, surface treatment, chemical handling and material processing. Managing electrostatic discharge and monitoring hazardous substances are important for maintaining safe and efficient operations.",
      "Al Ghwasa supplies specialised industrial equipment for applicable manufacturing and production environments.",
    ],
    solutionsUsedIn: [
      "Automotive manufacturing plants",
      "Vehicle painting facilities",
      "Component manufacturing units",
      "Industrial assembly lines",
      "Surface treatment facilities",
      "Production and packaging plants",
    ],
    productsFunction:
      "Anti-static equipment helps manage unwanted static charges on production materials and surfaces. Static grounding systems help control electrostatic discharge from suitable conductive equipment. Gas detection equipment supports monitoring of selected gases and chemical vapours in applicable areas.",
    image: "/images/industries/automotive-manufacturing.jpg",
  },
  {
    id: "warehousing-logistics",
    number: "16",
    title: "Warehousing, Logistics & Bulk Material Handling",
    subtitle: "Safer Material Transfer and Storage Operations",
    description: [
      "Warehousing and logistics facilities handle a wide range of materials, including chemicals, powders, fuels, grains and industrial products. Loading, unloading, storage and transportation processes can create electrostatic hazards, particularly when handling flammable liquids and combustible materials.",
      "Al Ghwasa provides static grounding and industrial safety equipment to support relevant storage and material handling applications.",
    ],
    solutionsUsedIn: [
      "Industrial warehouses",
      "Chemical storage facilities",
      "Bulk material terminals",
      "Tanker loading and unloading stations",
      "Road tanker and railcar facilities",
      "Powder and liquid transfer systems",
    ],
    productsFunction:
      "Static grounding and bonding systems help control electrostatic charge during the transfer of flammable liquids and other suitable materials. Gas detection equipment helps identify hazardous atmospheres in relevant storage and handling areas. Explosion protection technologies support applicable combustible dust processing operations.",
    image: "/images/industries/warehousing-logistics.jpg",
  },
];

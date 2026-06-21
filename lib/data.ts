export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  features: string[];
  applications: string[];
  weatherResistance: string;
  inStock: boolean;
  specs: { label: string; value: string }[];
  gsm?: string;
  accentFrom: string;
  accentTo: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "frontlit-flex",
    name: "Frontlit Flex",
    category: "Flex Rolls",
    tagline: "High-tensile front-lit media for outdoor hoardings",
    features: [
      "200–280 GSM cold-laminated coating",
      "High ink absorption, sharp dot gain",
      "Anti-curl, crack-resistant base",
    ],
    applications: ["Highway Hoardings", "Building Wraps", "Banners"],
    weatherResistance: "3–5 years outdoor",
    inStock: true,
    gsm: "200–280 GSM",
    accentFrom: "#3B82F6",
    accentTo: "#1D4ED8",
    specs: [
      { label: "Width", value: "Up to 10 ft" },
      { label: "GSM", value: "200 / 240 / 260 / 280" },
      { label: "Finish", value: "Matte / Glossy" },
      { label: "Tensile", value: "High (warp & weft)" },
    ],
  },
  {
    slug: "backlit-flex",
    name: "Backlit Flex",
    category: "Flex Rolls",
    tagline: "Light-diffusing media engineered for illuminated displays",
    features: [
      "Uniform light transmission",
      "No hotspot, even glow",
      "Premium translucent base film",
    ],
    applications: ["Lightboxes", "Mall Signage", "Airport Displays"],
    weatherResistance: "4–6 years outdoor",
    inStock: true,
    gsm: "440–570 GSM",
    accentFrom: "#60A5FA",
    accentTo: "#2563EB",
    specs: [
      { label: "Width", value: "Up to 10 ft" },
      { label: "GSM", value: "440 / 570" },
      { label: "Light", value: "Diffused / Even" },
      { label: "Coating", value: "Double-sided" },
    ],
  },
  {
    slug: "star-flex",
    name: "Star Flex",
    category: "Flex Rolls",
    tagline: "Economy-grade flex with consistent print whiteness",
    features: [
      "Cost-efficient bulk media",
      "Bright white base, high opacity",
      "Reliable run-length consistency",
    ],
    applications: ["Promotional Banners", "Events", "Retail Branding"],
    weatherResistance: "2–3 years outdoor",
    inStock: true,
    gsm: "300–340 GSM",
    accentFrom: "#38BDF8",
    accentTo: "#0EA5E9",
    specs: [
      { label: "Width", value: "Up to 10 ft" },
      { label: "GSM", value: "300 / 340" },
      { label: "Finish", value: "Glossy" },
      { label: "Whiteness", value: "High" },
    ],
  },
  {
    slug: "vinyl-sheets",
    name: "Vinyl Sheets",
    category: "Vinyl",
    tagline: "Self-adhesive vinyl for precision graphics & wraps",
    features: [
      "Air-release adhesive channels",
      "Conformable cast & calendared grades",
      "Solvent, eco-solvent & UV compatible",
    ],
    applications: ["Vehicle Graphics", "Glass Branding", "Floor Decals"],
    weatherResistance: "5–7 years outdoor",
    inStock: true,
    accentFrom: "#818CF8",
    accentTo: "#4F46E5",
    specs: [
      { label: "Type", value: "Cast / Calendared" },
      { label: "Adhesive", value: "Permanent / Removable" },
      { label: "Finish", value: "Gloss / Matte" },
      { label: "Width", value: "Up to 5 ft" },
    ],
  },
  {
    slug: "one-way-vision",
    name: "One Way Vision",
    category: "Vinyl",
    tagline: "Perforated film for see-through window graphics",
    features: [
      "Optimized perforation ratio",
      "Print outside, see-through inside",
      "Black-back for color pop",
    ],
    applications: ["Vehicle Windows", "Storefronts", "Glass Facades"],
    weatherResistance: "3–4 years outdoor",
    inStock: true,
    accentFrom: "#A78BFA",
    accentTo: "#7C3AED",
    specs: [
      { label: "Perforation", value: "50/50 / 60/40" },
      { label: "Adhesive", value: "Grey / Black" },
      { label: "Print", value: "Eco / Solvent / UV" },
      { label: "Width", value: "Up to 5 ft" },
    ],
  },
  {
    slug: "eco-solvent-ink",
    name: "Eco Solvent Ink",
    category: "Inks",
    tagline: "Low-odor, vivid color inks for indoor & outdoor",
    features: [
      "Wide color gamut, deep blacks",
      "Scratch & smudge resistant",
      "Compatible with Epson DX & i3200 heads",
    ],
    applications: ["Indoor Posters", "Vehicle Wraps", "Backlit Prints"],
    weatherResistance: "3 years outdoor (un-laminated)",
    inStock: true,
    accentFrom: "#22D3EE",
    accentTo: "#0891B2",
    specs: [
      { label: "Colors", value: "CMYK + Lc Lm" },
      { label: "Heads", value: "DX5 / DX7 / i3200" },
      { label: "Volume", value: "1L / 5L" },
      { label: "Odor", value: "Low" },
    ],
  },
  {
    slug: "uv-ink",
    name: "UV Ink",
    category: "Inks",
    tagline: "Instant-cure rigid & flexible UV printing inks",
    features: [
      "Instant UV curing, high throughput",
      "Adheres to rigid & flexible media",
      "Bright, durable, fade-resistant",
    ],
    applications: ["Rigid Boards", "ACP Panels", "Signage"],
    weatherResistance: "5+ years outdoor",
    inStock: false,
    accentFrom: "#34D399",
    accentTo: "#059669",
    specs: [
      { label: "Cure", value: "LED-UV instant" },
      { label: "Substrate", value: "Rigid / Flex" },
      { label: "Volume", value: "1L / 5L" },
      { label: "Gloss", value: "High / Matte" },
    ],
  },
  {
    slug: "lamination-films",
    name: "Lamination Films",
    category: "Lamination",
    tagline: "Protective films for durability and premium finish",
    features: [
      "Cold & thermal lamination grades",
      "UV-block & anti-scratch surface",
      "Gloss, matte & textured finishes",
    ],
    applications: ["Print Protection", "Floor Graphics", "Premium Finish"],
    weatherResistance: "Extends print life 2–3×",
    inStock: true,
    accentFrom: "#FBBF24",
    accentTo: "#D97706",
    specs: [
      { label: "Type", value: "Cold / Thermal" },
      { label: "Finish", value: "Gloss / Matte / Lustre" },
      { label: "Micron", value: "80 / 100 / 150" },
      { label: "UV Block", value: "Yes" },
    ],
  },
  {
    slug: "acp-signage",
    name: "ACP Signage Materials",
    category: "ACP",
    tagline: "Aluminium composite panels for rigid signage & facades",
    features: [
      "Lightweight, rigid & weatherproof core",
      "Flat, true surface for clean signage",
      "Routable for 3D letters & box signs",
    ],
    applications: ["Shop Fascias", "3D Letters", "Building Facades"],
    weatherResistance: "10+ years outdoor",
    inStock: true,
    accentFrom: "#9CA3AF",
    accentTo: "#4B5563",
    specs: [
      { label: "Thickness", value: "3mm / 4mm" },
      { label: "Skin", value: "0.21 / 0.30 mm" },
      { label: "Finish", value: "Gloss / Matte / Mirror" },
      { label: "Size", value: "4×8 ft sheets" },
    ],
  },
  {
    slug: "printing-consumables",
    name: "Printing Consumables",
    category: "Consumables",
    tagline: "The accessories that keep your print floor running",
    features: [
      "Eyelets, tapes, blades & squeegees",
      "Head cleaners & maintenance kits",
      "Banner finishing hardware in bulk",
    ],
    applications: ["Banner Finishing", "Machine Upkeep", "Installation"],
    weatherResistance: "Job-dependent",
    inStock: true,
    accentFrom: "#F59E0B",
    accentTo: "#B45309",
    specs: [
      { label: "Eyelets", value: "Brass / Steel" },
      { label: "Tapes", value: "Banner / Double-side" },
      { label: "Blades", value: "Cutting / Squeegee" },
      { label: "Care", value: "Cleaners / Flush" },
    ],
  },
];

// NOTE: Projects / Cities / Brands figures are editable placeholders —
// replace with your verified numbers in lib/data.ts before launch.
export const STATS = [
  { value: 7, suffix: "+", label: "Years Experience", sub: "Serving since 2019" },
  { value: 2000, suffix: "+", label: "Projects Delivered", sub: "Across 7 verticals" },
  { value: 25, suffix: "+", label: "Cities Served", sub: "Maharashtra & beyond" },
  { value: 250, suffix: "+", label: "Brands Served", sub: "Retail to corporate" },
  { value: 50, suffix: "T+", label: "Stock Capacity", sub: "Bulk material, 3 branches" },
];

export const WHY_US = [
  {
    title: "Everything Under One Roof",
    desc: "Material, printing, branding, signage, installation and upkeep — one accountable partner.",
    icon: "layers",
  },
  {
    title: "Bulk Material Inventory",
    desc: "Deep stock across 3 branches so large projects never wait on supply.",
    icon: "boxes",
  },
  {
    title: "Advanced Printing Technology",
    desc: "Flex, eco-solvent and UV output with sharp, weatherproof, colour-true results.",
    icon: "printer",
  },
  {
    title: "Experienced Installation Teams",
    desc: "Trained crews for hoarding mounting, vinyl application and branding execution.",
    icon: "tools",
  },
  {
    title: "Fast Project Turnaround",
    desc: "Coordinated supply-to-install pipeline keeps campaigns on schedule.",
    icon: "truck",
  },
  {
    title: "Multi-City Execution",
    desc: "Branches at PCMC, Pune and Satara executing across Maharashtra and beyond.",
    icon: "pin",
  },
  {
    title: "Dedicated Project Managers",
    desc: "A single point of contact owning your project end to end.",
    icon: "headset",
  },
  {
    title: "Quality Assurance",
    desc: "Material checks, print QC and post-install inspection on every job.",
    icon: "shield",
  },
];

export const INDUSTRIES = [
  { name: "Retail Chains", desc: "Multi-store rollout branding", icon: "store", slug: "retail-branding" },
  { name: "Malls", desc: "Backlit & atrium displays", icon: "mall", slug: "mall-advertising" },
  { name: "Real Estate", desc: "Site hoardings & signage", icon: "building", slug: "real-estate" },
  { name: "Political Campaigns", desc: "Vehicle wraps & bulk flex", icon: "flag", slug: "political-campaigns" },
  { name: "Events", desc: "Stalls, stages & standees", icon: "event", slug: "event-branding" },
  { name: "Corporate Offices", desc: "Reception & facade branding", icon: "sign", slug: "corporate-signage" },
  { name: "Hospitals", desc: "Wayfinding & signage systems", icon: "hospital", slug: "hospitals" },
  { name: "Education", desc: "Campus branding & signage", icon: "education", slug: "education" },
  { name: "Automobile", desc: "Showroom & fleet graphics", icon: "vehicle", slug: "vehicle-graphics" },
  { name: "Government", desc: "Public works & campaigns", icon: "govt", slug: "government" },
];

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  image: string;
  items: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "advertising-materials",
    name: "Advertising Materials",
    tagline: "Bulk supply of every print & signage substrate.",
    icon: "boxes",
    image: "/images/facility/warehouse.jpg",
    items: ["Flex Rolls", "Vinyl", "One Way Vision", "ACP Sheets", "Sunboard", "Foam Board", "Eco-Solvent & UV Ink", "Lamination Film", "Printing Media"],
  },
  {
    slug: "large-format-printing",
    name: "Large Format Printing",
    tagline: "Flex, vinyl, eco-solvent and UV — at scale.",
    icon: "printer",
    image: "/images/work/big-bold-printing.jpg",
    items: ["Flex Printing", "Vinyl Printing", "UV Printing", "Eco-Solvent Printing", "Retail Graphics", "Event Graphics", "Hoarding Printing"],
  },
  {
    slug: "branding-solutions",
    name: "Branding Solutions",
    tagline: "Turn spaces into brand experiences.",
    icon: "store",
    image: "/images/work/glass-branding.jpg",
    items: ["Shop Branding", "Retail Branding", "Franchise Branding", "Corporate Branding", "Mall Branding"],
  },
  {
    slug: "signage-solutions",
    name: "Signage Solutions",
    tagline: "Illuminated, dimensional and corporate signage.",
    icon: "sign",
    image: "/images/work/vehicle-branding.jpg",
    items: ["ACP Signage", "LED Sign Boards", "Glow Sign Boards", "Acrylic Signage", "Corporate Signage"],
  },
  {
    slug: "outdoor-advertising",
    name: "Outdoor Advertising",
    tagline: "Command attention across the city.",
    icon: "billboard",
    image: "/images/work/banner1.jpg",
    items: ["Highway Hoardings", "Billboards", "Pole Kiosks", "Gantries", "Transit Media"],
  },
  {
    slug: "installation-services",
    name: "Installation Services",
    tagline: "Trained crews that execute on site.",
    icon: "tools",
    image: "/images/work/wall-decals.jpg",
    items: ["Flex Installation", "Vinyl Application", "Hoarding Mounting", "Branding Execution", "Event Installation"],
  },
  {
    slug: "maintenance-services",
    name: "Maintenance Services",
    tagline: "Keep every brand asset looking new.",
    icon: "wrench",
    image: "/images/services/maintenance.jpg",
    items: ["Branding Maintenance", "Hoarding Maintenance", "Signage Maintenance"],
  },
];

export const ECOSYSTEM = [
  { name: "Material Supply", desc: "Bulk flex, vinyl, ACP, inks & media from stock", icon: "boxes" },
  { name: "Printing", desc: "Flex, eco-solvent & UV large-format output", icon: "printer" },
  { name: "Branding", desc: "Shop, retail, franchise & corporate branding", icon: "store" },
  { name: "Fabrication", desc: "ACP, LED, glow & acrylic signage build", icon: "sign" },
  { name: "Installation", desc: "On-site mounting, application & execution", icon: "tools" },
  { name: "Maintenance", desc: "Ongoing upkeep of branding & hoardings", icon: "wrench" },
];

export const PROCESS = [
  { step: "01", name: "Requirement Analysis", desc: "We map your goals, scope and brand guidelines.", icon: "compass" },
  { step: "02", name: "Site Survey", desc: "On-ground measurement and feasibility check.", icon: "pin" },
  { step: "03", name: "Design Planning", desc: "Layouts, mock-ups and material selection.", icon: "spark" },
  { step: "04", name: "Material Production", desc: "Substrates and consumables pulled from stock.", icon: "boxes" },
  { step: "05", name: "Printing", desc: "High-resolution, weatherproof large-format print.", icon: "printer" },
  { step: "06", name: "Installation", desc: "Trained crews mount and execute on site.", icon: "tools" },
  { step: "07", name: "Quality Check", desc: "Finish, alignment and durability inspection.", icon: "check" },
  { step: "08", name: "Maintenance", desc: "Scheduled upkeep keeps assets campaign-ready.", icon: "wrench" },
];

export const SHOWCASE = [
  { title: "Event Stages & Backdrops", category: "Exhibition & Events", src: "/images/work/banner1.jpg" },
  { title: "Exhibition Stalls", category: "Events & Expos", src: "/images/work/banner3.jpg" },
  { title: "Glass & Office Branding", category: "Corporate Branding", src: "/images/work/glass-branding.jpg" },
  { title: "Wall Coverings & Decals", category: "Interior Branding", src: "/images/work/wall-decals.jpg" },
  { title: "Canvas & Corporate Displays", category: "Corporate Displays", src: "/images/work/big-bold-printing.jpg" },
  { title: "Glow & Backlit Signage", category: "Signage", src: "/images/work/vehicle-branding.jpg" },
  { title: "Vehicle Branding", category: "Fleet Graphics", src: "/images/work/banner2.jpg" },
  { title: "Signage & Wayfinding", category: "Wayfinding Systems", src: "/images/applications/wayfinding.jpg" },
];

export const FAQS = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Flex and vinyl start at a single full roll, with distributor and bulk pricing on carton/pallet volumes. Inks are available in 1L and 5L units. Share your monthly consumption and we'll structure a slab that fits.",
  },
  {
    q: "What are your delivery timelines?",
    a: "In-stock items dispatch the same day from our PCMC, Pune and Satara branches, with delivery in 1–3 business days across Maharashtra and onward by transport pan-India. Bulk and project orders get committed dispatch dates.",
  },
  {
    q: "Do you handle custom or non-standard requirements?",
    a: "We supply custom widths (up to 10 ft rolls), GSM grades, finishes and private-label options for qualifying volumes. Tell us your application and substrate and our team recommends the right material.",
  },
  {
    q: "How does bulk and contract supply work?",
    a: "We hold safety stock against forecasted volumes, lock pricing for the contract term and offer priority dispatch. Recurring buyers also get a dedicated point of contact across our branches.",
  },
];

// ===== Trusted By Industry Leaders =====
// NOTE: numbers are editable placeholders; list ONLY brands genuinely served.
// Honest, provable facts only.
export const COMPANY_FACTS = [
  { value: "2019", label: "Established", sub: "Onkarap Signages Pvt. Ltd." },
  { value: "3", label: "Branches", sub: "PCMC · Pune · Satara" },
  { value: "7", label: "Service Verticals", sub: "Supply to maintenance" },
  { value: "MH", label: "Coverage", sub: "Maharashtra-wide" },
];

// Real clients from actual work — edit/replace with confirmed names only.
export const CLIENTS = [
  "Skoda",
  "Bajaj Auto",
  "HDFC Bank",
  "Powertron",
  "TRI Gases",
  "Piller",
  "Jackaura",
  "VeggoVilla",
];

// Sectors we work for (capabilities, not specific client claims).
export const SECTORS = [
  { name: "Retail & Shops", icon: "store" },
  { name: "Corporate Offices", icon: "sign" },
  { name: "Real Estate", icon: "building" },
  { name: "Political Campaigns", icon: "flag" },
  { name: "Events & Exhibitions", icon: "event" },
  { name: "Automobile", icon: "vehicle" },
  { name: "Hospitality", icon: "mall" },
  { name: "Education", icon: "education" },
];

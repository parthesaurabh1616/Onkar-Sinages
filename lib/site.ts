export const SITE = {
  name: "Onkar AP Signages",
  legalName: "Onkarap Signages Pvt. Ltd.",
  tagline: "Signage Media & Advertising Material Leader",
  description:
    "Onkar AP Signages is a Maharashtra-based trading company operating two divisions — advertising and signage materials (flex, vinyl, inks, lamination, ACP), and industrial cutting tools as an authorised distributor supplying automotive, general engineering, oil and gas and other manufacturing industries. Branches at PCMC, Pune and Satara.",
  url: "https://www.onkarsinages.com",
  linkedin: "https://www.linkedin.com/in/onkar-signages/",
  phoneDisplay: "+91 96896 76416",
  phone: "+919689676416",
  whatsapp: "919689676416",
  email: "onkarsignages@gmail.com",
  gstin: "27AAEC07938E1Z7",
  addressLine: "Godown No. 03, Sr. No. 320, opp. Jog Maharaja Garden, near PCMC Swimming Pool",
  locality: "Pimpri Gaon, Pimpri Colony, Pimpri-Chinchwad",
  region: "Maharashtra",
  postalCode: "411017",
  address:
    "Godown No. 03, Sr. No. 320, opp. Jog Maharaja Garden, near PCMC Swimming Pool, Pimpri Gaon, Pimpri Colony, Pimpri-Chinchwad, Pune, Maharashtra 411017",
  mapQuery: "ONKARAP+SIGNAGES+PVT+LTD+Pimpri+Chinchwad+Pune+411017",
  branches: ["PCMC", "Pune", "Satara"],
  established: 2019,
};

/**
 * The company runs two distinct businesses with two distinct audiences: a brand
 * or agency buying print media, and a plant buying cutting tools. They get
 * separate routes and separate navigation rather than one mixed page.
 */
export const DIVISIONS = [
  {
    id: "media",
    number: "01",
    name: "Advertising & Signage",
    short: "Signage Media",
    href: "/",
    tagline: "Material supply, printing, branding, signage and installation.",
    audience: "Brands · Agencies · Retail · Events",
    icon: "printer",
  },
  {
    id: "tools",
    number: "02",
    name: "Industrial Cutting Tools",
    short: "Cutting Tools",
    href: "/cutting-tools",
    tagline: "Authorised distributor of cutting tools — solid carbide, HSS, brazed and special tooling supplied across industry.",
    audience: "Oil & Gas · Automotive · General Engineering · CNC Job Shops",
    icon: "tools",
  },
] as const;

export type DivisionId = (typeof DIVISIONS)[number]["id"];

/** In-page navigation for the cutting tools division. */
export const TOOLS_NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Range", href: "#range" },
  { label: "Solutions", href: "#solutions" },
  { label: "Re-New", href: "#re-new" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Industries", href: "#industries" },
  { label: "Enquiry", href: "#enquiry" },
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#clients" },
  { label: "Materials", href: "#products" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

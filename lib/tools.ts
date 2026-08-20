/**
 * ============================================================================
 * DIVISION 02 — INDUSTRIAL CUTTING TOOLS
 * ============================================================================
 *
 * Onkar AP Signages is the DISTRIBUTOR for Aayudh Tools. Aayudh manufactures;
 * we supply, support and service the customer.
 *
 * CONTENT RULES FOR THIS FILE — read before editing:
 *
 * 1. Never state or imply that Onkar manufactures these tools. Manufacturing,
 *    grinding capability and the Waluj plant all belong to Aayudh Tools.
 * 2. Every performance figure here is traceable to the Aayudh brochure and is
 *    attributed to Aayudh as a stated claim (see `claim` fields). Do not
 *    promote a claim into a guarantee.
 * 3. No invented technical data. Diameter, flute count, helix angle, coating,
 *    carbide grade, tolerance, speeds and feeds are all made to order against
 *    the customer's component — so products carry `specNote`, never a fake
 *    spec table.
 * 4. Product names are descriptive, not catalogue codes. We have no confirmed
 *    Aayudh part numbers yet — see BUSINESS_CONFIRMATIONS below.
 *
 * Source of truth: Aayudh Tools brochure (6pp) + www.aayudh.co.in.
 * Imagery in /public/images/tools is Aayudh's brochure photography, used as
 * their distributor.
 */

/** The principal we distribute for. Kept separate from SITE (that is Onkar). */
export const AAYUDH = {
  /** Trading name, as it appears on the brochure and the tools themselves. */
  brand: "Aayudh Tools",
  /** Registered entity we hold the distributorship with. Use in formal statements. */
  legalName: "Aayudh Synergies Pvt. Ltd.",
  tagline: "Expect more from us",
  positioning: "Technology | Innovation | Precision",
  promise: "Total solutions in solid carbide, brazed & HSS",
  website: "https://www.aayudh.co.in",
  /** Aayudh's own plant — NOT an Onkar facility. Never present it as ours. */
  plant: "E 70/15, MIDC Waluj, Chhatrapati Sambhajinagar (Aurangabad) 431136",
} as const;

/**
 * How we describe our own role. Precise wording matters legally, so keep the
 * two halves intact: we are a TRADING company and an authorised distributor;
 * Aayudh Tools is the MANUFACTURER. Neither claim should absorb the other.
 */
export const DISTRIBUTOR_ROLE = {
  short: "Authorised distributor of cutting tools",
  /** One line for tight spaces where the manufacturer must still be named. */
  withPrincipal: "Authorised distributor for Aayudh Synergies Pvt. Ltd.",
  long: "Onkarap Signages Pvt. Ltd. is a trading company. Our cutting tools division is an authorised distributor for Aayudh Synergies Pvt. Ltd., supplying cutting tools — solid carbide, HSS, brazed and special tooling — to the automotive, general engineering, oil and gas and other manufacturing industries as per client requirement, through our branches at Pune, PCMC and Satara. We handle application enquiries and coordinate supply, special-tool development and reconditioning with the manufacturer.",
} as const;

/**
 * What the business actually is. Stated plainly because a plant buying tooling
 * should know it is buying from a trading and distribution company, not from
 * the works that grinds the tools.
 *
 * `intro` is the owner's own company statement — treat the facts in it as
 * authoritative and do not embellish them. Note "have now started": the tools
 * business is new, so avoid copy that implies a long track record in tooling
 * or a deep tooling inventory we have not confirmed.
 */
export const COMPANY_MODEL = {
  type: "Trading company",
  since: 2019,
  yearsInMarket: 7,
  branches: "Pune · PCMC · Satara",
  intro:
    "Onkarap Signages Pvt. Ltd. is a trading company with three branches across Pune, PCMC and Satara. We have been associated with the market for the last seven years, supplying every kind of advertising and signage material within Maharashtra. We have now started an additional business in industrial carbide tools — as authorised distributors for Aayudh Synergies Pvt. Ltd., we supply cutting tools, solid carbide, HSS, brazed and special tooling to the automotive, general engineering, oil and gas and other manufacturing industries, as per client requirement.",
  /** Condensed to a single line for tight spaces. */
  introShort:
    "A trading company of seven years' standing, supplying advertising and signage material across Maharashtra — and now industrial carbide tools as authorised distributors for Aayudh Synergies Pvt. Ltd.",
} as const;

// ============================================================================
// CATEGORIES
// ============================================================================

export type ToolCategory = {
  slug: string;
  name: string;
  tagline: string;
  /** What a production engineer actually uses this family for. */
  description: string;
  image: string;
  imageAlt: string;
  /** Tool types inside this family, from the brochure. */
  types: string[];
};

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    slug: "solid-carbide",
    name: "Solid Carbide Tools",
    tagline: "The core range — drills, end mills, reamers and step tools",
    description:
      "Solid carbide tooling for production machining, including standard geometries and application-specific grinds. Aayudh has supplied solid carbide tools to Indian industry for over a decade.",
    image: "/images/tools/solid-carbide-range.jpg",
    imageAlt:
      "Five solid carbide tools including coated step drills, an end mill and a form cutter, shown side by side.",
    types: ["Drills", "End Mills", "Reamers", "Step Tools", "Profile Tools"],
  },
  {
    slug: "special-form-tools",
    name: "Special & Form Tools",
    tagline: "Ground to your component, not to a catalogue",
    description:
      "Special step tools and combination profile / form tools developed around a specific component and operation. This is the part of the range built entirely to drawing.",
    image: "/images/tools/combination-form-tool.jpg",
    imageAlt:
      "Combination form tool render showing a multi-step profile ground into a single carbide body.",
    types: [
      "Special Step Tools",
      "Combination Tools",
      "Profile / Form Tools",
      "Drill + Reamer Combinations",
    ],
  },
  {
    slug: "hss-tools",
    name: "HSS Tools",
    tagline: "High-speed steel tooling for general engineering",
    description:
      "HSS end mills, cutters, drills and reamers supplied alongside the carbide range so a single order can cover a full tool crib. Carries the Vajra name in Aayudh's material.",
    image: "/images/tools/hss-range.jpg",
    imageAlt:
      "Row of five HSS tools including an end mill, T-slot cutter, shell cutter, drill and taper-shank reamer.",
    types: ["End Mills", "T-Slot Cutters", "Drills", "Taper-Shank Reamers", "Shell Cutters"],
  },
  {
    slug: "brazed-tools",
    name: "Brazed Tools",
    tagline: "Carbide-tipped tooling for heavier, larger-diameter work",
    description:
      "Brazed carbide tooling where a tipped construction suits the diameter or the operation better than solid carbide — typically larger counterbores, step tools and reamers.",
    image: "/images/tools/brazed-range.jpg",
    imageAlt:
      "Three brazed carbide tools — a stepped counterbore, a taper-shank reamer and a drill — on a reflective surface.",
    types: ["Brazed Step Tools", "Counterbores", "Reamers", "Shell Cutters"],
  },
];

// ============================================================================
// PRODUCTS
// ============================================================================

export type ToolProduct = {
  slug: string;
  name: string;
  category: ToolCategory["slug"];
  /** One line a purchase manager can scan. */
  summary: string;
  image: string;
  imageAlt: string;
  /** Operations this tool performs — from the brochure, not invented. */
  operations: string[];
  /**
   * Shown instead of a specification table. These tools are ground to the
   * customer's component, so publishing a spec table would mean inventing one.
   */
  specNote: string;
};

const MADE_TO_DRAWING =
  "Diameter, flute count, geometry, coating and carbide grade are set against your component and operation. Share a drawing or sample for a quotation.";

export const TOOL_PRODUCTS: ToolProduct[] = [
  // --- Solid carbide -------------------------------------------------------
  {
    slug: "carbide-drill",
    name: "Solid Carbide Drill",
    category: "solid-carbide",
    summary: "Production drilling in a single pass, ground for chip evacuation.",
    image: "/images/tools/carbide-drill.jpg",
    imageAlt: "Solid carbide drill with a polished flute and plain cylindrical shank.",
    operations: ["Drilling", "Pilot holes", "Through & blind holes"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "carbide-end-mill",
    name: "Solid Carbide End Mill",
    category: "solid-carbide",
    summary: "Milling and profiling, in standard and application-specific grinds.",
    image: "/images/tools/carbide-end-mill.jpg",
    imageAlt: "Solid carbide end mill with helical flutes and a stepped cutting end.",
    operations: ["Slotting", "Profiling", "Shoulder milling", "Finishing"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "carbide-step-drill",
    name: "Carbide Step Drill",
    category: "solid-carbide",
    summary: "Drills and steps a hole in one entry — fewer tool changes per cycle.",
    image: "/images/tools/carbide-step-drill.jpg",
    imageAlt: "Coated carbide step drill with two cutting diameters ground into one body.",
    operations: ["Drilling", "Stepping", "Chamfering"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "carbide-step-tool",
    name: "Special Step Tool",
    category: "solid-carbide",
    summary: "Multi-diameter tool replacing a sequence of separate operations.",
    image: "/images/tools/carbide-step-tool.jpg",
    imageAlt: "Multi-step carbide tool with several ground diameters along its length.",
    operations: ["Multi-diameter drilling", "Counterboring", "Chamfering"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "carbide-form-cutter",
    name: "Carbide Form Cutter",
    category: "solid-carbide",
    summary: "Cuts a finished profile in one pass instead of interpolating it.",
    image: "/images/tools/carbide-form-cutter.jpg",
    imageAlt: "Coated carbide form cutter with a shaped profile ground into the cutting head.",
    operations: ["Form milling", "Profile generation", "Grooving"],
    specNote: MADE_TO_DRAWING,
  },

  // --- Special & form ------------------------------------------------------
  {
    slug: "drill-reamer-combination",
    name: "Drill + Reamer Combination",
    category: "special-form-tools",
    summary:
      "Aayudh's 'Dreamer' — drilling and reaming combined into one tool and one entry.",
    image: "/images/tools/drill-reamer-dreamer.jpg",
    imageAlt:
      "Sectioned render of a combination drill and reamer showing the transition between both cutting geometries.",
    operations: ["Drilling", "Reaming", "Combined single-entry cycle"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "combination-form-tool",
    name: "Combination Form Tool",
    category: "special-form-tools",
    summary:
      "Two operations combined with a profile milling form tool — Aayudh's core speciality.",
    image: "/images/tools/combination-form-tool.jpg",
    imageAlt:
      "Combination form tool render with a stepped profile and a colour-mapped cutting geometry.",
    operations: ["Profile milling", "Combined operations", "Form generation"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "flute-polish-tools",
    name: "FP (Flute Polish) Tools",
    category: "special-form-tools",
    summary:
      "Flute form plus flute finish, specified together to address chip flow and built-up edge.",
    image: "/images/tools/flute-polish-tools.jpg",
    imageAlt: "Batch of carbide tools with polished flutes standing in a production tray.",
    operations: ["Machining sticky materials", "Chip-flow-critical work"],
    specNote: MADE_TO_DRAWING,
  },

  // --- HSS -----------------------------------------------------------------
  {
    slug: "hss-end-mill",
    name: "HSS End Mill",
    category: "hss-tools",
    summary: "General-purpose milling for job-shop and maintenance work.",
    image: "/images/tools/hss-end-mill.jpg",
    imageAlt: "High-speed steel end mill with four helical flutes.",
    operations: ["Slotting", "Profiling", "Shoulder milling"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "hss-t-slot-cutter",
    name: "HSS T-Slot Cutter",
    category: "hss-tools",
    summary: "Cuts T-slots and undercuts on machine tables and fixtures.",
    image: "/images/tools/hss-t-slot-cutter.jpg",
    imageAlt: "High-speed steel T-slot cutter with a toothed head on a straight shank.",
    operations: ["T-slot milling", "Undercutting"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "hss-drill",
    name: "HSS Drill",
    category: "hss-tools",
    summary: "Twist drilling across general engineering materials.",
    image: "/images/tools/hss-drill.jpg",
    imageAlt: "High-speed steel twist drill with a reduced shank.",
    operations: ["Drilling", "Pilot holes"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "hss-taper-reamer",
    name: "HSS Taper-Shank Reamer",
    category: "hss-tools",
    summary: "Finish reaming to size on taper-shank machine spindles.",
    image: "/images/tools/hss-taper-reamer.jpg",
    imageAlt: "High-speed steel reamer with a Morse taper shank.",
    operations: ["Reaming", "Hole finishing"],
    specNote: MADE_TO_DRAWING,
  },

  // --- Brazed --------------------------------------------------------------
  {
    slug: "brazed-shell-cutter",
    name: "Brazed Shell Cutter",
    category: "brazed-tools",
    summary: "Carbide-tipped cutter for larger-diameter facing and counterboring.",
    image: "/images/tools/brazed-shell-cutter.jpg",
    imageAlt:
      "Brazed carbide shell cutter with several carbide tips brazed into a steel body.",
    operations: ["Counterboring", "Facing", "Large-diameter work"],
    specNote: MADE_TO_DRAWING,
  },
  {
    slug: "brazed-step-tool",
    name: "Brazed Step Tool & Reamer",
    category: "brazed-tools",
    summary: "Tipped step tools and reamers where solid carbide is not the economical choice.",
    image: "/images/tools/brazed-range.jpg",
    imageAlt:
      "Brazed carbide step tool, taper-shank reamer and drill shown together.",
    operations: ["Stepping", "Counterboring", "Reaming"],
    specNote: MADE_TO_DRAWING,
  },
];

// ============================================================================
// SOLUTIONS — the engineering problems this division actually solves
// ============================================================================

export type ToolSolution = {
  id: string;
  /** The problem, in the customer's words. */
  problem: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  /**
   * A figure Aayudh states in their brochure. Rendered with visible
   * attribution so it never reads as our own guarantee.
   */
  claim?: string;
};

export const TOOL_SOLUTIONS: ToolSolution[] = [
  {
    id: "cycle-time",
    problem: "Too many tool changes in the cycle",
    title: "Combine two operations into one tool",
    body: "A drill-and-reamer combination — Aayudh calls it the Dreamer — does in one entry what normally takes two tools and two changes. The same logic drives their combination profile and form tools.",
    image: "/images/tools/drill-reamer-dreamer.jpg",
    imageAlt:
      "Sectioned render of a combination drill and reamer showing both cutting geometries in one body.",
  },
  {
    id: "chip-flow",
    problem: "Chip flow and built-up edge",
    title: "Specify flute form and flute finish together",
    body: "Built-up edge and poor chip evacuation shorten tool life long before the cutting edge wears out. Aayudh's FP (flute polish) tools pair the flute form with the flute finish to address both.",
    image: "/images/tools/flute-polish-tools.jpg",
    imageAlt: "Carbide tools with polished flutes standing in a production tray.",
  },
  {
    id: "tool-cost",
    problem: "PCD tooling is too expensive for the batch",
    title: "Coated carbide instead of PCD on non-ferrous work",
    body: "For small to medium batches of non-ferrous components, Aayudh's 'N' geometry and coated tools are positioned as the middle path between conventional solid carbide and PCD.",
    claim:
      "Aayudh states these give 30–50% of PCD life and 2.5–3× the life of conventional solid carbide, where PCD tools typically cost 5–10× solid carbide.",
    image: "/images/tools/application-geometries.jpg",
    imageAlt:
      "Grid of six end-cutting geometries shown face-on in different coatings and configurations.",
  },
  {
    id: "tool-life",
    problem: "Replacing complex tools that still have life in them",
    title: "Recondition instead of replace",
    body: "Standard drills, end mills and reamers are routinely reground — but complex and combination tools usually get scrapped. Aayudh's Re-New service returns those to service.",
    claim:
      "Aayudh states that after renewing a tool, 80–85% of the life of a fresh tool can be achieved.",
    image: "/images/tools/re-new-reconditioning.jpg",
    imageAlt:
      "Render comparing a worn cutting edge with the same tool after reconditioning.",
  },
];

// ============================================================================
// SERVICES
// ============================================================================

export const TOOL_SERVICES = [
  {
    slug: "special-tool-development",
    name: "Special Tool Development",
    desc: "Send a component drawing. Aayudh's engineers design the tool around the operation, and we manage the loop from enquiry to first article.",
    icon: "compass",
  },
  {
    slug: "re-new-reconditioning",
    name: "Re-New Reconditioning",
    desc: "Reconditioning of worn tools — including complex and combination tools that are normally scrapped rather than reground.",
    icon: "wrench",
  },
  {
    slug: "application-engineering",
    name: "Application Engineering",
    desc: "Tool selection worked against your material, machine and cycle time rather than picked off a size chart.",
    icon: "headset",
  },
  {
    slug: "tool-cost-optimisation",
    name: "Tool Cost Optimisation",
    desc: "Reviewing cost per component — not cost per tool — across combination tooling, regrind cycles and substitution options.",
    icon: "layers",
  },
  {
    slug: "stock-supply",
    name: "Supply & Replenishment",
    desc: "Scheduled supply coordinated against your consumption so a running line does not wait on tooling.",
    icon: "boxes",
  },
] as const;

// ============================================================================
// MANUFACTURING — Aayudh's capability. Attributed, never claimed as ours.
// ============================================================================

export const AAYUDH_CAPABILITY = {
  heading: "Manufactured by Aayudh Tools",
  intro:
    "We are the distributor. The tools are ground at Aayudh's plant in MIDC Waluj on CNC 6-axis grinding machines, with inspection equipment to match.",
  items: [
    {
      name: "CNC 6-Axis Tool Grinding",
      desc: "Multi-axis grinding for complex and combination geometries.",
      image: "/images/tools/mfg-cnc-grinding.jpg",
      imageAlt: "Operator working at a CNC tool and cutter grinding machine on the shop floor.",
    },
    {
      name: "Precision Flute Grinding",
      desc: "Flute form and finish ground under coolant on Rollomatic equipment.",
      image: "/images/tools/mfg-rollomatic-grinding.jpg",
      imageAlt: "Close-up of a grinding wheel cutting a flute into a carbide blank on a Rollomatic machine.",
    },
    {
      name: "Inspection & Measurement",
      desc: "Tool geometry verified on Walter Helicheck measuring equipment.",
      image: "/images/tools/mfg-walter-inspection.jpg",
      imageAlt: "Engineer operating a Walter Helicheck Pro tool measuring machine.",
    },
    {
      name: "Reconditioning Line",
      desc: "Worn tools reground and returned to service through the Re-New process.",
      image: "/images/tools/mfg-regrinding.jpg",
      imageAlt: "Cutting tool being reground under flood coolant on a grinding machine.",
    },
  ],
} as const;

// ============================================================================
// MATERIALS & INDUSTRIES — only what the brochure supports
// ============================================================================

/** Materials Aayudh's brochure explicitly names as advanced-material segments. */
export const TOOL_MATERIALS = [
  "Duplex Stainless Steel",
  "Inconel",
  "Titanium",
  "Non-Ferrous Alloys",
  "Alloy & Carbon Steels",
  "Cast Iron",
] as const;

/**
 * Two different kinds of evidence sit in this list, and the wording keeps them
 * apart on purpose:
 *  - Aerospace and Medical are named in Aayudh's own published material.
 *  - Oil & Gas, Automotive and General Engineering are segments we serve
 *    directly and are stated on our own account, not the manufacturer's.
 * Keep that distinction if you edit these entries.
 */
export const TOOL_INDUSTRIES = [
  {
    name: "Oil & Gas Industries",
    desc: "Equipment and component manufacturing in corrosion-resistant and high-strength alloys — the duplex, Inconel and titanium work this range is built for.",
    icon: "droplet",
  },
  {
    name: "Automotive & Auto Component Industries",
    desc: "Volume machining where cycle time and cost per component decide the tooling.",
    icon: "vehicle",
  },
  {
    name: "General Engineering Industries",
    desc: "Job shops and fabricators running mixed batches across materials.",
    icon: "tools",
  },
  {
    name: "Aerospace Industry",
    desc: "Named in Aayudh's material as a segment served with advanced-material tooling.",
    icon: "spark",
  },
  {
    name: "Medical Industry",
    desc: "Named in Aayudh's material as a segment served with advanced-material tooling.",
    icon: "shield",
  },
] as const;

// ============================================================================
// WHY BUY THROUGH US — the distributor's actual value
// ============================================================================

export const TOOL_WHY_US = [
  {
    title: "One Local Point of Contact",
    desc: "Enquiry, quotation, delivery and reconditioning handled locally instead of chased across a supply chain.",
    icon: "headset",
  },
  {
    title: "Application-Led Selection",
    desc: "We take the component and the operation first, then work back to the tool.",
    icon: "compass",
  },
  {
    title: "Special Tools, Not Just Catalogue Sizes",
    desc: "Direct access to Aayudh's special step, combination and form tool capability.",
    icon: "layers",
  },
  {
    title: "Reconditioning Loop",
    desc: "We coordinate the Re-New cycle so worn tools go back into service instead of into scrap.",
    icon: "wrench",
  },
  {
    title: "Backed by an Established Manufacturer",
    desc: "Aayudh has supplied solid carbide tooling to Indian industry for over a decade.",
    icon: "shield",
  },
  {
    title: "Supply Continuity",
    desc: "Scheduled replenishment planned against your consumption, served from three branches.",
    icon: "truck",
  },
] as const;

// ============================================================================
// OPEN ITEMS FOR THE BUSINESS OWNER
// ============================================================================

/**
 * Surfaced in the implementation report, NOT rendered on the site.
 * Resolve these before treating the division page as final.
 *
 * 1. TERRITORY — "Authorised distributor" is used without a territory. Confirm
 *    the exact wording Aayudh permits (region? exclusive? "channel partner"?).
 * 2. VAJRA — the brochure says "HSS & BRAZED TOOLS FROM VAJRA". Whether Vajra
 *    is an Aayudh brand, division, or separate partner is NOT established. The
 *    HSS category currently says only that the name appears in Aayudh's
 *    material. Confirm and rewrite that one sentence.
 * 3. IMAGE RIGHTS — all tool photography here is lifted from Aayudh's
 *    brochure. Confirm Aayudh permits distributor use of their assets.
 * 4. PART NUMBERS — no confirmed Aayudh catalogue codes. Product names are
 *    descriptive. Add real codes when available.
 * 5. STOCK — TOOL_SERVICES claims distributor stock. Confirm what is actually
 *    held versus indent-only, and adjust the "Stock & Supply" copy.
 * 6. TOOLS ENQUIRY ROUTING — tooling enquiries currently reach the same inbox
 *    as signage enquiries. Confirm whether a separate address is wanted.
 */
export const BUSINESS_CONFIRMATIONS = 6;

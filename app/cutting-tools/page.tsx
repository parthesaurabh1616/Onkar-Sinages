import type { Metadata } from "next";
import { SITE, TOOLS_NAV_LINKS } from "@/lib/site";
import { AAYUDH, TOOL_CATEGORIES, TOOL_PRODUCTS } from "@/lib/tools";
import { QuoteProvider } from "@/components/providers/QuoteProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { ToolsHero } from "@/components/tools/ToolsHero";
import { ToolsRange } from "@/components/tools/ToolsRange";
import { ToolsSolutions } from "@/components/tools/ToolsSolutions";
import { ReNew } from "@/components/tools/ReNew";
import { AayudhCapability } from "@/components/tools/AayudhCapability";
import { ToolsIndustries } from "@/components/tools/ToolsIndustries";
import { ToolsContact } from "@/components/tools/ToolsContact";

const TITLE =
  "Industrial Cutting Tools — Solid Carbide, HSS & Brazed | Aayudh Tools Distributor";
const DESCRIPTION =
  "Solid carbide, HSS and brazed cutting tools plus special step, combination and form tools — supplied by Onkar AP Signages as authorised distributor for Aayudh Tools. Serving oil and gas, automotive and general engineering manufacturing, with Re-New tool reconditioning and application engineering across Maharashtra.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "solid carbide tools",
    "cutting tool supplier Pune",
    "Aayudh Tools distributor",
    "carbide drills",
    "carbide end mills",
    "special step tools",
    "combination form tools",
    "HSS tools supplier",
    "brazed carbide tools",
    "tool reconditioning",
    "tool regrinding Pune",
    "cutting tools Maharashtra",
    "oil and gas cutting tools",
    "oil and gas machining tools India",
    "tooling for duplex stainless steel",
    "Inconel machining tools",
  ],
  alternates: { canonical: "/cutting-tools" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${SITE.url}/cutting-tools`,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.svg"],
  },
};

/**
 * Structured data for the division.
 *
 * Only facts we can stand behind: the categories we carry, the brand we
 * distribute, and the seller. No ratings, no reviews, no invented offers.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industrial Cutting Tools",
          item: `${SITE.url}/cutting-tools`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Industrial Cutting Tools",
      url: `${SITE.url}/cutting-tools`,
      description: DESCRIPTION,
      about: TOOL_CATEGORIES.map((c) => c.name),
      isPartOf: { "@type": "WebSite", name: SITE.legalName, url: SITE.url },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: TOOL_PRODUCTS.length,
        itemListElement: TOOL_PRODUCTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: p.name,
            description: p.summary,
            image: `${SITE.url}${p.image}`,
            brand: { "@type": "Brand", name: AAYUDH.brand },
            category: TOOL_CATEGORIES.find((c) => c.slug === p.category)?.name,
            seller: { "@type": "Organization", name: SITE.legalName },
          },
        })),
      },
    },
  ],
};

export default function CuttingToolsPage() {
  return (
    <QuoteProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar
        division="tools"
        links={TOOLS_NAV_LINKS}
        ctaLabel="Tool Enquiry"
      />
      <main>
        <ToolsHero />
        <ToolsRange />
        <ToolsSolutions />
        <ReNew />
        <AayudhCapability />
        <ToolsIndustries />
        <ToolsContact />
      </main>
      <Footer />
      <FloatingActions />
    </QuoteProvider>
  );
}

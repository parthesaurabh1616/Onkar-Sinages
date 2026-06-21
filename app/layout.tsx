import type { Metadata, Viewport } from "next";
import { Inter, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const KEYWORDS = [
  "Advertising Infrastructure Company",
  "Complete Advertising Solutions",
  "Advertising Material Supplier",
  "Flex Printing Services",
  "Vinyl Printing Services",
  "Outdoor Advertising Solutions",
  "Signage Company",
  "Branding Solutions Company",
  "Hoarding Installation Services",
  "Retail Branding Solutions",
  "Advertising Company Pune",
  "Signage Company Maharashtra",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Advertising Infrastructure Partner | Printing, Branding, Signage & Installation`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Advertising & Signage",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Advertising Infrastructure Partner`,
    description: SITE.description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Advertising Infrastructure Partner`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Advertising Infrastructure Partner`,
    description: SITE.description,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#15120E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  description: SITE.description,
  foundingDate: String(SITE.established),
  email: SITE.email,
  telephone: SITE.phone,
  sameAs: [SITE.linkedin],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.addressLine,
    addressLocality: "Pimpri-Chinchwad, Pune",
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: "IN",
  },
  areaServed: ["Maharashtra", "India"],
  knowsAbout: [
    "Advertising Material Supply",
    "Large Format Printing",
    "Flex Printing",
    "Vinyl Printing",
    "Branding Solutions",
    "Signage Solutions",
    "Outdoor Advertising",
    "Hoarding Installation",
    "Branding Maintenance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-primary text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

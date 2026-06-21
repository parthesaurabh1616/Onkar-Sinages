# Onkar Signages — Premium B2B Website

A world-class, international-grade industrial website for a supplier of advertising & printing raw materials (flex, vinyl, inks, lamination, signage media). Built to feel like a ₹100 Cr enterprise brand — not a local supplier site.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** (custom dark industrial design system)
- **Framer Motion** (reveal, parallax, sliders, micro-interactions)
- **Lenis** (smooth scrolling)
- Fully static (SSG) — every route prerendered for top Core Web Vitals

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Design System

| Token      | Value     | Use                         |
| ---------- | --------- | --------------------------- |
| primary    | `#0B1220` | Deep navy background        |
| secondary  | `#121826` | Matte black sections        |
| accent     | `#3B82F6` | Electric blue (CTAs)        |
| highlight  | `#60A5FA` | Lighter blue highlights     |
| muted      | `#94A3B8` | Industrial gray text        |
| ink        | `#FFFFFF` | White typography            |

Defined in `tailwind.config.ts` and `app/globals.css`.

## Sections (single-page)

1. **Hero** — parallax floating flex rolls, ink bottles, hoardings + pointer/scroll parallax
2. **Trust** — client marquee + animated counters
3. **Products** — searchable + filterable cards with **compare** tray/modal, live stock badges
4. **Why Us** — 8 capability cards
5. **Industries** — 8-tile application grid
6. **Quality** — scroll-driven 5-stage timeline
7. **AI Material Advisor** — interactive product recommender
8. **Featured Projects** — animated case-study switcher
9. **Testimonials** — auto-playing premium slider
10. **Coverage** — interactive India map + live inventory status
11. **FAQ** — accordion
12. **CTA Banner** — quote + catalogue download
13. **Contact** — advanced lead form

### Premium features included
Product catalogue download (lead-gated `/catalogue`), WhatsApp floating button, quote-request popup (global), product comparison, product search, city-wise coverage map, inventory availability status, AI product recommendation, interactive specs, distributor inquiry, scroll progress bar, back-to-top.

## Customize

- **Company details** (name, phone, WhatsApp, email, address): `lib/site.ts`
- **Products, stats, FAQs, projects, testimonials, coverage**: `lib/data.ts`
- **SEO / keywords / metadata**: `app/layout.tsx`
- **Colors / animations**: `tailwind.config.ts`

> The lead form and catalogue form are front-end demos: the quote form hands the
> lead off to WhatsApp. To capture leads server-side, wire the `handleSubmit` in
> `components/ui/LeadForm.tsx` to an API route / CRM / email service.

## SEO

Per-page metadata, Open Graph + Twitter cards (`public/og.svg`), Organization
JSON-LD, `robots.txt` and `sitemap.xml` (generated via `app/robots.ts` &
`app/sitemap.ts`). Target keywords baked into copy and metadata.

---

© Onkar Signages. Replace placeholder contact details before going live.

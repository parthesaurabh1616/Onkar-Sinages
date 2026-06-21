import { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name: string };

const paths: Record<string, ReactElement> = {
  shield: (
    <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3zM9.5 12l1.8 1.8L15 10" />
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12l8-8 9 1 1 9-8 8-10-10z" />
      <circle cx="14.5" cy="9.5" r="1.4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  boxes: (
    <>
      <path d="M3 8l4-2 4 2v4l-4 2-4-2V8zM13 8l4-2 4 2v4l-4 2-4-2V8z" />
      <path d="M8 16l4-2 4 2v4l-4 2-4-2v-4z" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0116 0v1" />
      <path d="M4 13h3v5H5a1 1 0 01-1-1v-4zM20 13h-3v5h2a1 1 0 001-1v-4z" />
      <path d="M17 18v1a3 3 0 01-3 3h-2" />
    </>
  ),
  billboard: (
    <>
      <rect x="3" y="4" width="18" height="11" rx="1" />
      <path d="M8 21l1-6M16 21l-1-6M6 9l3 3 3-4 3 3 2-2" />
    </>
  ),
  store: (
    <>
      <path d="M4 9l1-4h14l1 4M4 9v11h16V9M4 9h16" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  mall: (
    <>
      <path d="M3 21h18M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-6h6v6M9 11h6" />
    </>
  ),
  outdoor: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M12 14v7M8 21h8M10 9h4" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4M5 4h11l-1.5 4L16 12H5" />
    </>
  ),
  event: (
    <>
      <path d="M12 3l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z" />
    </>
  ),
  sign: (
    <>
      <path d="M12 3v3M6 6h9l3 3-3 3H6zM12 12v9M8 21h8" />
    </>
  ),
  vehicle: (
    <>
      <path d="M3 13l2-5h10l3 5M3 13h16v4H3zM3 17v2M19 17v2" />
      <circle cx="7" cy="17" r="1.4" />
      <circle cx="15" cy="17" r="1.4" />
    </>
  ),
  roll: (
    <>
      <ellipse cx="7" cy="12" rx="3" ry="8" />
      <path d="M7 4h10a3 8 0 010 16H7" />
      <ellipse cx="17" cy="12" rx="1.4" ry="3.5" />
    </>
  ),
  droplet: <path d="M12 3c4 5 6 7.5 6 10.5A6 6 0 016 13.5C6 10.5 8 8 12 3z" />,
  spark: (
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12l4 4 10-11" />,
  printer: (
    <>
      <path d="M6 9V3h12v6M6 18H4a1 1 0 01-1-1v-5a2 2 0 012-2h14a2 2 0 012 2v5a1 1 0 01-1 1h-2" />
      <rect x="7" y="14" width="10" height="7" rx="1" />
      <path d="M17 12.5h.01" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a4 4 0 00-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 005.2-5.4l-2.6 2.6-2.1-2.1 2.5-2.5z" />
    </>
  ),
  wrench: (
    <path d="M15 6a4 4 0 015 4.5l-2.6-1.5-2.2 1.3-.1 2.5 2.6 1.5A4 4 0 0110 14L5.5 19.5a2.1 2.1 0 01-3-3L8 11a4 4 0 017-5z" />
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
    </>
  ),
  hospital: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 7v6M9 10h6" />
      <path d="M9 21v-3h6v3" />
    </>
  ),
  education: (
    <>
      <path d="M3 9l9-4 9 4-9 4-9-4z" />
      <path d="M7 11v4c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5v-4M21 9v5" />
    </>
  ),
  govt: (
    <>
      <path d="M3 21h18M4 21V10M20 21V10M12 3l8 4H4l8-4z" />
      <path d="M7 21v-8M11 21v-8M13 21v-8M17 21v-8" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  bank: (
    <>
      <path d="M3 9l9-5 9 5M4 9h16M4 21h16" />
      <path d="M6 9v9M10 9v9M14 9v9M18 9v9" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14a6 6 0 01-1-1z" />
      <path d="M5 19c3-5 7-8 11-9" />
    </>
  ),
  play: <path d="M8 5v14l11-7z" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 17v-7" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3zm4.5 12.3c-.2.5-1.1 1-1.5 1-.4.1-.9.1-1.5-.1-.3-.1-.8-.3-1.4-.6a8 8 0 01-3-2.6c-.6-.8-1-1.6-1-2.5 0-.4.2-.9.5-1.2.2-.2.4-.3.6-.3h.4c.2 0 .3 0 .5.4l.6 1.4c0 .2 0 .3-.1.4l-.3.4-.2.3c-.1.1 0 .3.1.4.3.5.7 1 1.2 1.4.5.4 1 .6 1.3.7.2.1.3 0 .4-.1l.6-.7c.1-.2.3-.1.4-.1l1.3.7c.2.1.3.2.3.3.1.1.1.4 0 .8z" />
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a11 11 0 005 5L14 16l4 1.5V20a1 1 0 01-1 1A14 14 0 014 6a1 1 0 011-1z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.5 6-7.7 6-10.5A6 6 0 006 10.5C6 13.3 8 16.5 12 21z" />
      <circle cx="12" cy="10.5" r="2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4-4" />
    </>
  ),
  download: <path d="M12 4v10m0 0l-4-4m4 4l4-4M5 20h14" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  scale: (
    <>
      <path d="M12 4v16M6 9l-3 6h6l-3-6zM18 9l-3 6h6l-3-6zM5 7h14M12 4l-7 3M12 4l7 3" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.5 4L18 8.5 13.5 10 12 14l-1.5-4L6 8.5 10.5 7 12 3z" />
      <path d="M18 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" />
    </>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  );
}

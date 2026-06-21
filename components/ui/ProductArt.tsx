import { ReactElement } from "react";
import { Product } from "@/lib/data";

/**
 * Photorealistic, brand-free product renders drawn as pure SVG.
 * Modeled on real flex rolls, ink bottles, vinyl, one-way-vision,
 * lamination film and backlit displays — no third-party marks.
 * All gradient/pattern/filter ids are suffixed with the product slug
 * to stay unique across the multiple inline SVGs on the page.
 */
export function ProductArt({ product }: { product: Product }) {
  const id = product.slug;
  const render = RENDERERS[id] ?? RENDERERS.default;

  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={product.name}
    >
      <defs>
        <radialGradient id={`bd-${id}`} cx="50%" cy="34%" r="80%">
          <stop offset="0%" stopColor="#241D14" />
          <stop offset="55%" stopColor="#1A1510" />
          <stop offset="100%" stopColor="#120E0A" />
        </radialGradient>
        <linearGradient id={`floor-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF7A45" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#FF7A45" stopOpacity="0" />
        </linearGradient>
        <filter id={`soft-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* Studio backdrop */}
      <rect width="320" height="200" fill={`url(#bd-${id})`} />
      <rect x="0" y="120" width="320" height="80" fill={`url(#floor-${id})`} />
      <ellipse cx="160" cy="186" rx="150" ry="14" fill="#000" opacity="0.35" />

      {render(id)}

      {/* Vignette */}
      <radialGradient id={`vig-${id}`} cx="50%" cy="45%" r="75%">
        <stop offset="60%" stopColor="#000" stopOpacity="0" />
        <stop offset="100%" stopColor="#000" stopOpacity="0.45" />
      </radialGradient>
      <rect width="320" height="200" fill={`url(#vig-${id})`} opacity="0.5" />
    </svg>
  );
}

type Renderer = (id: string) => ReactElement;

/* ---------- Reusable: a material roll on a kraft core ---------- */
function Roll({
  id,
  cx = 168,
  cy = 104,
  rotate = -17,
  bodyStops,
  sheetColor = "#EDF1F7",
  glossy = false,
}: {
  id: string;
  cx?: number;
  cy?: number;
  rotate?: number;
  bodyStops: [string, string, string, string, string];
  sheetColor?: string;
  glossy?: boolean;
}) {
  const gid = `roll-${id}`;
  return (
    <g filter={`url(#soft-${id})`}>
      <defs>
        {/* Across-axis shading to fake the cylinder curvature */}
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bodyStops[0]} />
          <stop offset="22%" stopColor={bodyStops[1]} />
          <stop offset="50%" stopColor={bodyStops[2]} />
          <stop offset="80%" stopColor={bodyStops[3]} />
          <stop offset="100%" stopColor={bodyStops[4]} />
        </linearGradient>
        <radialGradient id={`${gid}-core`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#7A5126" />
          <stop offset="70%" stopColor="#A9763C" />
          <stop offset="100%" stopColor="#C28A4C" />
        </radialGradient>
      </defs>

      <g transform={`rotate(${rotate} ${cx} ${cy})`}>
        {/* draped sheet at the right/front */}
        <path
          d={`M${cx + 88} ${cy - 26} q34 8 30 64 q-2 26 -16 40 l-10 -2 q14 -22 10 -52 q-3 -34 -26 -46 z`}
          fill={sheetColor}
          opacity="0.95"
        />
        <path
          d={`M${cx + 90} ${cy - 24} q30 10 26 60`}
          fill="none"
          stroke="#000"
          strokeOpacity="0.06"
          strokeWidth="2"
        />

        {/* cylinder body */}
        <rect x={cx - 90} y={cy - 30} width="180" height="60" rx="6" fill={`url(#${gid})`} />
        {/* top specular highlight */}
        <rect
          x={cx - 80}
          y={cy - 26}
          width="160"
          height={glossy ? 9 : 6}
          rx="4"
          fill="#FFFFFF"
          opacity={glossy ? 0.5 : 0.28}
        />
        {/* faint wound-layer lines */}
        <g stroke="#000" strokeOpacity="0.05">
          <line x1={cx - 70} y1={cy - 18} x2={cx + 78} y2={cy - 18} />
          <line x1={cx - 70} y1={cy} x2={cx + 78} y2={cy} />
          <line x1={cx - 70} y1={cy + 16} x2={cx + 78} y2={cy + 16} />
        </g>

        {/* left end cap + kraft core */}
        <ellipse cx={cx - 90} cy={cy} rx="13" ry="30" fill={bodyStops[1]} />
        <ellipse cx={cx - 90} cy={cy} rx="13" ry="30" fill="none" stroke="#000" strokeOpacity="0.12" />
        <ellipse cx={cx - 90} cy={cy} rx="8" ry="20" fill={`url(#${gid}-core)`} />
        <ellipse cx={cx - 90} cy={cy} rx="3.4" ry="9" fill="#0B1018" />
        {/* right end cap */}
        <ellipse cx={cx + 90} cy={cy} rx="11" ry="30" fill={bodyStops[3]} opacity="0.9" />
      </g>
    </g>
  );
}

/* ---------- Reusable: an ink bottle ---------- */
function Bottle({
  id,
  x,
  baseY = 168,
  h = 96,
  w = 30,
  liquid,
  cap,
  glass = "#11192B",
  i,
}: {
  id: string;
  x: number;
  baseY?: number;
  h?: number;
  w?: number;
  liquid: string;
  cap: string;
  glass?: string;
  i: number;
}) {
  const top = baseY - h;
  const half = w / 2;
  const bgid = `bot-${id}-${i}`;
  return (
    <g>
      <defs>
        <linearGradient id={bgid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={glass} />
          <stop offset="40%" stopColor={liquid} />
          <stop offset="100%" stopColor={glass} />
        </linearGradient>
      </defs>
      <ellipse cx={x} cy={baseY + 4} rx={half + 2} ry="4" fill="#000" opacity="0.4" />
      {/* body */}
      <path
        d={`M${x - half} ${top + 22}
            q0 -8 6 -10
            l${w - 12} 0
            q6 2 6 10
            l0 ${h - 30}
            q0 6 -6 6
            l${-(w - 12)} 0
            q-6 0 -6 -6 z`}
        fill={`url(#${bgid})`}
        stroke="#000"
        strokeOpacity="0.25"
      />
      {/* liquid fill */}
      <path
        d={`M${x - half + 1} ${baseY - 40}
            l${w - 2} 0
            l0 ${28}
            q0 6 -6 6 l${-(w - 12)} 0 q-6 0 -6 -6 z`}
        fill={liquid}
        opacity="0.92"
      />
      {/* neck + cap */}
      <rect x={x - 5} y={top + 10} width="10" height="14" fill={glass} stroke="#000" strokeOpacity="0.2" />
      <rect x={x - 7} y={top} width="14" height="12" rx="2.5" fill={cap} />
      <rect x={x - 7} y={top} width="14" height="4" rx="2" fill="#FFFFFF" opacity="0.25" />
      {/* specular highlight */}
      <rect x={x - half + 3} y={top + 26} width="4" height={h - 40} rx="2" fill="#FFFFFF" opacity="0.22" />
      {/* blank label */}
      <rect x={x - half + 4} y={baseY - 34} width={w - 8} height="20" rx="2" fill="#FFFFFF" opacity="0.86" />
    </g>
  );
}

/* ============================ RENDERERS ============================ */
const RENDERERS: Record<string, Renderer> = {
  "frontlit-flex": (id) => (
    <Roll
      id={id}
      bodyStops={["#9AA6B8", "#E7ECF3", "#FBFDFF", "#C4CDDB", "#8C97A8"]}
      sheetColor="#F2F5FA"
    />
  ),

  "star-flex": (id) => (
    <Roll
      id={id}
      glossy
      bodyStops={["#AEB9CC", "#F2F6FC", "#FFFFFF", "#D0D9E6", "#9DA9BD"]}
      sheetColor="#FFFFFF"
    />
  ),

  "backlit-flex": (id) => (
    <g>
      {/* glow panel behind to suggest illumination */}
      <defs>
        <radialGradient id={`glow-${id}`} cx="62%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFE9B0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFE9B0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="180" y="30" width="120" height="150" fill={`url(#glow-${id})`} />
      <Roll
        id={id}
        cx={150}
        bodyStops={["#C9D2E0", "#EFF3F8", "#FFFFFF", "#DCE3EC", "#B9C3D2"]}
        sheetColor="#F7F4EC"
      />
    </g>
  ),

  "vinyl-sheets": (id) => (
    <g>
      {/* colorful vinyl rolls standing behind */}
      {[
        { x: 70, c1: "#F2552C", c2: "#B62E12" },
        { x: 104, c1: "#F2B705", c2: "#B98403" },
        { x: 138, c1: "#22B07A", c2: "#127a52" },
        { x: 172, c1: "#2D7DF2", c2: "#1750b0" },
        { x: 206, c1: "#8A4FE0", c2: "#5b29a3" },
      ].map((r, i) => (
        <g key={i} filter={`url(#soft-${id})`}>
          <defs>
            <linearGradient id={`vr-${id}-${i}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={r.c2} />
              <stop offset="45%" stopColor={r.c1} />
              <stop offset="100%" stopColor={r.c2} />
            </linearGradient>
          </defs>
          <rect x={r.x - 13} y="54" width="26" height="104" rx="13" fill={`url(#vr-${id}-${i})`} />
          <ellipse cx={r.x} cy="54" rx="13" ry="6" fill={r.c1} />
          <ellipse cx={r.x} cy="54" rx="5" ry="2.4" fill="#0B1018" opacity="0.5" />
          <rect x={r.x - 9} y="60" width="4" height="92" rx="2" fill="#FFFFFF" opacity="0.25" />
        </g>
      ))}
      {/* front self-adhesive roll with peeled grey liner */}
      <g filter={`url(#soft-${id})`} transform="rotate(-14 250 140)">
        <path d="M180 150 q34 -10 56 6 q-30 16 -58 8 z" fill="#C7CDD6" />
        <rect x="170" y="118" width="92" height="34" rx="8" fill="#F4F7FB" />
        <ellipse cx="170" cy="135" rx="9" ry="17" fill="#E6EAF0" stroke="#000" strokeOpacity="0.1" />
        <ellipse cx="170" cy="135" rx="4" ry="9" fill="#9aa3b2" />
      </g>
    </g>
  ),

  "one-way-vision": (id) => (
    <g filter={`url(#soft-${id})`}>
      <defs>
        <pattern id={`perf-${id}`} width="7" height="7" patternUnits="userSpaceOnUse">
          <rect width="7" height="7" fill="#0E1320" />
          <circle cx="3.5" cy="3.5" r="1.7" fill="#C9D2DE" />
        </pattern>
        <linearGradient id={`owv-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D2D9E3" />
        </linearGradient>
      </defs>
      {/* main sheet, slight perspective */}
      <g transform="translate(160 100) rotate(-8)">
        <polygon points="-96,-46 86,-58 96,46 -86,58" fill={`url(#owv-${id})`} />
        {/* curled corner revealing perforated black back */}
        <path d="M40 -50 L96 -42 L72 22 Z" fill={`url(#perf-${id})`} />
        <path d="M40 -50 L96 -42 L72 22 Z" fill="none" stroke="#0B0F19" strokeOpacity="0.5" />
        <path d="M40 -50 L72 22" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
        {/* printed front graphic hint */}
        <g opacity="0.5">
          <circle cx="-50" cy="-16" r="11" fill="#00A6E0" />
          <path d="M-78 26 l24 -26 18 16 14 -12" stroke="#1E293B" strokeWidth="3" fill="none" />
        </g>
      </g>
    </g>
  ),

  "eco-solvent-ink": (id) => {
    const set = [
      { liquid: "#16C0E6", cap: "#0E8FB0" },
      { liquid: "#E6228C", cap: "#A6125F" },
      { liquid: "#F2D200", cap: "#B59B00" },
      { liquid: "#11161F", cap: "#0A0D14", glass: "#0F1622" },
      { liquid: "#8FD9F0", cap: "#5fa9c4" },
      { liquid: "#F2A6CE", cap: "#c46e9a" },
    ];
    return (
      <g>
        {set.map((b, i) => (
          <Bottle
            key={i}
            id={id}
            i={i}
            x={36 + i * 50}
            baseY={170}
            h={i % 2 === 0 ? 100 : 92}
            w={30}
            liquid={b.liquid}
            cap={b.cap}
            glass={b.glass ?? "#16203A"}
          />
        ))}
      </g>
    );
  },

  "uv-ink": (id) => {
    const caps = ["#16C0E6", "#E6228C", "#F2D200", "#22B07A", "#8A4FE0"];
    return (
      <g>
        <defs>
          <radialGradient id={`uv-${id}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="40" y="40" width="240" height="130" fill={`url(#uv-${id})`} />
        {caps.map((c, i) => (
          <Bottle
            key={i}
            id={id}
            i={i}
            x={50 + i * 55}
            baseY={170}
            h={i % 2 === 0 ? 104 : 94}
            w={32}
            liquid="#1B1E27"
            glass="#0E1119"
            cap={c}
          />
        ))}
      </g>
    );
  },

  "lamination-films": (id) => (
    <g filter={`url(#soft-${id})`}>
      <defs>
        <linearGradient id={`lam-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DCE6F2" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#AEC4DE" stopOpacity="0.7" />
        </linearGradient>
        <pattern id={`grid-${id}`} width="11" height="11" patternUnits="userSpaceOnUse">
          <rect width="11" height="11" fill="#EEF3F9" />
          <path d="M11 0V11M0 11H11" stroke="#6E7B8C" strokeOpacity="0.35" />
        </pattern>
      </defs>
      {/* grid backing roll */}
      <g transform="rotate(-15 168 116)">
        <rect x="78" y="96" width="170" height="44" rx="6" fill={`url(#grid-${id})`} />
        <ellipse cx="78" cy="118" rx="11" ry="22" fill="#DCE3EC" stroke="#000" strokeOpacity="0.1" />
        <ellipse cx="78" cy="118" rx="5" ry="11" fill="#A9763C" />
        {/* peeled transparent film with glossy sheen */}
        <path d="M150 96 q44 -16 92 -6 q-6 36 -40 56 q-40 6 -70 -12 z" fill={`url(#lam-${id})`} />
        <path d="M158 92 q40 -12 80 -4" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2.5" fill="none" />
        <path d="M150 96 q44 -16 92 -6" stroke="#9fb6d2" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />
      </g>
    </g>
  ),

  default: (id) => (
    <Roll id={id} bodyStops={["#9AA6B8", "#E7ECF3", "#FBFDFF", "#C4CDDB", "#8C97A8"]} />
  ),
};

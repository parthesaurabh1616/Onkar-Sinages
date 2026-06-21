import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm industrial dark ("asphalt / ink") — NOT navy
        primary: "#15120E",
        secondary: "#211C16",
        // Signal orange accent (outdoor / industrial / advertising energy)
        accent: "#FF5A1E",
        highlight: "#FF7A45",
        muted: "#A9A092",
        ink: "#F7F3EA",
        // Paper (premium catalogue light surfaces)
        paper: {
          DEFAULT: "#F5F1E8",
          raised: "#FFFFFF",
          ink: "#1A1612",
          muted: "#6E6557",
          line: "#E4DCCD",
        },
        // CMYK micro-accents — print storytelling only
        cmyk: {
          c: "#00A6E0",
          m: "#EC008C",
          y: "#FFD400",
          k: "#111111",
        },
        surface: {
          DEFAULT: "#1B1712",
          raised: "#241F18",
          border: "#2E2820",
        },
        orange: {
          DEFAULT: "#FF5A1E",
          hover: "#FF7A45",
          deep: "#D6440A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.3rem, 5.2vw, 4.75rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        section: ["clamp(2rem, 4.2vw, 3.6rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "warm-glow":
          "radial-gradient(circle at 50% 0%, rgba(255,90,30,0.16), transparent 58%)",
        "orange-fade":
          "linear-gradient(180deg, rgba(255,90,30,0.10) 0%, transparent 100%)",
        "card-sheen":
          "linear-gradient(135deg, rgba(255,122,69,0.12) 0%, rgba(21,18,14,0) 60%)",
        "paper-sheen":
          "linear-gradient(135deg, rgba(255,90,30,0.06) 0%, rgba(255,255,255,0) 55%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,90,30,0.22), 0 24px 60px -20px rgba(255,90,30,0.40)",
        card: "0 20px 50px -24px rgba(0,0,0,0.65)",
        paper: "0 24px 50px -28px rgba(26,22,18,0.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        unfurl: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left", opacity: "0" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left", opacity: "1" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        unfurl: "unfurl 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        pulseRing: "pulseRing 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

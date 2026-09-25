import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07060b",
        surface: "#110f19",
        accent: "#ff5a36", // flame
        accent2: "#3de8d0", // cyan signal
        rose: "#ff2e88",
        gold: "#ffc53d",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
        "spin-rev": { to: { transform: "rotate(-360deg)" } },
        marquee: { to: { transform: "translateX(-50%)" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(6%,-8%) scale(1.1)" },
          "66%": { transform: "translate(-6%,6%) scale(0.95)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
        "spin-mid": "spin-slow 26s linear infinite",
        "spin-rev": "spin-rev 18s linear infinite",
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
        aurora: "aurora 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

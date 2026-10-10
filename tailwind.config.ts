import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme Tokens
        canvas: "#FAFCFE",
        ice: "#E3F2FD",
        sky: "#90CAF9",
        brand: "#2196F3",
        ink: "#0D47A1",

        // Dark Theme Tokens
        "dark-bg": "#0B1220",
        "dark-surface": "#111C2E",
        "dark-text": "#EAF2FF",
        "dark-muted": "#9DB2CE",
        "dark-accent": "#60A5FA",
        "dark-brand": "#3B82F6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 30px -5px rgba(13, 71, 161, 0.05), 0 0 0 1px rgba(144, 202, 249, 0.2)",
        "soft-dark": "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(157, 178, 206, 0.15)",
        "hover-card": "0 20px 40px -10px rgba(33, 150, 243, 0.15), 0 0 0 1.5px rgba(33, 150, 243, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;

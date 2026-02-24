import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        background: "#FAFBFC",
        text: "#0F172A",
        accent: {
          amber: "#F59E0B",
          emerald: "#059669",
          violet: "#7C3AED",
          coral: "#EA580C",
        },
      },
      boxShadow: {
        "glow-primary": "0 0 0 3px rgba(37, 99, 235, 0.4), 0 0 24px 8px rgba(37, 99, 235, 0.5)",
        "glow-emerald": "0 0 0 3px rgba(16, 185, 129, 0.4), 0 0 24px 8px rgba(16, 185, 129, 0.5)",
        "glow-violet": "0 0 0 3px rgba(124, 58, 237, 0.4), 0 0 24px 8px rgba(124, 58, 237, 0.5)",
        "glow-amber": "0 0 0 3px rgba(245, 158, 11, 0.4), 0 0 24px 8px rgba(245, 158, 11, 0.5)",
        "glow-rose": "0 0 0 3px rgba(244, 63, 94, 0.4), 0 0 24px 8px rgba(244, 63, 94, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;

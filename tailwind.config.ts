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
    },
  },
  plugins: [],
};

export default config;

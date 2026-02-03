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
        background: "#F8FAFC",
        text: "#0F172A",
      },
    },
  },
  plugins: [],
};

export default config;

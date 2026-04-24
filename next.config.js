const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  /* Bezpečnostní hlavičky a CSP: middleware.ts (výjimka /studio pro embed u Sanity) */
  // Override Next.js internal React with our canary version that has useEffectEvent
  // This is needed for Sanity Studio compatibility
  webpack: (config) => {
    const reactPath = path.resolve(__dirname, "node_modules/react");
    const reactDomPath = path.resolve(__dirname, "node_modules/react-dom");
    // Override the compiled React that Next.js bundles internally
    config.resolve.alias = {
      ...config.resolve.alias,
      "next/dist/compiled/react": reactPath,
      "next/dist/compiled/react-dom": reactDomPath,
      "next/dist/compiled/react/jsx-runtime": path.join(reactPath, "jsx-runtime"),
      "next/dist/compiled/react/jsx-dev-runtime": path.join(reactPath, "jsx-dev-runtime"),
    };
    return config;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 dní
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;

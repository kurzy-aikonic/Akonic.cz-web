import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
const config = [
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["next.config.js", "tests/*.cjs"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  { ignores: [".next/**", "node_modules/**"] },
];

export default config;

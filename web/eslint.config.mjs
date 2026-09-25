import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    // React Three Fiber's render loop intentionally mutates three.js objects
    // (camera.position, scene.fog, material.opacity, per-frame ref tracking)
    // inside useFrame/useEffect callbacks. Those run outside React's render
    // cycle, so the React Compiler immutability/purity rules do not apply to
    // this directory. Every other rule stays fully enforced.
    files: ["components/three/**"],
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/purity": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;

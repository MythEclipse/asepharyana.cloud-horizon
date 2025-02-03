import { resolve } from "node:path";
// @ts-ignore
import { FlatCompat } from "@eslint/eslintrc";

// Definisikan tipe FlatConfig secara sederhana (sebagai any) agar tidak terjadi error tipe
type FlatConfig = any;

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

const project: string = resolve(process.cwd(), "tsconfig.json");

const baseConfig: FlatConfig = {
  languageOptions: {
    globals: {
      React: "readonly",
      JSX: "readonly",
    },
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignores: ["*.js", "node_modules/", "dist/"],
  rules: {},
};

const config: FlatConfig[] = [
  {
    plugins: {
      "only-warn": {},
      prettier: {},
    },
    ...baseConfig,
  },
];

export default config;

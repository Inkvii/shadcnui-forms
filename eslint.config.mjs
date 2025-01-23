import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ["**/next.config.js", "**/env.d.ts"],
  },
  ...compat.extends(
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "next/core-web-vitals",
    "plugin:storybook/recommended"
  ),
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },

    rules: {
      "@typescript-eslint/no-inferrable-types": 0,
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-children-prop": 0,
    },
  },
]
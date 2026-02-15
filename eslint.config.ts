/* eslint-disable @typescript-eslint/no-deprecated -- config() is the correct API for ESLint 9; defineConfig() requires ESLint 10+ */
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { config, configs } from "typescript-eslint";

export default config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...configs.strictTypeChecked,
      ...configs.stylisticTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import storybook from "eslint-plugin-storybook";

export default tseslint.config(
  // 1. 基本設定（JS/TSの推奨設定を統合）
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      // 修正ポイント：projectServiceを使わずに、単純なプロジェクト指定に切り替え
      parserOptions: {
        project: ["./tsconfig.json"], // 明示的にtsconfigを参照させる
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "warn",
      eqeqeq: "error",
      "no-var": "error",
      "prefer-const": "warn",
      curly: "error",
      // Storybookのファイルで satisfies を使うために必要な設定
      "@typescript-eslint/no-unused-vars": ["warn"],
    },
  },

  // 2. Storybook用の設定
  ...storybook.configs["flat/recommended"],

  // 3. 設定ファイル自体（eslint.config.mjs）をチェック対象から外す
  {
    ignores: ["eslint.config.mjs"],
  }
);
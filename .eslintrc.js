module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "plugin:@next/next/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "import/no-anonymous-default-export": "off",
    "no-undef": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
    "@next/next/no-img-element": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

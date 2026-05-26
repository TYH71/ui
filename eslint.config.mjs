import nextVitals from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: [".source/**", ".pnpm-store/**"]
  },
  ...nextVitals,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      "import/no-extraneous-dependencies": 0,
      "import/prefer-default-export": 0,
      "import/extensions": 0,
      "import/no-unresolved": 0,
      "import/no-anonymous-default-export": 0,
      "no-undef": 0,
      "no-unused-expressions": 0,
      "no-shadow": 0,
      "no-unused-vars": 0,
      "no-param-reassign": ["error", { props: false }],
      "no-console": 0,
      "prettier/prettier": 1,
      "react-hooks/purity": 0,
      "react-hooks/set-state-in-effect": 0,
      "react/display-name": ["off"]
    }
  }
];

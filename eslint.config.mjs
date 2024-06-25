import eslint from "eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,  
        ...globals.jest,  
      },
    },
    plugins: {
      react,
      reactHooks,
      jsxA11y,
      import: importPlugin,
      prettier, 
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "lf", singleQuote: true, printWidth: 100 }],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "import/prefer-default-export": "off",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "max-len": ["error", { code: 100 }],
      "quotes": ["error", "double"],
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
        },
      ],
      "react/prop-types": "off", 
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"],
        },
      },
    },
  },
];

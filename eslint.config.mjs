// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
   rules: {
      "import/consistent-type-specifier-style": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
         "warn",
         {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
         },
      ],
   },
})

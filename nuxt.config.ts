export default defineNuxtConfig({
   compatibilityDate: "2025-05-15",
   devtools: { enabled: true },
   modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@pinia/nuxt"],
   routeRules: {
      "/": {isr: true},
      "/sign-in": {ssr: false},
      "/sign-up": {ssr: false},
      "/home": {ssr: false},
      "/api/**": { proxy: "http://localhost:5000/**" },
   },
   css: [
      "works-ui/styles.css",
      "@/src/app/styles/fonts.css",
      "@/src/app/styles/theme.css",
   ],
   i18n: {
      defaultLocale: "ru",
      bundle: {
         optimizeTranslationDirective: false,
      },
      locales: [
         { code: "en", name: "English", file: "en.json" },
         { code: "ru", name: "Russian", file: "ru.json" },
      ],
   },
})

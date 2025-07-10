// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2025-05-15",
   devtools: { enabled: true },
   modules: ["@nuxt/eslint", "@nuxtjs/i18n", "@pinia/nuxt"],
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
});
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2025-05-15",
   devtools: { enabled: true },
   modules: ["@nuxt/eslint", "@nuxtjs/i18n"],
   i18n: {
      defaultLocale: "ru",
      locales: [
         { code: "en", name: "English", file: "EN.json" },
         { code: "ru", name: "Nederlands", file: "RU.json" },
      ],
   },
   css: [
      "works-ui/styles.css",
      "@/src/app/styles/fonts.css",
      "@/src/app/styles/theme.css",
   ],
});

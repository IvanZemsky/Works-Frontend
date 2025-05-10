import { createI18n } from "vue-i18n";
import RU from "./locales/RU.json"
import EN from "./locales/EN.json"

export const i18n = createI18n({
   locale: "RU",
   legacy: false,
   fallbackLocale: "RU",
   messages: {
      RU: RU,
      EN: EN
   }
})
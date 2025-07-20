import type { VacancyExperience } from "~/src/entities/vacancy"

export function getExperienceString(t: (key: string) => string, data: VacancyExperience) {
   switch (data) {
      case "none":
         return "Без опыта"
      case "1-3":
         return "1-3 года"
      case "3-6":
         return "3-6 лет"
      case "6+":
         return "более 6 лет"
      default:
         return "Без опыта"
   }
}

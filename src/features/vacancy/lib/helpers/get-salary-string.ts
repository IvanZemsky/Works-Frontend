import type { Vacancy } from "~/src/entities/vacancy"

export function getSalaryString(t: (key: string) => string, salary: Vacancy["salary"]) {
   if (salary.min && salary.max) {
      return `${salary.min} – ${salary.max}₽ ${t("per")} ${t(salary.period)}`
   } else if (!salary.min) {
      return `До ${salary.max}₽ ${t("per")} ${t(salary.period)}`
   } else if (!salary.max) {
      return `${salary.min}₽ ${t("per")} ${t(salary.period)}`
   } else {
      return null
   }
}

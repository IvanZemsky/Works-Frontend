import type { Vacancy, VacancyExperience } from "@/src/entities/vacancy";

function getSalaryString(
   t: (key: string) => string,
   salary: Vacancy["salary"]
) {
   if (salary.min && salary.max) {
      return `${salary.min} – ${salary.max}₽ ${t("per")} ${t(salary.period)}`;
   } else if (!salary.min) {
      return `До ${salary.max}₽ ${t("per")} ${t(salary.period)}`;
   } else if (!salary.max) {
      return `${salary.min}₽ ${t("per")} ${t(salary.period)}`;
   } else {
      return null;
   }
}

function getExperienceString(
   t: (key: string) => string,
   data: VacancyExperience
) {
   if (data.min && data.max) {
      return `${data.min}-${data.max} ${t("years")}`;
   } else if (!data.min) {
      return `${t("up to")} ${data.max} ${t("years")}`;
   } else if (!data.max) {
      return `${data.min} ${t("years")}`;
   } else {
      return "Без опыта";
   }
}

export const vacancyFeatures = {
   getSalaryString,
   getExperienceString,
};

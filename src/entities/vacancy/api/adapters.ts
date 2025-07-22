import type { GetVacancyDto } from "../model/dto";
import type { Vacancy } from "../model/types";

export function vacancyAdapter(vacancy: GetVacancyDto) {
   return {
      ...vacancy,
      skills: vacancy.skills.split(","),
   } as Vacancy
}
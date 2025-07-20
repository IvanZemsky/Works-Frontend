import type { Vacancy, VacancyExperience } from "./types"

export type VacanciesSearchDTO = Partial<{
   text_search: string
   salary_from: number
   experience: VacancyExperience
   education: string
   is_income: "yes"
}>

export type VacanciesSearchResponse = {
   vacancies: Vacancy[] | null
   totalCount: number
}

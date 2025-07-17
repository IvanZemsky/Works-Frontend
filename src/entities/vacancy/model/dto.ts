import type { Vacancy } from "./types"

export type VacanciesSearchDTO = {
   text_search: string
}

export type VacanciesSearchResponse = {
   vacancies: Vacancy[] | null
   totalCount: number
}
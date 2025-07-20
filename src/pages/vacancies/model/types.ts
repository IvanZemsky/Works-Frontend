import type { AsyncData, NuxtError } from "#app"
import type { VacanciesSearchResponse, VacancyEducation } from "~/src/entities/vacancy"

export type VacanciesProvide = AsyncData<
   VacanciesSearchResponse | null,
   NuxtError<unknown> | null
>

export type Filters = {
   income: number | undefined
   experience: string | undefined
   education: VacancyEducation[]
   isIncome: boolean
}

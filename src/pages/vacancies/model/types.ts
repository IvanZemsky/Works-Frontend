import type { AsyncData, NuxtError } from "#app"
import type { VacanciesSearchResponse } from "~/src/entities/vacancy"

export type VacanciesProvide = AsyncData<VacanciesSearchResponse | null, NuxtError<unknown> | null>
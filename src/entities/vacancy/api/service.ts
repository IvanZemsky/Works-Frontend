import type { VacanciesSearchDTO, VacanciesSearchResponse } from "../model/dto"
import type { Vacancy } from "../model/types"

const baseURL = "/api/vacancies"

export const vacancyService = {
   async getVacancies(dto: VacanciesSearchDTO): Promise<VacanciesSearchResponse> {
      console.log("REQUEST")
      const response = await $fetch.raw<Vacancy[]>(baseURL, {
         query: dto,
      })
      const headers = response.headers
      const totalCountHeader = headers.get("X-Total-Count")

      return {
         vacancies: response._data || null,
         totalCount: totalCountHeader ? +totalCountHeader : 0,
      }
   },
}

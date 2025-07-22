import type {
   GetVacancyDto,
   VacanciesSearchDTO,
   VacanciesSearchResponse,
} from "../model/dto"
import type { Vacancy } from "../model/types"
import { vacancyAdapter } from "./adapters"

const baseURL = "/api/vacancies"

export const vacancyService = {
   async getVacancies(dto: VacanciesSearchDTO): Promise<VacanciesSearchResponse> {
      console.log("REQUEST")
      const response = await $fetch.raw<GetVacancyDto[]>(baseURL, {
         query: dto,
      })
      const headers = response.headers
      const totalCountHeader = headers.get("X-Total-Count")
      const vacancies = response._data?.map(vacancyAdapter) || null

      return {
         vacancies,
         totalCount: totalCountHeader ? +totalCountHeader : 0,
      }
   },

   async getVacancy(id: string): Promise<Vacancy> {
      const data = await $fetch<GetVacancyDto>(`${baseURL}/${id}`)
      return vacancyAdapter(data)
   },
}

import type { Vacancy } from "../model/types"

const baseURL = "/api/vacancies"

export const vacancyService = {
   async getVacancies() {
      const data = await $fetch<Vacancy[]>(baseURL)
      console.log(data)
      return data
   },
}
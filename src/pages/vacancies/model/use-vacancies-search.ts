import {
   vacancyService,
   type VacanciesSearchDTO,
   type VacanciesSearchResponse,
} from "~/src/entities/vacancy"

export function useVacanciesQuery(debouncedFilters: Ref<VacanciesSearchDTO>) {
   const queryKey = `vacancies-${JSON.stringify(debouncedFilters.value)}`

   return useAsyncData<VacanciesSearchResponse>(
      queryKey,
      () => vacancyService.getVacancies(debouncedFilters.value),
      {
         watch: [debouncedFilters],
      },
   )
}

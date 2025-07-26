import type { VacanciesSearchDTO } from "~/src/entities/vacancy"
import { debounce } from "~/src/shared/lib"

export function useFilters() {
   const route = useRoute()
   const filters = computed<VacanciesSearchDTO>(() => route.query)

   const debouncedFilters = ref<VacanciesSearchDTO>({})

   const updateFilters = debounce((newFilters: VacanciesSearchDTO) => {
      debouncedFilters.value = newFilters
   }, 1000)

   watch(filters, (newFilters) => updateFilters(newFilters))

   return debouncedFilters
}

import type { VacancyEducation, VacanciesSearchDTO } from "~/src/entities/vacancy"
import type { Filters } from "../../model/types"

export function useInitFilters() {
   const route = useRoute()
   const initialFilters = computed(() => route.query as VacanciesSearchDTO)

   const filters = ref<Filters>({
      income: undefined,
      isIncome: false,
      experience: undefined,
      education: [],
   })

   watch(
      () => filters.value.income,
      () => {
         if (filters.value.income) {
            filters.value.isIncome = true
         }
      },
      { immediate: true },
   )

   watch(initialFilters, () => updateFiltersFromRoute(filters, initialFilters), {
      immediate: true,
   })

   return { filters, initialFilters }
}

function updateFiltersFromRoute(
   filters: Ref<Filters>,
   initialFilters: Ref<VacanciesSearchDTO>,
) {
   filters.value = {
      income: Number(initialFilters.value.salary_from) || undefined,
      isIncome: initialFilters.value.is_income === "yes",
      experience: initialFilters.value.experience as string | undefined,
      education: (initialFilters.value.education
         ? (initialFilters.value.education as string).split(",")
         : []) as VacancyEducation[],
   }
}

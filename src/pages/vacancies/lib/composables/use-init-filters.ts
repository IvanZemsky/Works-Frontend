import type { VacancyEducation, VacanciesSearchDTO } from "~/src/entities/vacancy"
import type { Filters } from "../../model/types"
import { vacancyFeatures } from "~/src/features/vacancy"
import { ROUTES } from "~/src/shared/model"

export function useFilters() {
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

   watch(filters, (newFilters) => updateRouteFilters(newFilters, initialFilters), {
      deep: true,
   })

   async function updateRouteFilters(
      newFilters: Filters,
      initialFilters: Ref<VacanciesSearchDTO>,
   ) {
      const queryFilters = vacancyFeatures.parseFiltersToQueryParams(
         { text_search: initialFilters.value.text_search, ...newFilters },
         {
            isIncome: "is_income",
            income: "salary_from",
         },
      )
      await navigateTo({ path: ROUTES.VACANCIES, query: queryFilters })
   }

   return filters
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

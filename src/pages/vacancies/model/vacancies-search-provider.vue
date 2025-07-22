<script setup lang="ts">
// REFACTOR WHEN NUXT'S DEDUPLICATION IS FIXED
import {
   type VacanciesSearchDTO,
   type VacanciesSearchResponse,
   vacancyService,
} from "~/src/entities/vacancy"
import { debounce } from "~/src/shared/lib"

const route = useRoute()
const filters = computed<VacanciesSearchDTO>(() => route.query)

const debouncedFilters = ref<VacanciesSearchDTO>({})

const queryKey = `vacancies-${JSON.stringify(debouncedFilters.value)}`

const data = useAsyncData<VacanciesSearchResponse>(
   queryKey,
   () => vacancyService.getVacancies(filters.value),
   {
      watch: [debouncedFilters],
   },
)

const updateFilters = debounce((newFilters: VacanciesSearchDTO) => {
   debouncedFilters.value = newFilters
}, 1000)

watch(filters, (newFilters) => updateFilters(newFilters))

provide("vacancies", data)
</script>

<template>
   <slot />
</template>

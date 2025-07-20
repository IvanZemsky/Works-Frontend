<script setup lang="ts">
// REFACTOR WHEN NUXT'S DEDUPLICATION IS FIXED
import {
   type VacanciesSearchDTO,
   type VacanciesSearchResponse,
   vacancyService,
} from "~/src/entities/vacancy"

const route = useRoute()
const filters = computed<VacanciesSearchDTO>(() => route.query)

const queryKey = `vacancies-${JSON.stringify(filters.value)}`

const data = useAsyncData<VacanciesSearchResponse>(
   queryKey,
   () => vacancyService.getVacancies(filters.value),
   {
      watch: [filters],
   },
)

provide("vacancies", data)
</script>

<template>
   <slot />
</template>

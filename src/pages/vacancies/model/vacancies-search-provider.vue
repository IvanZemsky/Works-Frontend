<script setup lang="ts">
// REFACTOR WHEN NUXT'S DEDUPLICATION IS FIXED
import { type VacanciesSearchResponse, vacancyService } from "~/src/entities/vacancy";

const route = useRoute()
const textSearch = computed(() => route.query.text_search as string)

const data = useAsyncData<VacanciesSearchResponse>(
   `vacancies-${textSearch.value}`,
   () => vacancyService.getVacancies({ text_search: textSearch.value }),
   {
      watch: [textSearch],
   },
)

provide("vacancies", data)
</script>

<template>
  <slot/>
</template>

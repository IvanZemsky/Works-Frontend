<script setup lang="ts">
import VacanciesFilters from "./ui/vacancies-filters.vue"
import VacanciesLayout from "./ui/vacancies-layout.vue"
import VacanciesInput from "./ui/vacancies-input.vue"
import VacanciesListHeader from "./ui/vacancies-list-header.vue"
import { VacancyList } from "~/src/features/vacancy"
import { useVacanciesQuery } from "./model/use-vacancies-search"
import { useFilters } from "./model/use-filters"

const debouncedFilters = useFilters()
const { data, pending, error } = useVacanciesQuery(debouncedFilters)
</script>

<template>
   <VacanciesLayout :data="data">
      <template #search-input>
         <VacanciesInput />
      </template>
      <template #list-header>
         <VacanciesListHeader :total-count="data?.totalCount" />
      </template>
      <template #filters>
         <VacanciesFilters />
      </template>
      <template #vacancy-list>
         <VacancyList
            :data="data?.vacancies || null"
            :is-pending="pending"
            :error="error"
         />
      </template>
   </VacanciesLayout>
</template>

<style scoped>
.filters {
   position: sticky;
   top: 1rem;
   left: 0;
   min-width: 300px;
   z-index: 1;
}
</style>

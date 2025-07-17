<script setup lang="ts">
import { VacancySearchInput } from "~/src/features/vacancy"
import {
   VacanciesPage,
   VacanciesFilters,
   VacanciesListHeader,
   VacanciesPageList,
} from "~/src/pages/vacancies"

definePageMeta({
   layout: "applicant",
})
</script>

<template>
   <VacanciesPage>
      <template #search-input>
         <VacancySearchInput />
      </template>
      <template #list-header>
         <VacanciesListHeader />
      </template>
      <template #filters>
         <VacanciesFilters />
      </template>
      <template #vacancy-list>
         <VacanciesPageList />
      </template>
   </VacanciesPage>
</template>

<style scoped></style>

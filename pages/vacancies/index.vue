<script setup lang="ts">
import {
   VacanciesPage,
   VacanciesFilters,
   VacanciesListHeader,
   VacanciesPageList,
   VacanciesInput,
} from "~/src/pages/vacancies"

definePageMeta({
   title: "Вакансии",
   layout: "applicant",
})
</script>

<template>
   <VacanciesPage>
      <template #search-input>
         <VacanciesInput />
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

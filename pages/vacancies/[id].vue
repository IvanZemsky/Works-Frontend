<script setup lang="ts">
import {
   VacancyPage,
   VacancyContacts,
   VacancyRelatedList,
   VacancyQuestions,
   VacancySkills,
} from "~/src/pages/vacancy"

definePageMeta({
   layout: "applicant",
})
</script>

<template>
   <VacancyPage>
      <template #contacts>
         <VacancyContacts />
      </template>
      <template #questions>
         <VacancyQuestions />
      </template>
      <template #skills>
         <VacancySkills />
      </template>
      <template #related-vacancies>
         <VacancyRelatedList />
      </template>
   </VacancyPage>
</template>

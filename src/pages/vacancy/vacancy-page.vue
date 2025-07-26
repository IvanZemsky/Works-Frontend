<script setup lang="ts">
import { vacancyService, type Vacancy } from "~/src/entities/vacancy"
import VacancyDescCard from "./ui/vacancy-desc-card.vue"
import VacancyContacts from "./ui/vacancy-contacts.vue"
import VacancyQuestions from "./ui/vacancy-questions.vue"
import VacancySkills from "./ui/vacancy-skills.vue"
import VacancyRelatedList from "./ui/vacancy-related-list.vue"
import VacancyLayout from "./ui/vacancy-layout.vue"
import { useDynamicTitle } from "~/src/shared/lib/"

const id = useRoute().params.id as string
const vacancyRequest = useAsyncData(`vacancy`, () => vacancyService.getVacancy(id))
const title = useDynamicTitle(vacancyRequest, (vacancy: Vacancy) => vacancy.title)

useHead({
   title: title,
})

const { data, status, error } = vacancyRequest
</script>

<template>
   <VacancyLayout
      :is-error="!!error || !data"
      :is-pending="status === 'pending'"
      :data="data"
   >
      <template #desc-card>
         <VacancyDescCard :data="data!" />
      </template>
      <template #contacts="{ contacts }">
         <VacancyContacts :contacts="contacts" />
      </template>
      <template #questions>
         <VacancyQuestions />
      </template>
      <template #skills="{ skills }">
         <VacancySkills :skills="skills" />
      </template>
      <template #related-vacancies>
         <VacancyRelatedList />
      </template>
   </VacancyLayout>
</template>

<style scoped>
.desc {
   font-size: 0.9rem;
}
.main-column {
   gap: 2.5rem;
}
.second-column {
   min-width: 386px;
}
</style>

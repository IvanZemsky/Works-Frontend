<script setup lang="ts">
import { vacancyService, type Vacancy } from "~/src/entities/vacancy"
import VacancyDescCard from "~/src/pages/vacancy/ui/vacancy-desc-card.vue"
import { useDynamicTitle } from "~/src/shared/lib/"

const id = useRoute().params.id as string

const vacancyRequest = useAsyncData(`vacancy`, () => vacancyService.getVacancy(id))

const title = useDynamicTitle(vacancyRequest, (vacancy: Vacancy) => vacancy.title)

console.log(vacancyRequest.data.value)

useHead({
   title: title,
})

const { data, status, error } = vacancyRequest

provide("vacancy", data.value)
</script>

<template>
   <p v-if="status === 'pending'">Loading</p>
   <p v-else-if="error || !data">Error</p>
   <ui-wrapper v-else>
      <ui-spacing>
         <ui-spacing class="main-column" vertical align="stretch">
            <VacancyDescCard :data="data" />

            <p class="desc">{{ data.description }}</p>

            <slot name="skills"/>

            <slot name="contacts" />

            <slot name="questions" />

            <ui-button size="lg">Откликнуться</ui-button>
         </ui-spacing>
         <ui-spacing vertical class="second-column" align="stretch" no-shrink>
            <ui-spacing vertical align="stretch">
               <slot name="related-vacancies" />
            </ui-spacing>
         </ui-spacing>
      </ui-spacing>
   </ui-wrapper>
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

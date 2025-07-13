<script setup lang="ts">
import type { Vacancy } from "~/src/entities/vacancy"
import VacancyCard from "./vacancy-card.vue"

type Props = {
   data: Vacancy[]
   showDesc?: boolean
}

withDefaults(defineProps<Props>(), {
   showDesc: true,
})
</script>

<template>
   <ui-spacing vertical gap="sm">
      <VacancyCard
         v-for="vacancy in data"
         :key="vacancy.id"
         :data="vacancy"
         :link="`/vacancies/${vacancy.id}`"
         :show-desc="showDesc"
      />
   </ui-spacing>
</template>

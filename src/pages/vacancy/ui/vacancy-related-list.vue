<script setup lang="ts">
import { vacancyService } from "~/src/entities/vacancy"
import { VacancySmallCard, VacancyList } from "~/src/features/vacancy"

const { data, status, error } = useAsyncData(`related-vacancies`, () =>
   vacancyService.getVacancies({}),
)
</script>

<template>
   <VacancyList
      :data="data?.vacancies || null"
      :is-pending="status === 'pending'"
      :error="error"
      :component="VacancySmallCard"
   />
</template>

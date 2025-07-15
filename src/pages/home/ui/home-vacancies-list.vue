<script setup lang="ts">
import { vacancyService } from "~/src/entities/vacancy"
import { VacancyList, VacancyCardSkeleton } from "~/src/features/vacancy"

const { data, error, status } = await useAsyncData(
   "vacancies",
   vacancyService.getVacancies,
   {
      server: false,
   },
)
</script>

<template>
   <ui-spacing v-if="status === 'pending'" vertical fill>
      <VacancyCardSkeleton v-for="i in 10" :key="i" />
   </ui-spacing>

   <template v-else-if="error">
      <p v-if="error.statusCode === 404" class="error-msg">Ничего не найдено</p>
      <p v-else class="error-msg">Произошла ошибка</p>
   </template>

   <VacancyList v-else-if="data" :data="data" />

   <ui-button class="showMoreBtn" variant="light" weight="500" size="lg">
      Посмотреть ещё
   </ui-button>
</template>

<style scoped></style>

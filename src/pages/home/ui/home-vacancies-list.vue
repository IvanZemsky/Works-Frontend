<script setup lang="ts">
import { type VacanciesSearchResponse, vacancyService } from "~/src/entities/vacancy"
import { VacancyList } from "~/src/features/vacancy"
import { ROUTES } from "~/src/shared/model"

const { data, error, status } = await useAsyncData<VacanciesSearchResponse>(
   "vacancies",
   () => vacancyService.getVacancies({ text_search: "" }),
   {
      server: false,
   },
)
</script>

<template>
   <VacancyList
      :data="data?.vacancies || null"
      :is-pending="status === 'pending'"
      :error="error"
   >
      <template #list-end>
         <ui-button-link
            :to="{ path: ROUTES.VACANCIES }"
            variant="light"
            weight="500"
            size="lg"
         >
            Посмотреть ещё
         </ui-button-link>
      </template>
   </VacancyList>
</template>

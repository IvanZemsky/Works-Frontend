<script setup lang="ts">
import { VACANCIES_LIMIT_DEFAULT, type Vacancy } from "~/src/entities/vacancy"
import VacancyCard from "./vacancy-card/vacancy-card.vue"
import VacancyCardSkeleton from "./vacancy-card/vacancy-card-skeleton.vue"
import type { DefaultAsyncDataErrorValue } from "nuxt/app/defaults"
import type { NuxtError } from "#app"
import type { Component } from "vue"

type Props = {
   data: Vacancy[] | null
   skeletonCount?: number
   isPending?: boolean
   error?: NuxtError<unknown> | DefaultAsyncDataErrorValue | undefined
   showDesc?: boolean
   component?: Component
}

withDefaults(defineProps<Props>(), {
   showDesc: true,
   skeletonCount: VACANCIES_LIMIT_DEFAULT,
   error: null,
   isPending: false,
   component: VacancyCard,
})
</script>

<template>
   <ui-spacing v-if="isPending" vertical fill align="stretch">
      <VacancyCardSkeleton v-for="i in skeletonCount" :key="i" />
   </ui-spacing>

   <template v-else-if="error">
      <p v-if="error.statusCode === 404" class="error-msg">Ничего не найдено</p>
      <p v-else class="error-msg">Произошла ошибка</p>
   </template>

   <ui-spacing v-if="!isPending && data" vertical gap="sm" align="stretch">
      <component
         :is="component"
         v-for="vacancy in data"
         :key="vacancy.id"
         :data="vacancy"
         :link="`/vacancies/${vacancy.id}`"
         :show-desc="showDesc"
      />
   </ui-spacing>

   <slot name="list-end" />
</template>

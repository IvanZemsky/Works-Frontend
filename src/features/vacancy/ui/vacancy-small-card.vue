<script setup lang="ts">
import { vacancyFeatures } from "../lib"
import type { Vacancy } from "@/src/entities/vacancy"

type VacancySmallCardProps = {
   data: Vacancy
}

const props = defineProps<VacancySmallCardProps>()

const titleLink = `/vacancies/${props.data.id}`
const employerLink = `/employers/${props.data.employer.id}`
</script>

<template>
   <ui-card>
      <ui-spacing vertical gap="lg">
         <ui-link :to="titleLink" size="sm" hover="fade-light" color="secondary">
            <ui-spacing vertical fill gap="sm">
               <span class="title">{{ data.title }}</span>
               <span>{{ vacancyFeatures.getSalaryString($t, data.salary) }}</span>
            </ui-spacing>
         </ui-link>

         <ui-link :to="employerLink" size="sm" hover="fade-light" color="secondary">
            <ui-spacing fill align="center" gap="sm">
               <ui-avatar alt="G" />
               <span class="company">{{ data.employer.name }}</span>
            </ui-spacing>
         </ui-link>
      </ui-spacing>
   </ui-card>
</template>

<style scoped>
.title,
.company {
   font-weight: 500;
}
</style>

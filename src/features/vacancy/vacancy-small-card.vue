<script setup lang="ts">
import { UiCard, UiLink, UiAvatar, UiSpacing } from "works-ui"
import { vacancyFeatures } from "./lib"
import type { Vacancy } from "@/entities/vacancy"
import type { RouteLocationRaw } from "vue-router"

type VacancySmallCardProps = {
   data: Vacancy
   titleLink?: RouteLocationRaw
   companyLink?: RouteLocationRaw
}

const props = defineProps<VacancySmallCardProps>()

const titleLinkTo = props.titleLink ?? `/vacancies/${props.data.id}`
const companyLinkTo = props.companyLink ?? `company/${props.data.company.id}`
</script>

<template>
   <ui-card>
      <ui-spacing vertical gap="lg">
         <ui-link :to="titleLinkTo" size="sm" hover="fade-light" color="secondary">
            <ui-spacing vertical fill gap="sm">
               <span class="title">{{ data.title }}</span>
               <span>{{ vacancyFeatures.getSalaryString(data.salary) }}</span>
            </ui-spacing>
         </ui-link>

         <ui-link :to="companyLinkTo" size="sm" hover="fade-light" color="secondary">
            <ui-spacing fill align="center" gap="sm">
               <ui-avatar alt="G" />
               <span class="company">{{ data.company.name }}</span>
            </ui-spacing>
         </ui-link>
      </ui-spacing>
   </ui-card>
</template>

<style scoped>
.title, .company{
   font-weight: 500;
}
</style>

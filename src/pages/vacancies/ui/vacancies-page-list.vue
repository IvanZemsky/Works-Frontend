<script setup lang="ts">
import { VacancyList } from "~/src/features/vacancy"
import { useInject } from "works-ui"
import type { VacanciesProvide } from "../model/types"

const { data, error, status } = useInject<VacanciesProvide>("vacancies")
</script>

<template>
   <VacancyList
      :data="data?.vacancies || null"
      :is-pending="status === 'pending'"
      :error="error"
   />
</template>

<script setup lang="ts">
import { useInject } from "works-ui"
import type { VacanciesProvide } from "../model/types"

const { data } = useInject<VacanciesProvide>("vacancies")
</script>

<template>
   <ui-spacing align="center">
      <h2 class="header">Найдено {{ data?.vacancies?.length || 0 }} вакансий</h2>
   </ui-spacing>
</template>

<style scoped>
.header {
   font-size: 1.2rem;
   font-weight: 600;
}
</style>

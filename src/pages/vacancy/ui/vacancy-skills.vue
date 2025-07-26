<script setup lang="ts">
import type { Vacancy } from "~/src/entities/vacancy"

defineProps<{ skills: Vacancy["skills"] }>()
</script>

<template>
   <ui-spacing vertical>
      <p class="title">Ключевые навыки</p>
      <ui-spacing wrap gap="sm">
         <ui-chip v-for="skill in skills" :key="skill" size="sm">
            {{ skill }}
         </ui-chip>
      </ui-spacing>
   </ui-spacing>
</template>

<style scoped>
.title {
   font-weight: 500;
}
</style>

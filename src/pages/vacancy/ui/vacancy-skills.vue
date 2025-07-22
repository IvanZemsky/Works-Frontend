<script setup lang="ts">
import { useInject } from "works-ui"
import type { Vacancy } from "~/src/entities/vacancy"

const vacancy = useInject<Vacancy | null>("vacancy")
</script>

<template>
   <ClientOnly>
      <ui-spacing v-if="vacancy" vertical>
         <p class="title">Ключевые навыки</p>
         <ui-spacing wrap gap="sm">
            <ui-chip v-for="skill in vacancy.skills" :key="skill" size="sm">
               {{ skill }}
            </ui-chip>
         </ui-spacing>
      </ui-spacing>
   </ClientOnly>
</template>

<style scoped>
.title {
   font-weight: 500;
}
</style>

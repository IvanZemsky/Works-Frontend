<script setup lang="ts">
import type { Vacancy } from "~/src/entities/vacancy"

defineProps<{ isError: boolean; isPending: boolean; data: Vacancy | null }>()
</script>

<template>
   <p v-if="isPending">Loading</p>
   <p v-else-if="isError || !data">Error</p>
   <ui-wrapper v-else>
      <ui-spacing>
         <ui-spacing class="main-column" vertical align="stretch">
            <slot name="desc-card" />

            <p class="desc">{{ data.description }}</p>

            <slot name="skills" :skills="data.skills" />

            <slot name="contacts" :contacts="data.contacts" />

            <slot name="questions" />

            <ui-button size="lg">Откликнуться</ui-button>
         </ui-spacing>

         <ui-spacing vertical class="second-column" align="stretch" no-shrink>
            <ui-spacing vertical align="stretch">
               <slot name="related-vacancies" />
            </ui-spacing>
         </ui-spacing>
      </ui-spacing>
   </ui-wrapper>
</template>

<style scoped>
.desc {
   font-size: 0.9rem;
}
.main-column {
   gap: 2.5rem;
}
.second-column {
   min-width: 386px;
}
</style>

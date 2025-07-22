<script setup lang="ts">
import VacanciesSearchProvider from "../model/vacancies-search-provider.vue"

useHead({
   title: "Вакансии",
})
</script>

<template>
   <ui-wrapper>
      <ui-spacing fill vertical gap="lg">
         <slot name="search-input" />

         <VacanciesSearchProvider>
            <slot name="list-header" />

            <ui-spacing class="columns" fill gap="lg">
               <ui-spacing class="filters" vertical align="stretch">
                  <slot name="filters" />
               </ui-spacing>

               <ui-spacing vertical fill align="stretch">
                  <slot name="vacancy-list" />
               </ui-spacing>
            </ui-spacing>
         </VacanciesSearchProvider>
      </ui-spacing>
   </ui-wrapper>
</template>

<style scoped>
.filters {
   position: sticky;
   top: 1rem;
   left: 0;
   min-width: 300px;
   z-index: 1;
}
</style>

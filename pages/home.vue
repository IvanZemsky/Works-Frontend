<script setup lang="ts">
import { HomePage, InteractionCard, LiftResumeCard, ListButtons, HomeVacanciesList } from "~/src/pages/home"
import { VacancySearchInput } from "~/src/features/vacancy"

definePageMeta({
   layout: "applicant",
})

</script>

<template>
   <HomePage>
      <template #search-input>
         <VacancySearchInput/>
      </template>
      <template #action-cards>
         <InteractionCard />
         <LiftResumeCard />
      </template>
      <template #list-header-buttons>
         <ListButtons />
      </template>
      <template #vacancy-list>
         <HomeVacanciesList/>
      </template>
   </HomePage>
</template>

<style scoped>
.input {
   flex-grow: 1;
}
.actions-column {
   position: sticky;
   top: 20px;
   left: 0;
   min-width: 300px;
}
.action-card {
   width: 100%;
}
.searchBtn {
   max-width: 200px;
   width: 100%;
   height: 100%;
}
</style>

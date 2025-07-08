<script setup lang="ts">
import { EmployerMock } from "@/src/entities/employer/mock"
import EmployerCard from "~/src/pages/employer/ui/employer-card.vue"

definePageMeta({
   layout: "applicant"
})
</script>

<template>
   <ui-wrapper>
      <ui-spacing fill gap="lg">
         <EmployerCard
            class="desc-card"
            :location="EmployerMock.location"
            :website="EmployerMock.website"
         />

         <ui-spacing vertical grow>
            <ui-spacing class="title" vertical>
               <p class="label">Организация</p>
               <p class="name">{{ EmployerMock.type }} {{ EmployerMock.name }}</p>
            </ui-spacing>

            <p class="desc">{{ EmployerMock.description }}</p>
         </ui-spacing>
      </ui-spacing>
   </ui-wrapper>
</template>

<style scoped>
.desc-card {
   position: sticky;
   top: 16px;
   left: 0;
   max-width: 220px;
   width: 100%;
}
.desc {
   font-size: 0.9rem;
}
.title {
   gap: 0;
}
.label {
   font-weight: 500;
   font-size: 0.8rem;
}
.name {
   font-weight: 600;
   font-size: 2rem;
}
</style>

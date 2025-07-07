<script setup lang="ts">
import type { Employer } from "@/src/entities/employer"
import { clearURL } from "@/src/shared/lib"

type Props = {
   location: Employer["location"]
   website: Employer["website"]
}

defineProps<Props>()
</script>

<template>
   <ui-card size="sm">
      <ui-spacing vertical fill>
         <div class="img-wrap"></div>

         <ui-spacing class="desc-info" vertical :gap="[0]">
            <p>{{ location }}</p>
            <ui-link as="a" :href="website" target="_blank">
               {{ clearURL(website) }}
            </ui-link>
         </ui-spacing>

         <ui-spacing class="desc-info" vertical :gap="[0]">
            <p class="vacancies">Вакансии</p>
            <ui-link to="/vacancies">8 активных вакансий</ui-link>
         </ui-spacing>
      </ui-spacing>
   </ui-card>
</template>

<style scoped>
.img-wrap {
   width: 100%;
   border-radius: 1rem;
   aspect-ratio: 1 / 1;
   background-color: silver;
}
.img-wrap img {
   width: 100%;
   height: 100%;
   object-fit: contain;
}
.desc-info,
.desc-info a {
   font-size: 0.8rem;
}
.vacancies {
   font-weight: 600;
}
</style>

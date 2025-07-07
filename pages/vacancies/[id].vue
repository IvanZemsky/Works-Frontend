<script setup lang="ts">
import VacancyDescCard from "@/src/pages/vacancy/ui/vacancy-desc-card.vue";
import { vacancy } from "@/src/entities/vacancy/mock";
import { capitalize } from "vue";
import { VacancySmallCard } from "@/src/features/vacancy";

definePageMeta({
   layout: "applicant"
})
</script>

<template>
   <ui-wrapper>
      <ui-spacing>
         <ui-spacing class="main-column" vertical align="stretch">
            <VacancyDescCard :data="vacancy" />
            <p class="desc">{{ vacancy.description }}</p>

            <ui-spacing vertical>
               <p class="contacts-title">{{ capitalize($t("contacts")) }}</p>
               <p v-if="vacancy.contacts.name">{{ vacancy.contacts.name }}</p>
               <ui-button variant="light"
                  >Показать {{ $t("contacts") }}</ui-button
               >
            </ui-spacing>

            <ui-spacing vertical gap="sm" class="ask-question">
               <p>Задайте вопрос работодателю</p>
               <p>Он получит его с откликом на вакансию</p>
               <ui-spacing class="questions" gap="sm" wrap>
                  <ui-button variant="outlined" color="secondary">
                     Где распологается место работы?
                  </ui-button>
                  <ui-button variant="outlined" color="secondary">
                     Какой график работы?
                  </ui-button>
                  <ui-button variant="outlined" color="secondary">
                     Вакансия открыта?
                  </ui-button>
                  <ui-button variant="outlined" color="secondary">
                     Какая оплата труда?
                  </ui-button>
                  <ui-button variant="outlined" color="secondary">
                     Как c вами связаться?
                  </ui-button>
               </ui-spacing>
            </ui-spacing>

            <ui-button size="lg">Откликнуться</ui-button>
         </ui-spacing>
         <ui-spacing vertical class="second-column" align="stretch" no-shrink>
            <ui-spacing vertical align="stretch">
               <VacancySmallCard class="vacancy-small-card" :data="vacancy" />
               <VacancySmallCard class="vacancy-small-card" :data="vacancy" />
            </ui-spacing>
         </ui-spacing>
      </ui-spacing>
   </ui-wrapper>
</template>

<style scoped>
.desc {
   font-size: 0.9rem;
}
.contacts-title {
   font-weight: 600;
}
.ask-question p:first-child {
   font-weight: 500;
}
.questions {
   font-size: 0.9rem;
   margin-top: 1rem;
}
.main-column {
   gap: 2.5rem;
}
.second-column {
   min-width: 386px;
}
</style>

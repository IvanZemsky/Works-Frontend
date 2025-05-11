<script setup lang="ts">
import { UiButton, UiWrapper, UiSpacing, UiInput } from "works-ui"
import { SearchOutlined } from "@vicons/antd"
import InteractionCard from "./interaction-card.vue"
import LiftResumeCard from "./lift-resume-card.vue"
import VacancyCard from "@/features/vacancy/vacancy-card.vue"
import { vacancy } from "@/entities/vacancy/mock"
</script>

<template>
   <ui-wrapper>
      <ui-spacing fill vertical gap="lg">
         <ui-spacing fill>
            <ui-input placeholder="Профессия, должность или компания" class="input">
               <template #icon><search-outlined /></template>
            </ui-input>
            <ui-button class="searchBtn">Найти</ui-button>
         </ui-spacing>

         <ui-spacing class="columns" gap="md">
            <ui-spacing class="actions-column" vertical>
               <InteractionCard class="action-card" />
               <LiftResumeCard class="action-card" />
            </ui-spacing>

            <ui-spacing vertical align="stretch">
               <ui-spacing gap="sm">
                  <ui-button rounded color="secondary" size="sm">Для вас</ui-button>
                  <ui-button
                     rounded
                     color="secondary"
                     variant="light"
                     hover="light"
                     size="sm"
                  >
                     Подработка
                  </ui-button>
                  <ui-button rounded color="secondary" variant="light" size="sm">
                     От 16 лет
                  </ui-button>
                  <ui-button rounded color="secondary" variant="light" size="sm">
                     Удалённая работа
                  </ui-button>
                  <ui-button rounded color="secondary" variant="light" size="sm">
                     Стажировка
                  </ui-button>
               </ui-spacing>

               <ui-spacing vertical gap="sm">
                  <VacancyCard
                     :data="vacancy"
                     :link="`/vacancies/${vacancy.id}`"
                     show-desc
                  />
                  <VacancyCard
                     :data="vacancy"
                     :link="`/vacancies/${vacancy.id}`"
                     show-desc
                  />
                  <VacancyCard
                     :data="vacancy"
                     :link="`/vacancies/${vacancy.id}`"
                     show-desc
                  />
                  <VacancyCard
                     :data="vacancy"
                     :link="`/vacancies/${vacancy.id}`"
                     show-desc
                  />
               </ui-spacing>

               <ui-button class="showMoreBtn" variant="light" weight="500" size="lg">
                  Посмотреть ещё
               </ui-button>
            </ui-spacing>
         </ui-spacing>
      </ui-spacing>
   </ui-wrapper>
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

<script setup lang="ts"></script>

<template>
   <ui-card class="card">
      <ui-spacing vertical>
         <ui-spacing vertical gap="sm">
            <h3 class="title">
               <ui-link to="/resumes">Frontent разработчик</ui-link>
            </h3>
            <p class="updated-date">Обновлено 8 мая 2025 в 11:00</p>
         </ui-spacing>

         <ui-spacing vertical gap="sm">
            <p class="stats-label">Статистика за неделю</p>
            <ui-card size="sm" class="stats">
               <ui-spacing align="center">
                  <p class="stats-part">
                     <span class="stats-count">4</span>
                     показов
                  </p>
                  <p class="stats-part">
                     <span class="stats-count">0</span>
                     просмотров
                  </p>
                  <p class="stats-part">
                     <span class="stats-count">0</span>
                     пирглашений
                  </p>
               </ui-spacing>
            </ui-card>
         </ui-spacing>

         <ui-spacing class="actions" wrap>
            <ui-button>Поднять в описке</ui-button>
            <ui-button variant="light">Вакансии</ui-button>
            <ui-button variant="light">Редактирвоать</ui-button>
         </ui-spacing>
      </ui-spacing>
   </ui-card>
</template>

<style scoped>
.title {
   font-size: 1.2rem;
   font-weight: 600;
}
.updated-date {
   font-size: 0.85rem;
   color: var(--secondary-light);
}
.stats-label{
   font-size: 0.85rem;
   font-weight: 500;
}
.stats {
   font-size: 0.8rem;
   color: var(--secondary-light);
}
.stats-count {
   font-size: 0.85rem;
   color: var(--secondary-main);
   font-weight: 500;
}
.stats-part:not(:last-child) {
   padding-right: 1rem;
   border-right: 1px solid var(--secondary-light);
}
</style>

<script setup lang="ts"></script>

<template>
   <ui-spacing vertical gap="sm" class="ask-question">
      <p>Задайте вопрос работодателю</p>
      <p>Он получит его с откликом на вакансию</p>
      <ui-spacing class="questions" gap="sm" wrap>
         <ui-button variant="outlined" color="secondary">
            Где распологается место работы?
         </ui-button>
         <ui-button variant="outlined" color="secondary">Какой график работы?</ui-button>
         <ui-button variant="outlined" color="secondary">Вакансия открыта?</ui-button>
         <ui-button variant="outlined" color="secondary">Какая оплата труда?</ui-button>
         <ui-button variant="outlined" color="secondary">Как c вами связаться?</ui-button>
      </ui-spacing>
   </ui-spacing>
</template>

<style scoped>
.ask-question p:first-child {
   font-weight: 500;
}
.questions {
   font-size: 0.9rem;
   margin-top: 1rem;
}
</style>

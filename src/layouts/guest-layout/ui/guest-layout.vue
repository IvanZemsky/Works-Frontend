<script setup lang="ts">
import MainFooter from "../../main-footer.vue";
</script>

<template>
   <header class="header">
      <ui-wrapper>
         <ui-spacing align="center">
            <button class="location-btn">Воронеж</button>
            <ui-link color="secondary" class="link">Соискателям</ui-link>
            <ui-link color="secondary" class="link">Работодателям</ui-link>
         </ui-spacing>
      </ui-wrapper>
   </header>
   <main>
      <slot />
   </main>
   <MainFooter />
</template>

<style scoped>
.header {
   padding: 0.7rem 0;
   background-color: var(--primary-contrast);
}
.location-btn {
   text-decoration: underline;
   text-decoration-style: dashed;
   text-underline-offset: 3px;
   text-decoration-thickness: 1px;
   color: var(--primary-main);
   font-size: 0.8rem;
   font-weight: 500;
}
.link{
   font-size: 0.8rem;
}
</style>

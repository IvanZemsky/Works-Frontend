<script setup lang="ts">
import { ROUTES } from "~/src/shared/model"
import { WLogo } from "~/src/shared/ui"

definePageMeta({
   layout: "guest",
})
</script>

<template>
   <section class="intro">
      <ui-wrapper class="wrapper">
         <ui-spacing fill grow vertical gap="lg">
            <ui-spacing as="header" fill align="center" justify="space-between">
               <WLogo size="lg" />
               <ui-spacing>
                  <ui-button-link
                     :to="ROUTES.ACCOUNT"
                     class="header-btn"
                     rounded
                     variant="outlined"
                  >
                     {{ $t("mainPage.signIn") }}
                  </ui-button-link>
                  <ui-button-link
                     :to="ROUTES.ACCOUNT"
                     class="header-btn"
                     rounded
                     variant="outlined"
                  >
                     {{ $t("mainPage.createResume") }}
                  </ui-button-link>
               </ui-spacing>
            </ui-spacing>

            <ui-spacing class="desc" fill justify="center" vertical>
               <h1 class="title">Работа найдётся для каждого</h1>
               <ui-spacing fill align="center" gap="sm">
                  <ui-input
                     class="search-input"
                     placeholder="Профессия, должность или компания"
                  />
                  <ui-button>Найти</ui-button>
               </ui-spacing>
               <ui-link class="employer-link" size="sm">Я ищу сотрудника</ui-link>
            </ui-spacing>

            <ui-spacing as="footer" fill align="center" justify="space-between">
               <div class="info-block">
                  <p class="info-block-count">0</p>
                  <p class="info-block-label">Резюме</p>
               </div>
               <div class="info-block">
                  <p class="info-block-count">0</p>
                  <p class="info-block-label">Вакансии</p>
               </div>
               <div class="info-block">
                  <p class="info-block-count">0</p>
                  <p class="info-block-label">Компании</p>
               </div>
            </ui-spacing>
         </ui-spacing>
      </ui-wrapper>
   </section>
</template>

<style scoped>
.intro {
   display: flex;
   flex-direction: column;
   position: relative;
   min-height: calc(100vh - 200px);
   background: url("/src/shared/assets/images/intro-1.jpg") no-repeat center / cover;
}
.wrapper {
   padding-top: 2rem;
   padding-bottom: 2rem;
}
.intro::after {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.35);
   z-index: 1;
}
.intro > * {
   position: relative;
   z-index: 2;
}
.desc {
   margin: auto 0;
}
.title {
   color: var(--primary-contrast);
   font-size: 2rem;
}
.search-input {
   max-width: 600px;
   width: 100%;
}
.employer-link {
   color: var(--primary-contrast);
   text-decoration: underline;
   text-underline-offset: 3px;
}
.info-block {
   color: var(--primary-contrast);
}
.info-block-count {
   font-size: 1.5rem;
   font-weight: 600;
}
.info-block-label {
   font-size: 0.8rem;
}
</style>

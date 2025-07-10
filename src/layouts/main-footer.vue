<script setup lang="ts">
import { LanguageIcon } from "@/src/shared/ui/icons"
import { GithubFilled } from "@vicons/antd"

const year = new Date().getFullYear()
</script>

<template>
   <footer class="footer">
      <ui-wrapper>
         <ui-spacing vertical fill>
            <ui-spacing>
               <ui-link to="/" size="sm" color="secondary" hover="fade-light">
                  Главная
               </ui-link>
               <ui-link to="/vacancies" size="sm" color="secondary" hover="fade-light">
                  Вакансии
               </ui-link>
            </ui-spacing>
            <ui-spacing class="default-info" align="center" justify="space-between" fill>
               <ui-spacing align="center">
                  <ui-button variant="ghost" class="lang-btn">
                     <ui-spacing align="center" gap="sm">
                        <span><language-icon /></span>
                        <span>Русский</span>
                     </ui-spacing>
                  </ui-button>
                  <p>© {{ year }} Works</p>
               </ui-spacing>
               <ui-spacing>
                  <ui-button
                     as="a"
                     href="https://github.com/IvanZemsky/Works-Frontend"
                     variant="ghost"
                     color="secondary"
                     target="_blank"
                  >
                     <github-filled />
                  </ui-button>
               </ui-spacing>
            </ui-spacing>
         </ui-spacing>
      </ui-wrapper>
   </footer>
</template>

<style scoped>
.footer {
   padding: 1rem 0;
   border-top: 1px solid var(--secondary-extra-light);
}
.default-info {
   padding-top: 1rem;
   border-top: 1px solid var(--secondary-extra-light);
}
.lang-btn svg {
   width: 30px;
}
</style>

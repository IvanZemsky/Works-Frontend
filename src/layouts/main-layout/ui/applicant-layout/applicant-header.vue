<script setup lang="ts">
import NavLink from "@/shared/ui/nav-link.vue"
import WLogo from "@/shared/ui/w-logo.vue"
import { MessageOutlined, HeartOutlined } from "@vicons/antd"
import { ProfileIcon, NavigationIcon } from "@/shared/ui/icons"
import IconButton from "../icon-btn.vue"
import { UiWrapper, UiSpacing, UiButton } from "works-ui"
</script>

<template>
   <header class="header">
      <ui-wrapper class="wrapper">
         <ui-spacing align="center" justify="space-between" gap="md" fill>
            <nav class="navigation">
               <ui-spacing align="center" gap="md">
                  <WLogo />

                  <ui-spacing align="center" gap="sm">
                     <nav-link to="/applicant/resumes" color="secondary" size="sm">
                        Мои резюме
                     </nav-link>
                     <nav-link to="/applicant/negotiations" color="secondary" size="sm">
                        Отклики
                     </nav-link>
                  </ui-spacing>
               </ui-spacing>
            </nav>

            <ui-spacing align="center" gap="md">
               <button class="location-btn">
                  <ui-spacing align="center" gap="sm">
                     <NavigationIcon />
                     Воронеж
                  </ui-spacing>
               </button>
               <icon-button class="action-btn">
                  <message-outlined />
               </icon-button>
               <icon-button class="action-btn">
                  <heart-outlined />
               </icon-button>
               <ui-button
                  class="createResumeLink"
                  as="router-link"
                  to="/"
                  size="md"
                  color="secondary"
                  variant="light"
               >
                  Создать резюме
               </ui-button>
               <icon-button class="action-btn">
                  <profile-icon />
               </icon-button>
            </ui-spacing>
         </ui-spacing>
      </ui-wrapper>
   </header>
</template>

<style scoped>
.wrapper {
   max-width: 1900px;
}
.header {
   padding: 0.7rem 0;
   background-color: var(--secondary-main);
}

.ui-button.createResumeLink {
   background-color: #343c43;
   font-size: 0.8rem;
   color: var(--secondary-contrast);
   border-color: #343c43;
}

.ui-button.createResumeLink:hover {
   background-color: #47525b;
   border-color: #47525b;
}
.action-btn {
   width: 30px;
}
.location-btn {
   background: none;
   font-size: 0.9rem;
   border: none;
   cursor: pointer;
   color: var(--secondary-contrast);
   opacity: 0.8;
   transition: opacity 0.15s linear;
}
.location-btn svg {
   width: 26px;
}
.location-btn:hover {
   opacity: 1;
}
</style>

<script setup lang="ts">
import { HeartOutlined } from "@vicons/antd"
import { ProfileIcon, NavigationIcon } from "@/src/shared/ui/icons"
import { IconBtn, WLogo, NavLink } from "@/src/shared/ui"
import { ToggleChatBtn, ChatWindow } from "@/src/features/chat"
import { authService } from "~/src/entities/auth"

const isProfileModalOpen = ref(false)

const signOutQuery = useLazyAsyncData("signOut", authService.signOut, {
   immediate: false,
})

function handleSignOutBtnClick() {
   signOutQuery.execute()
   if (!signOutQuery.error.value) {
      isProfileModalOpen.value = false
      navigateTo("/", {replace: true})
   }
}
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

               <ToggleChatBtn class="chat-btn">
                  <ChatWindow />
               </ToggleChatBtn>

               <icon-btn class="action-btn">
                  <heart-outlined />
               </icon-btn>
               <ui-button
                  class="create-resume-link"
                  to="/"
                  size="md"
                  color="secondary"
                  variant="light"
               >
                  Создать резюме
               </ui-button>

               <div class="profile-menu">
                  <icon-btn
                     class="action-btn"
                     @click="isProfileModalOpen = !isProfileModalOpen"
                  >
                     <profile-icon />
                  </icon-btn>

                  <div v-if="isProfileModalOpen" class="profile-dropdown">
                     <ui-button @click="handleSignOutBtnClick">Выйти</ui-button>
                  </div>
               </div>
               
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

.ui-button.create-resume-link {
   background-color: #343c43;
   font-size: 0.8rem;
   color: var(--secondary-contrast);
   border-color: #343c43;
}

.ui-button.create-resume-link:hover {
   background-color: #47525b;
   border-color: #47525b;
}
.action-btn {
   width: 30px;
}

.chat-btn :deep(.toggle-btn) {
   width: 30px;
}

:global(#chat .chat-window) {
   max-width: 900px;
   width: 100%;
   height: 600px;
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
.profile-dropdown {
   position: absolute;
   top: 3rem;
   right: 1rem;
   padding: 0.5rem;
   background-color: var(--secondary-contrast);
   z-index: 900;
}
</style>

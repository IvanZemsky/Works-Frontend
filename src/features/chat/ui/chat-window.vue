<script setup lang="ts">
import { CloseOutlined } from "@vicons/antd"
import { IconBtn } from "@/src/shared/ui"
import ChatItem from "./chat-item.vue"
import type { Chat } from "@/src/entities/chat"
import { inject } from "vue"

const mockChat: Chat = {
   id: "1",
   name: "Junior Frontend-разработчик",
   lastMessageDate: "25.10",
   employer: "Google",
   applicationStatus: "rejected",
}

const isOpen = inject<Ref<boolean>>("isOpen")

const handleClose = () => {
   if (isOpen) isOpen.value = false
}
</script>

<template>
   <div class="content">
      <header class="header">
         <ui-spacing align="center" justify="end">
            <icon-btn class="close-btn" @click="handleClose">
               <close-outlined />
            </icon-btn>
         </ui-spacing>
      </header>

      <ui-spacing class="chat-content" fill :gap="[0]">
         <ui-spacing class="chat-list" vertical fill no-shrink :gap="[0]">
            <h3 class="title">Чаты</h3>
            <ui-spacing class="chat-items" vertical grow :gap="[0]">
               <ChatItem :data="mockChat" />
            </ui-spacing>
         </ui-spacing>

         <ui-spacing
            vertical
            align="center"
            justify="center"
            size="lg"
            grow
            class="placeholder"
         >
            <img src="@/src/shared/assets/images/undraw_chat.svg" alt="Chat illustration" />
            <p>Начните общаться с работодателями</p>
         </ui-spacing>
      </ui-spacing>
   </div>
</template>

<style scoped>
.content {
   display: flex;
   flex-direction: column;
   height: 100%;
   border-radius: 0.8rem;
   overflow: hidden;
   box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.16);
   border: 1px solid var(--neutral-main);
   background-color: var(--secondary-contrast);
}
.close-btn {
   width: 26px;
   color: var(--secondary-main);
}
.header {
   padding: 12px 16px;
   background-color: var(--secondary-extra-light);
   border-bottom: 1px solid var(--neutral-main);
}
.chat-content {
   flex-grow: 1;
}
.chat-list {
   width: 320px;
   height: 100%;
}
.chat-items {
   overflow-y: auto;
}
.title {
   padding: 12px 16px;
   font-weight: 500;
}
.placeholder {
   height: 100%;
   padding: 12px;
}
.placeholder img {
   max-width: 400px;
   width: 100%;
   height: auto;
}
.placeholder p {
   font-weight: 500;
}
</style>

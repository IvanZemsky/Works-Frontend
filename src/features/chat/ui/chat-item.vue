<script setup lang="ts">
import type { Chat } from "@/src/entities/chat"

type Props = {
   data: Chat
}

defineProps<Props>()
</script>

<template>
   <ui-spacing class="item" align="center" gap="sm">
      <ui-avatar class="avatar" alt="G" size="lg" />
      <div class="info">
         <ui-spacing class="info-header" :gap="[2]">
            <p class="info-title">Junior Frontend-разработчик</p>
            <p class="info-date">25.10</p>
         </ui-spacing>
         <p class="info-company">Google</p>
         <p class="info-status">Отказ</p>
      </div>
   </ui-spacing>
</template>

<style scoped>
.item {
   overflow: hidden;
   padding-left: 12px;
   transition: background-color 0.15s linear;
   cursor: pointer;
}

.item:hover {
   background-color: var(--secondary-extra-light);
}

.avatar {
   border: 1px solid var(--neutral-main);
   flex-shrink: 0;
}

.info {
   line-height: 1.3;
   padding: 6px 0;
   border-bottom: 1px solid var(--neutral-main);
   font-size: 0.75rem;
}

.info-header {
   display: grid;
   grid-template-columns: 1fr auto;
   align-items: center;
}

.info > *{
   padding-right: 12px;
}

.info-title {
   font-size: 0.8rem;
   font-weight: 600;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
}

.info-date {
   color: var(--secondary-light);
}
</style>

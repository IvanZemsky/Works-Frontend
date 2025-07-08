<script setup lang="ts">
import { ArrowRightOutlined } from "@vicons/antd"
</script>

<template>
   <ui-link to="/profile">
      <ui-card class="card">
         <ui-spacing align="center" gap="sm">
            <ui-avatar class="avatar" size="lg" alt="IK" />
            <div class="info">
               <p class="name">Имя Фамилия</p>
               <p class="status">Не ищу работу</p>
            </div>
            <arrow-right-outlined class="arrow-icon" />
         </ui-spacing>
      </ui-card>
   </ui-link>
</template>

<style scoped>
.avatar {
   flex-shrink: 0;
   border-radius: 0.7rem;
}
.info {
   font-size: 0.8rem;
}
.name {
   font-weight: 500;
}
.status {
   font-size: 0.75rem;
}
.arrow-icon {
   width: 1.2rem;
   margin-left: auto;
   color: var(--neutral-dark);
}
</style>

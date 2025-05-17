<script setup lang="ts">
import { CloseCircleFilled } from "@vicons/antd"
import { IconBtn } from "@/shared/ui"
</script>

<template>
   <div class="content">
      <header class="header">
         <icon-btn class="close-btn">
            <close-circle-filled />
         </icon-btn>
      </header>
   </div>
</template>

<style scoped>
.content {
   border-radius: 0.8rem;
   overflow: hidden;
}
.close-btn {
   color: var(--secondary-main);
}
.header{
   background-color: var(--secondary-light);
}
</style>

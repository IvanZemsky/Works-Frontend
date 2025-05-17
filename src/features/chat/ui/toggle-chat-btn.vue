<script setup lang="ts">
import { ref } from "vue"
import { MessageOutlined } from "@vicons/antd"
import { IconBtn } from "@/shared/ui"

const isOpen = ref(true)
</script>

<template>
   <div class="wrap">
      <icon-btn class="toggle-btn" @click="isOpen = !isOpen">
         <message-outlined />
      </icon-btn>

      <Teleport to="#chat">
         <div v-if="isOpen" class="chat-window">
            <slot />
         </div>
      </Teleport>
   </div>
</template>

<style scoped>
.chat-window {
   position: fixed;
   right: 0;
   top: calc(100%) + 40px;
   z-index: 900;
}
</style>

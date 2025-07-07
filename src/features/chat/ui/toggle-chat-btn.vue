<script setup lang="ts">
import { provide, ref } from "vue";
import { MessageOutlined } from "@vicons/antd";
import { IconBtn } from "@/src/shared/ui";

const isOpen = ref(false);

provide<Ref<boolean>>("isOpen", isOpen);
</script>

<template>
   <div class="wrap">
      <icon-btn class="toggle-btn" @click="isOpen = !isOpen">
         <message-outlined />
      </icon-btn>

      <ClientOnly>
         <Teleport to="#chat">
            <div v-if="isOpen" class="chat-window">
               <slot />
            </div>
         </Teleport>
      </ClientOnly>
   </div>
</template>

<style scoped>
.chat-window {
   position: fixed;
   right: 0;
   bottom: 40px;
   z-index: 900;
}
</style>

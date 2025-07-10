<script setup lang="ts">
withDefaults(
   defineProps<{
      size?: "sm" | "lg";
   }>(),
   {
      size: "sm",
   }
);
</script>

<template>
   <nuxt-link to="/" :class="['logo', `size-${size}`]">w</nuxt-link>
</template>

<style scoped>
.logo {
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   background-color: red;
   font-size: 1.2rem;
   font-weight: 600;
   color: white;
}

.logo.size-sm {
   width: 40px;
   height: 40px;
   font-size: 1rem;
}

.logo.size-lg {
   width: 60px;
   height: 60px;
   font-size: 1.5rem;
}
</style>

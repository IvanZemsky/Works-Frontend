<script setup lang="ts">
import EmployerHeader from './employer-header.vue'
import EmployerFooter from './employer-footer.vue'
</script>

<template>
  <div class="layout">
    <EmployerHeader />
    <main>
      <router-view></router-view>
    </main>
    <EmployerFooter />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 2rem;
  width: 100%;
  min-height: 100vh;
}
</style>

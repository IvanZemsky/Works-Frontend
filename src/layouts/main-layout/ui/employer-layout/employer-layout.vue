<script setup lang="ts">
import EmployerHeader from './employer-header.vue'
import MainFooter from '../main-footer.vue'
</script>

<template>
  <div class="layout">
    <EmployerHeader />
    <main>
      <router-view></router-view>
    </main>
    <MainFooter />
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

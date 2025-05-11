<script setup lang="ts">
import ApplicantHeader from './applicant-header.vue'
import ApplicantFooter from './applicant-footer.vue'
</script>

<template>
  <div class="layout">
    <ApplicantHeader />
    <main>
      <router-view></router-view>
    </main>
    <ApplicantFooter />
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

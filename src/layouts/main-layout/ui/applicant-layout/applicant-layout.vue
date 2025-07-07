<script setup lang="ts">
import MainFooter from "../main-footer.vue";
import ApplicantHeader from './applicant-header.vue'
</script>

<template>
  <div class="layout">
    <ApplicantHeader />
    <main>
      <slot/>
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

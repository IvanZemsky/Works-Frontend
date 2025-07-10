<script setup lang="ts">
import EmployerHeader from './employer-header.vue'
import MainFooter from '../../../main-footer.vue'
</script>

<template>
    <EmployerHeader />
    <main class="main">
      <slot/>
    </main>
    <MainFooter />
</template>

<style scoped>
.main{
  margin: 2rem 0;
}
</style>

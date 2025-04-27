<script setup lang="ts">
import RootHeader from './root-header.vue'
import RootFooter from './root-footer.vue'
</script>

<template>
  <div class="layout">
    <RootHeader />
    <main>
      <router-view></router-view>
    </main>
    <RootFooter />
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  min-height: 100vh;
}
</style>

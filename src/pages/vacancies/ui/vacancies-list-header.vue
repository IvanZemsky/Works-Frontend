<script setup lang="ts">
defineProps<{ totalCount: number | undefined }>()

</script>

<template>
   <ui-spacing align="center">
      <p v-if="totalCount === undefined">Loading...</p>
      <h2 class="header">Найдено {{ totalCount }} вакансий</h2>
   </ui-spacing>
</template>

<style scoped>
.header {
   font-size: 1.2rem;
   font-weight: 600;
}
</style>

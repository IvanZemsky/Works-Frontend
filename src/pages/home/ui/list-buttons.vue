<script setup lang="ts">
import { homePageListBtns } from "../model/const"
</script>

<template>
   <ui-button
      v-for="btn in homePageListBtns"
      :key="btn.id"
      class="list-btn"
      rounded
      color="secondary"
      variant="light"
      size="sm"
   >
      {{ btn.text }}
   </ui-button>
</template>

<style scoped>
.list-btn {
   text-wrap: nowrap;
}
</style>

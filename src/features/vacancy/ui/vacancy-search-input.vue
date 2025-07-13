<script setup lang="ts">
import SearchOutlined from "@vicons/antd/SearchOutlined"
</script>

<template>
   <ui-spacing fill>
      <ui-input placeholder="Профессия, должность или компания" class="input">
         <template #icon><search-outlined /></template>
      </ui-input>
      <ui-button class="searchBtn">Найти</ui-button>
   </ui-spacing>
</template>

<style scoped>
.input {
   flex-grow: 1;
}
.searchBtn {
   max-width: 200px;
   width: 100%;
   height: 100%;
}
</style>

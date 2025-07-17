<script setup lang="ts">
import SearchOutlined from "@vicons/antd/SearchOutlined"
import { ROUTES } from "~/src/shared/model"

const textSearch = ref("")
</script>

<template>
   <ui-spacing fill>
      <ui-input
         v-model="textSearch"
         placeholder="Профессия, должность или компания"
         class="input"
      >
         <template #icon><search-outlined /></template>
      </ui-input>
      <ui-button-link
         :to="{ path: ROUTES.VACANCIES, query: { text_search: textSearch } }"
         class="searchBtn"
      >
         Найти
      </ui-button-link>
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

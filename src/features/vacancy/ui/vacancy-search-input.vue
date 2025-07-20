<script setup lang="ts">
import SearchOutlined from "@vicons/antd/SearchOutlined"
import type { LocationQueryValue } from "vue-router"
import { ROUTES } from "~/src/shared/model"

type Props = {
   default?: string
   prevQueryParams?: Record<string, LocationQueryValue | LocationQueryValue[]>
}

const props = withDefaults(defineProps<Props>(), {
   default: "",
   prevQueryParams: () => ({}),
})

const textSearch = ref(props.default)

watch(
   () => props.default,
   (newValue) => {
      textSearch.value = newValue
   },
   { immediate: true },
)
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
         :to="{
            path: ROUTES.VACANCIES,
            query: { text_search: textSearch, ...prevQueryParams },
         }"
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

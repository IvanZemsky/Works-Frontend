<script setup lang="ts">
import { VacancySearchInput } from "~/src/features/vacancy"

const route = useRoute()
const queryParams = computed(() => route.query)
const textSearch = computed(() => queryParams.value.text_search as string)
const prevQueryParams = computed(() => {
   const { text_search: _, ...rest } = queryParams.value
   return rest
})
</script>

<template>
   <VacancySearchInput :default="textSearch" :prev-query-params="prevQueryParams" />
</template>

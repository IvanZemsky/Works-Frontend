<script setup lang="ts">
import { VacancySearchInput } from "~/src/features/vacancy"

const route = useRoute()
const textSearch = computed(() => route.query.text_search as string)
</script>

<template>
   <VacancySearchInput :default="textSearch" />
</template>

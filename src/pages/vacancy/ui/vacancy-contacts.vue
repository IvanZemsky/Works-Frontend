<script setup lang="ts">
import type { Vacancy } from "~/src/entities/vacancy"
import { capitalize } from "~/src/shared/lib"

defineProps<{ contacts: Vacancy["contacts"] }>()
</script>

<template>
   <ui-spacing vertical>
      <p class="contacts-title">{{ capitalize($t("contacts")) }}</p>
      <p v-if="contacts.name">{{ contacts.name }}</p>
      <ui-button variant="light">Показать {{ $t("contacts") }}</ui-button>
   </ui-spacing>
</template>

<style scoped>
.contacts-title {
   font-weight: 600;
}
</style>

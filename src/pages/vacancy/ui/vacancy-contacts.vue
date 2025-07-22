<script setup lang="ts">
import { useInject } from "works-ui"
import type { Vacancy } from "~/src/entities/vacancy"
import { capitalize } from "~/src/shared/lib"

const vacancy = useInject<Vacancy | null>("vacancy")

const contacts = computed(() => vacancy?.contacts || null)
</script>

<template>
   <ClientOnly>
      <ui-spacing v-if="contacts" vertical>
         <p class="contacts-title">{{ capitalize($t("contacts")) }}</p>
         <p v-if="contacts.name">{{ contacts.name }}</p>
         <ui-button variant="light">Показать {{ $t("contacts") }}</ui-button>
      </ui-spacing>
   </ClientOnly>
</template>

<style scoped>
.contacts-title {
   font-weight: 600;
}
</style>

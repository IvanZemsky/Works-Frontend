<script setup lang="ts">
import { useAttrs } from 'vue'
import { useRoute } from 'vue-router'
import { type UiLinkProps } from 'works-ui'

const props = withDefaults(defineProps<UiLinkProps>(), {})

const route = useRoute()
const { to } = useAttrs()
</script>

<template>
  <ui-link v-bind="props" :class="['link', { active: route.fullPath.startsWith(to as string) }]">
    <slot></slot>
  </ui-link>
</template>

<style scoped>
a.link {
  color: var(--secondary-contrast);
  opacity: 0.8;
}
a.link:hover {
  opacity: 1;
  text-decoration: none;
}
.link.active {
  text-shadow: 0 0 2px white;
  opacity: 1;
}
</style>

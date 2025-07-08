<script setup lang="ts">
import type { UiLinkProps } from "./ui-link.props"
import "./ui-link.css"
import { NuxtLink } from "#components";

const props = withDefaults(defineProps<UiLinkProps>(), {
   size: "md",
   color: "primary",
   as: "nuxt-link",
   hover: "underline",
   weight: "400",
})

const { size, color, as, hover, weight } = props

const Tag = as === "nuxt-link" ? NuxtLink : as
</script>

<template>
   <Tag
      :class="[
         'ui-link',
         `size-${size}`,
         `color-${color}`,
         `hover-${hover}`,
         `ui-s-weight-${weight}`,
      ]"
   >
      <slot name="start-icon" />
      <slot />
      <slot name="end-icon" />
   </Tag>
</template>

<style scoped></style>

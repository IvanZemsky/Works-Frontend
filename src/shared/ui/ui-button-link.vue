<script setup lang="ts">
import type { UiButtonProps } from "works-ui"
import { NuxtLink } from "#components";

withDefaults(defineProps<Omit<UiButtonProps, "as">>(), {
   variant: "filled",
   size: "md",
   color: "primary",
   weight: "400",
   rounded: false,
})


const attrs = useAttrs()

</script>

<template>
   <NuxtLink
      :class="[
         'ui-button',
         `variant-${variant}`,
         `size-${size}`,
         `color-${color}`,
         `ui-s-weight-${weight}`,
         // { wave: isWaveActive && hasWave },
         { rounded },
      ]"
      v-bind="attrs"
   >
      <slot name="start-icon" />
      <span class="ui-button__text"><slot /></span>
      <slot name="end-icon" />
   </NuxtLink>
</template>

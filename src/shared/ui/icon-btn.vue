<template>
   <button :class="['icon-button', $attrs.class]">
      <slot />
   </button>
</template>

<style scoped>
.icon-button {
   background: none;
   border: none;
   color: var(--secondary-contrast);
   opacity: 0.7;
   transition: opacity 0.15s linear;
   cursor: pointer;
   font-size: 0;
}
.icon-button:hover {
   opacity: 1;
}
.icon-button svg {
   width: 100%;
   height: auto;
   color: inherit;
}
</style>

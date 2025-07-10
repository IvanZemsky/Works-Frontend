<template>
   <div class="layout">
      <slot />
   </div>
</template>

<style scoped>
.layout {
   display: grid;
   grid-template-rows: auto 1fr;
   width: 100%;
   min-height: 100vh;
   height: 100%;
}
</style>

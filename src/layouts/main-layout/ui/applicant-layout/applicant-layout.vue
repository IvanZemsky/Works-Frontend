<script setup lang="ts">
import MainFooter from "../../../main-footer.vue";
import ApplicantHeader from "./applicant-header.vue";
</script>

<template>
   <ApplicantHeader />
   <main class="main">
      <slot />
   </main>
   <MainFooter/>
</template>

<style scoped>
.main{
  margin: 2rem 0;
}
</style>

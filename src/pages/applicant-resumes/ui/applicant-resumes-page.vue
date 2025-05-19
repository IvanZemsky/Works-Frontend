<script setup lang="ts">
import PageHeader from "./page-header.vue"
import ApplicantCard from "./applicant-card.vue"
import ResumeCard from "./resume-card.vue"
</script>

<template>
   <ui-wrapper>
      <ui-spacing class="content" vertical align="stretch" gap="lg">
         <PageHeader />
         <ApplicantCard class="card"/>
         <ResumeCard/>
      </ui-spacing>
   </ui-wrapper>
</template>

<style scoped>
.content {
   max-width: 800px;
   width: 100%;
}
</style>

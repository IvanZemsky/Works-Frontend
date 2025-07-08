<script setup lang="ts">
import PageHeader from "~/src/pages/applicant-resumes/ui/page-header.vue"
import ApplicantCard from "~/src/pages/applicant-resumes/ui/applicant-card.vue"
import ResumeCard from "~/src/pages/applicant-resumes/ui/resume-card.vue"

definePageMeta({
   layout: "applicant"
})
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

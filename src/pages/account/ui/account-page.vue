<script setup lang="ts">
import { useAccountForm } from "../lib/use-account-form"
import RoleSelectionForm from "./forms/role-selecton-form.vue"
import SignInForm from "./forms/sign-in.vue"
import SignUpForm from "./forms/sign-up.vue"

const { form } = useAccountForm()
</script>

<template>
   <ui-wrapper class="wrapper">
      <ui-card class="content-card">
         <RoleSelectionForm v-if="form === 'role-select'" />
         <SignInForm v-if="form === 'sign-in'" />
         <SignUpForm v-if="form === 'sign-up'" />
      </ui-card>
   </ui-wrapper>
</template>

<style scoped>
.wrapper {
   min-height: 100vh;
}
.title {
   font-size: 1rem;
   text-align: center;
   font-weight: 600;
}
.content-card {
   align-self: center;
   max-width: 400px;
   width: 100%;
   margin: 0 auto;
}
</style>

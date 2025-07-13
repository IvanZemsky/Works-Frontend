<script setup lang="ts">
import RoleSelectionForm from "./forms/role-selecton-form.vue"
import SignInForm from "./forms/sign-in.vue"
import SignUpForm from "./forms/sign-up.vue"

const route = useRoute()

const form = computed(() => route.query.form as "role-select" | "sign-in" | "sign-up")

if (
   !form.value ||
   (form.value !== "role-select" && form.value !== "sign-in" && form.value !== "sign-up")
) {
   navigateTo({ path: "/account", query: { form: "role-select" } })
}
</script>

<template>
   <ui-wrapper class="wrapper">
      <ui-card class="content-card">
         <RoleSelectionForm v-if="form === 'role-select'"/>
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

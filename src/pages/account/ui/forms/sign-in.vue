<script setup lang="ts">
import { useSignIn } from "~/src/features/auth"

defineProps<{ role: "applicant" | "employer" }>()

const { login, isPending, loginData } = useSignIn()

async function submitSignIn(event: Event) {
   const form = event.target as HTMLFormElement
   loginData.value = {
      login: form.login.value,
      password: form.password.value,
   }

   await login()
}
</script>

<template>
   <form class="form" @submit.prevent="submitSignIn">
      <ui-spacing vertical>
         <h1 class="title">{{ $t(`authPages.titles.${role}`) }}</h1>
         <ui-input placeholder="Login" name="login" />
         <ui-input
            :placeholder="$t('authPages.password')"
            name="password"
            type="password"
         />
         <ui-button :disabled="isPending" class="submit-btn" size="lg" type="submit">
            {{ $t("authPages.signIn") }}
         </ui-button>
      </ui-spacing>
   </form>
</template>

<style scoped>
.form .ui-input {
   width: 100%;
}
.title {
   font-size: 1rem;
   font-weight: 500;
   margin: 0 auto;
}
.submit-btn {
   width: 100%;
}
</style>

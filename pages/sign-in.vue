<script setup lang="ts">
import { capitalize } from "@/src/shared/lib";
import { useAuthStore } from "~/src/features/auth";

const {signIn} = useAuthStore();

async function handleSubmit(event: Event) {
   const form = event.target as HTMLFormElement;
   const dto = {
      login: form.email.value,
      password: form.password.value,
   }

   await signIn(dto)
}
</script>

<template>
   <ui-wrapper class="wrapper">
      <ui-card class="form-card">
         <form @submit.prevent="handleSubmit">
            <ui-spacing vertical>
               <h1 class="title">{{ capitalize($t("authorization")) }}</h1>
               <ui-input placeholder="Email" name="email" />
               <ui-input
                  :placeholder="$t('authPages.password')"
                  name="password"
                  type="password"
               />
               <ui-button class="submit-btn" size="lg" type="submit">
                  {{ $t("authPages.signIn") }}
               </ui-button>
               <p>
                  {{ $t("authPages.noAccountMsg") }}
                  <ui-link to="/sign-up">{{
                     $t("authPages.registerMsg")
                  }}</ui-link>
               </p>
            </ui-spacing>
         </form>
      </ui-card>
   </ui-wrapper>
</template>

<style scoped>
.wrapper {
   min-height: 100vh;
}
.form-card {
   align-self: center;
   max-width: 500px;
   width: 100%;
   margin: 0 auto;
}
.form-card .ui-input {
   width: 100%;
}
.title {
   font-size: 1.2rem;
   font-weight: 500;
}
.submit-btn {
   width: 100%;
}
</style>

<script setup lang="ts">
import { authService, type SignUpDTO } from "~/src/entities/auth"
import { ROUTES } from "~/src/shared/model"

const route = useRoute()
const role = route.query.role as string

async function submitSignIp(event: Event) {
   if (role !== "applicant" && role !== "employer") {
      console.error("Invalid role")
      return
   }

   const form = event.target as HTMLFormElement
   const dto: SignUpDTO = {
      login: form.login.value,
      password: form.password.value,
      role,
   }

   try {
      await authService.signUp(dto)
      await navigateTo(ROUTES.HOME)
   } catch (error) {
      console.log(error)
   }
}
</script>

<template>
   <form class="form"  @submit.prevent="submitSignIp">
      <ui-spacing vertical>
          <h1 class="title">{{ $t(`authPages.titles.${role}`) }}</h1>
         <ui-input placeholder="Login" name="login" />
         <ui-input
            :placeholder="$t('authPages.password')"
            name="password"
            type="password"
         />
         <ui-button class="submit-btn" size="lg" type="submit">
            {{ $t("authPages.signUp") }}
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

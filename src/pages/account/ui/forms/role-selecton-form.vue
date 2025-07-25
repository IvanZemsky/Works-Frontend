<script setup lang="ts">
import { useAccountFormOptions } from "~/src/features/auth/model/use-account-form-options"
import RoleCard from "../role-card.vue"
import { ROUTES } from "~/src/shared/model"

const { role } = useAccountFormOptions()
</script>

<template>
   <ui-spacing vertical align="stretch">
      <h1 class="title">{{ $t("authPages.titles.signIn") }}</h1>
      <ui-spacing vertical align="stretch" gap="sm">
         <RoleCard
            :current-role="role"
            role="applicant"
            title="Я ищу работу"
            desc="Профиль соискателя"
         />
         <RoleCard
            :current-role="role"
            role="employer"
            title="Я ищу сотрудников"
            desc="Профиль работодателя"
         />
      </ui-spacing>

      <ui-spacing vertical align="stretch" gap="sm">
         <ui-button-link
            :to="{ path: ROUTES.ACCOUNT, query: { role, form: 'sign-in' } }"
            class="auth-link"
            size="lg"
            type="submit"
         >
            {{ $t("authPages.signIn") }}
         </ui-button-link>
         <ui-button-link
            :to="{ path: ROUTES.ACCOUNT, query: { role, form: 'sign-up' } }"
            class="auth-link"
            size="lg"
            variant="light"
            type="submit"
         >
            {{ $t("authPages.titles.register") }}
         </ui-button-link>
      </ui-spacing>
   </ui-spacing>
</template>

<style scoped>
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
.form-card .ui-input {
   width: 100%;
}
.auth-link {
   width: 100%;
}
</style>

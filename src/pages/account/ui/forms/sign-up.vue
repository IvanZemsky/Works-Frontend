<script setup lang="ts">
import z from "zod"
import { useSignUp } from "~/src/features/auth"
import { useForm } from "~/src/shared/lib"

const { role } = defineProps<{ role: "applicant" | "employer" }>()

const schema = z.object({
   first_name: z.string("Это поле обязательно").min(2, "Минимум 2 символа"),
   last_name: z.string().min(2, "Минимум 2 символа"),
   patronymic: z.string().optional(),
   login: z.string().min(4, "Минимум 4 символа"),
   password: z.string().min(4, "Минимум 4 символа"),
})

const form = useForm(schema)
const { isPending, register, registerData } = useSignUp(role)

const handleSubmit = form.handleSubmit(async (data) => {
   registerData.value = {
      ...data,
      role,
   }

   await register()
})
</script>

<template>
   <form class="form" @submit.prevent="handleSubmit">
      <ui-spacing vertical>
         <h1 class="title">{{ $t(`authPages.titles.${role}`) }}</h1>
         <ui-input :placeholder="$t('authPages.firstName')" name="first_name" />
         <span>{{ form.errors.value.first_name }}</span>
         <ui-input :placeholder="$t('authPages.lastName')" name="last_name" />
         <span>{{ form.errors.value.last_name }}</span>
         <ui-input :placeholder="$t('authPages.patronymic')" name="patronymic" />
         <span>{{ form.errors.value.patronymic }}</span>
         <ui-input :placeholder="$t('authPages.login')" name="login" />
         <span>{{ form.errors.value.login }}</span>
         <ui-input
            :placeholder="$t('authPages.password')"
            name="password"
            type="password"
         />
         <span>{{ form.errors.value.password }}</span>
         <ui-button
            :disabled="isPending"
            class="submit-btn"
            size="lg"
            type="submit"
         >
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

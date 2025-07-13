import { authService, type SignUpDTO } from "~/src/entities/auth"

export const useAuthStore = defineStore("auth", () => {
   async function submitSignIn(event: Event) {
      const form = event.target as HTMLFormElement
      const dto = {
         login: form.login.value,
         password: form.password.value,
      }

      try {
         await authService.signIn(dto)
         await navigateTo("/")
      } catch (error) {
         console.log(error)
      }
   }

   async function submitSignUp(event: Event) {
      const form = event.target as HTMLFormElement
      const dto: SignUpDTO = {
         login: form.login.value,
         password: form.password.value,
         role: "applicant",
      }

      try {
         await authService.signUp(dto)
         await navigateTo("/")
      } catch (error) {
         console.log(error)
      }
   }

   return {
      handlers: {
         submitSignIn,
         submitSignUp,
      },
   }
})

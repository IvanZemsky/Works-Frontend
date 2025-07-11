import { CONFIG } from "~/src/shared/config"
import type { SignInDTO } from "@/src/entities/user"

export const authService = {
   ACCESS_TOKEN_KEY: "access_token",

   async signUp(dto: SignInDTO) {
      await $fetch(`${CONFIG.API_URL}/auth/sign-up`, {
         method: "POST",
         body: dto,
         credentials: "include",
      })
   },

   async signIn(dto: SignInDTO) {
      await $fetch(`${CONFIG.API_URL}/auth/sign-in`, {
         method: "POST",
         body: dto,
         credentials: "include",
      })
   },

      async signOut() {
      await $fetch(`${CONFIG.API_URL}/auth/sign-out`, {
         method: "POST",
         credentials: "include",
      })
   },

   async checkSession() {
      await $fetch(`${CONFIG.API_URL}/auth/check-session`, {
         method: "GET",
         credentials: "include",
      })
   },
}

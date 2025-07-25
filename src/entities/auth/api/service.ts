import type { TokenData } from "../model/types"
import type { SignInDTO, SignUpDTO } from "../model/dto"

export const authService = {
   async signUp(dto: SignUpDTO) {
      await $fetch(`/api/auth/sign-up`, {
         method: "POST",
         body: dto,
         credentials: "include",
      })
   },

   async signIn(dto: SignInDTO) {
      await $fetch(`/api/auth/sign-in`, {
         method: "POST",
         body: dto,
         credentials: "include",
      })
   },

   async signOut() {
      await $fetch(`/api/auth/sign-out`, {
         method: "POST",
         credentials: "include",
      })
   },

   async checkSession(){
      return await $fetch<TokenData>(`/api/auth/check-session`, {
         method: "GET",
         credentials: "include",
      })
   },
}

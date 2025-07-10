import type { SignInDTO } from "~/src/entities/user";
import { CONFIG } from "~/src/shared/config";

export const useAuthStore = defineStore("auth", () => {
   const isAuth = ref(false);

   async function signIn(dto: SignInDTO) {
      try {
         await $fetch(`${CONFIG.API_URL}/auth/sign-in`, {
            method: "POST",
            body: dto,
            credentials: "include",
         });

         await navigateTo("/");
      } catch (error) {
         console.log(error)
      }
   }

   return {
      isAuth,
      signIn,
   };
});

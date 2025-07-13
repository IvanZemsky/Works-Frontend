import { authService } from "~/src/entities/auth"
import { PUBLIC_PAGES, ROUTES } from "~/src/shared/model"

export default defineNuxtRouteMiddleware(async (to) => {
   if (import.meta.client) return

   const accessToken = useCookie(authService.ACCESS_TOKEN_KEY)
   if (!accessToken.value) {
      if (PUBLIC_PAGES.includes(to.path)) return
      return navigateTo(ROUTES.ACCOUNT)
   }

   try {
      await verifySession()

      if (PUBLIC_PAGES.includes(to.path)) {
         return navigateTo(ROUTES.HOME, { replace: true })
      }

      return
   } catch (_) {
      accessToken.value = null
      return navigateTo(ROUTES.ACCOUNT, { replace: true })
   }
})

async function verifySession() {
   return await $fetch("/api/auth/check-session", {
      method: "GET",
      credentials: "include",
      headers: useRequestHeaders(["cookie"]),
   })
}

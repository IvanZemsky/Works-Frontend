import { PUBLIC_PAGES, ROUTES } from "~/src/shared/model"

export default defineNuxtRouteMiddleware(async (to) => {
   if (import.meta.client) {
      if (PUBLIC_PAGES.includes(to.path)) return

      try {
         await $fetch("/api/auth/check-session", {
            method: "GET",
            credentials: "include",
            headers: useRequestHeaders(["cookie"]),
         })

         if (PUBLIC_PAGES.includes(to.path)) {
            return navigateTo(ROUTES.HOME, { replace: true })
         }
      } catch (_) {
         return navigateTo(ROUTES.ACCOUNT, { replace: true })
      }
   }
})

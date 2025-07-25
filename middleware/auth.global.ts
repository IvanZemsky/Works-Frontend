import { ONLY_PUBLIC_PAGES, ROUTES } from "~/src/shared/model"

export default defineNuxtRouteMiddleware(async (to) => {
   if (import.meta.client) return

   try {
      await $fetch("/api/auth/check-session", {
         method: "GET",
         credentials: "include",
         headers: useRequestHeaders(["cookie"]),
      })

      if (ONLY_PUBLIC_PAGES.includes(to.path)) {
         return navigateTo(ROUTES.HOME, { replace: true })
      }
      return
   } catch (_) {
      if (!ONLY_PUBLIC_PAGES.includes(to.path)) {
         return navigateTo(ROUTES.ACCOUNT, { replace: true })
      }
      return
   }
})

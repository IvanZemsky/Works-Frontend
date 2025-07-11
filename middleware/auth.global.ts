import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "#imports"
import { jwtDecode } from "jwt-decode"
import { authService, type TokenData } from "~/src/entities/auth"
import { PUBLIC_PAGES, ROUTES } from "~/src/shared/model"

export default defineNuxtRouteMiddleware((to) => {
   if (import.meta.client) return

   const accessToken = useCookie(authService.ACCESS_TOKEN_KEY)

   if (!accessToken.value) {
      if (PUBLIC_PAGES.includes(to.path)) return
      return navigateTo(ROUTES.SIGN_IN)
   }

   try {
      const tokenPayload = decodeToken(accessToken.value)

      const isTokenExpired = tokenPayload.exp && tokenPayload.exp * 1000 < Date.now()
      if (isTokenExpired) {
         accessToken.value = null
         return navigateTo(ROUTES.SIGN_IN, { replace: true })
      }

      if (PUBLIC_PAGES.includes(to.path)) {
         return navigateTo(ROUTES.HOME, { replace: true })
      }
   } catch (_) {
      accessToken.value = null
      return navigateTo(ROUTES.SIGN_IN, { replace: true })
   }
})

function decodeToken(token: string) {
   return jwtDecode<TokenData>(token)
}

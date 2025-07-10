import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "#imports";
import {jwtDecode} from 'jwt-decode'; // Установите: npm install jwt-decode

export default defineNuxtRouteMiddleware(async (to) => {
   if (import.meta.client) {
      return;
   }

   const accessToken = useCookie("access_token");
   console.log("Access token:", accessToken.value);

   const publicPages = ["/sign-in", "/sign-up"];
   if (publicPages.includes(to.path)) {
      return;
   }

   if (!accessToken.value) {
      console.log("No token, redirecting to /sign-in"); // Add logging
      return navigateTo("/sign-in");
   }

   try {
      const decodedToken = jwtDecode<{ role: string; sub: string, exp: number }>(accessToken.value);
      console.log("Decoded Token:", decodedToken);

      if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
          console.log("Token expired, redirecting to /sign-in");
          accessToken.value = null; // Очищаем cookie, если токен истек
          return navigateTo("/sign-in");
      }
   } catch (error) {
      console.error("Error decoding token:", error);
      accessToken.value = null;
      return navigateTo("/sign-in");
   }
});
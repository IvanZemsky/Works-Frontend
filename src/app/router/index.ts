import { createRouter, createWebHistory } from "vue-router"
import { i18n } from "@/shared/i18n"

const { t } = i18n.global

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "home",
         component: () => import("@/pages/home/ui/home-page.vue"),
         meta: {
            title: t("homePage.title"),
         },
      },
      {
         path: "/sign-up",
         name: "sign-up",
         component: () => import("@/pages/sign-up/ui/sign-up-page.vue"),
         meta: {
            title: t("authPages.titles.signUp"),
         },
      },
      {
         path: "/sign-in",
         name: "sign-in",
         component: () => import("@/pages/sign-in/ui/sign-in-page.vue"),
         meta: {
            title: t("authPages.titles.signIn"),
         },
      },
      {
         path: "/vacancy/:id",
         name: "vacancy",
         component: () => import("@/pages/vacancy/ui/vacancy-page.vue"),
      },
      {
         path: "/applicant",
         name: "applicant",
         component: () => import("@/pages/applicant-page.vue"),
         children: [
            {
               path: "resumes",
               name: "resumes",
               component: () => import("@/pages/resumes-page.vue"),
            },
            {
               path: "negotiations",
               name: "negotiations",
               component: () => import("@/pages/negotiations-page.vue"),
            },
         ],
      },
      {
         path: "/vacancies",
         name: "vacancies",
         component: () => import("@/pages/vacancies-page.vue"),
      },
   ],
})

router.beforeEach((to) => {
   const defaultTitle = "Works"

   if (to.meta.title) {
      document.title = String(to.meta.title)
   } else {
      document.title = defaultTitle
   }
})

export default router

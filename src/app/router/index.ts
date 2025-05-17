import { createRouter, createWebHistory } from "vue-router"
import { i18n } from "@/shared/i18n"

const { t } = i18n.global

const MainLayout = () => import("@/layouts/main-layout/ui/main-layout.vue")

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "home",
         component: MainLayout,
         redirect: "/",
         children: [
            {
               path: "/",
               component: () => import("@/pages/home/ui/home-page.vue"),
               meta: {
                  title: t("homePage.title"),
               },
            },
         ],
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
         path: "/applicant",
         component: MainLayout,
         children: [
            {
               path: "resumes",
               name: "resumes",
               component: () =>
                  import("@/pages/applicant-resumes/applicant-resumes-page.vue"),
            },
            {
               path: "negotiations",
               name: "negotiations",
               component: () =>
                  import(
                     "@/pages/applicant-negotiations/applicant-negotiations-page.vue"
                  ),
            },
         ],
      },
      {
         path: "/employers/:id",
         name: "employer",
         component: MainLayout,
         redirect: "/employers/:id",
         children: [
            {
               path: "/employers/:id",
               component: () => import("@/pages/employer/ui/employer-page.vue"),
            },
         ],
      },
      {
         path: "/vacancies",
         name: "vacancies",
         redirect: "/vacancies",
         component: MainLayout,
         children: [
            {
               path: "/vacancies",
               component: () => import("@/pages/vacancies/vacancies-page.vue"),
            },
            {
               path: "/vacancies/:id",
               name: "vacancy",
               component: () => import("@/pages/vacancy/ui/vacancy-page.vue"),
            },
         ],
      },
   ],
})

router.beforeEach((to) => {
   const defaultTitle = "Works"

   if (to.meta?.title) {
      document.title = String(to.meta.title)
   } else {
      document.title = defaultTitle
   }
})

export default router

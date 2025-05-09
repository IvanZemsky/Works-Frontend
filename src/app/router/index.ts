import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/ui/home-page.vue'),
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/pages/sign-up/ui/sign-up-page.vue'),
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/pages/sign-in/ui/sign-in-page.vue'),
    },
    {
      path: '/applicant',
      name: 'applicant',
      component: () => import('@/pages/applicant-page.vue'),
      children: [
        {
          path: 'resumes',
          name: 'resumes',
          component: () => import('@/pages/resumes-page.vue'),
        },
        {
          path: 'negotiations',
          name: 'negotiations',
          component: () => import('@/pages/negotiations-page.vue'),
        },
      ],
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      component: () => import('@/pages/vacancies-page.vue'),
    },
  ],
})

export default router

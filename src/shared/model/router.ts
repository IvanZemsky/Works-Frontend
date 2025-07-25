export const ROUTES = {
   HOME: "/home",
   GUEST_PAGE: "/",
   EMPLOYER: "/employer",
   APPLICANT: "/applicant",
   VACANCIES: "/vacancies",
   VACANCY: "/vacancy",
   RESUMES: "/resumes",
   NEGOTIATIONS: "/negotiations",
   PROFILE: "/profile",
   ACCOUNT: "/account",
   ACCOUNT_DEFAULT: {
      path: "/account",
      query: { form: "role-select", role: "applicant" },
   },
}

export const ONLY_PUBLIC_PAGES = [ROUTES.ACCOUNT, ROUTES.GUEST_PAGE]

import { ROUTES } from "~/src/shared/model"
import type { AccountForms } from "./types"

const forms: AccountForms[] = ["sign-in", "sign-up", "role-select"]

export function useAccountFormOptions() {
   const route = useRoute()

   const form = computed(() => route.query.form as AccountForms)
   const role = computed(() => route.query.role as "applicant" | "employer")

   if (!form.value || !forms.includes(form.value)) {
      navigateTo({ path: "/account", query: { form: "role-select", role: "applicant" } })
   }

   onBeforeMount(() => {
      if (!role.value || (role.value !== "employer" && role.value !== "applicant")) {
         navigateTo(ROUTES.ACCOUNT_DEFAULT)
      }
   })

   return { form, role }
}

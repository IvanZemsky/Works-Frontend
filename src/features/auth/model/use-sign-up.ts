import { authService, type SignUpDTO } from "~/src/entities/auth"

export function useSignUp(role: "applicant" | "employer") {
   const dto = ref<SignUpDTO>({
      login: "",
      password: "",
      role: role,
      firstName: "",
      lastName: "",
      patronymic: "",
   })

   const authQuery = useAsyncData("auth", () => authService.signUp(dto.value), {
      immediate: false,
   })

   watchEffect(() => {
      if (authQuery.status.value === "success") {
         return navigateTo("/")
      }
   })

   const isPending = computed(
      () => authQuery.status.value === "pending" || authQuery.status.value === "success",
   )
   
   const register = authQuery.execute

   return { registerData: dto, isPending, register }
}

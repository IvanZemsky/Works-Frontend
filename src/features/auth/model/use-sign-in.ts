import { authService, type SignInDTO } from "~/src/entities/auth"

export function useSignIn() {
   const dto = ref<SignInDTO>({ login: "", password: "" })

   const authQuery = useAsyncData("auth", () => authService.signIn(dto.value), {
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

   const login = authQuery.execute

   return { loginData: dto, isPending, login }
}

export type SignInDTO = {
   login: string
   password: string
}

export type SignUpDTO = {
   firstName: string
   lastName: string
   patronymic: string
   login: string
   password: string
   role: "applicant" | "employer"
}
export type SignInDTO = {
   login: string
   password: string
}

export type SignUpDTO = {
   first_name: string
   last_name: string
   patronymic?: string
   login: string
   password: string
   role: "applicant" | "employer"
}
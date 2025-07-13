export type SignInDTO = {
   login: string
   password: string
}

export type SignUpDTO = {
   login: string
   password: string
   role: "applicant" | "employer"
}
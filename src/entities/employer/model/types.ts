export type Employer = {
  id: EmployerId
  name: string
  type: EmployerType
  description: string
  rating: number
  website: string
  location: string
}

export type EmployerId = string

export type EmployerType = "LLC" | "IE" | "JSC" | "other"

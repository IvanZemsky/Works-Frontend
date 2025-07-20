import type { Employer } from "@/src/entities/employer"

export type Vacancy = {
   id: VacancyId
   status: VacancyStatus
   title: string
   description: string
   employer: Pick<Employer, "id" | "name" | "rating">
   location: VacancyLocation
   date: Date
   schedule: string
   hoursPerDay: number
   address: {
      street?: string
      city?: string
      country?: string
      building?: string
   }
   salary: {
      min?: number
      max?: number
      period: VacancySalaryPeriod
   }
   skills: string[]
   experience: VacancyExperience
   contacts: VacancyContacts
}

export type VacancyId = string

export type VacancyLocation = "remote" | "on-site"

export type VacancyStatus = "open" | "closed" | "archived"

export type VacancySalaryPeriod = "year" | "month"

export type VacancyEducation = "none" | "high" | "secondary"

export type VacancyExperience = "none" | "1-3" | "3-6" | "6+"

export type VacancyExperienceType = "years" | "months"

export type VacancyContacts = {
   email?: string
   phone?: string
   name?: string
}

export type VacancyApplicationStatus =
   | "applied"
   | "invited"
   | "rejected"
   | "archived"
   | "company_blocked"
   | "employer_blocked"

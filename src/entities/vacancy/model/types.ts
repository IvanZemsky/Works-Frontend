import type { Company } from '@/entities/company'

export type Vacancy = {
  id: VacancyId
  status: VacancyStatus
  title: string
  description: string
  company: Company
  workLocation: string
  location: VacancyLocation
  date: Date
  salary: {
    min: number | null
    max: number | null
    period: VacancySalaryPeriod
  }
  requirements: {
    skills: string[]
    experience: VacancyExperience
  }
}

export type VacancyId = string

export type VacancyLocation = 'remote' | 'on-site'

export type VacancyStatus = 'open' | 'closed' | 'archived'

export type VacancySalaryPeriod = 'year' | 'month'

export type VacancyExperience = {
  min: number
  max: VacancyMaxExperience<VacancyExperience['min']>
  type: VacancyExperienceType | null
}

type VacancyMaxExperience<T> = T extends number ? number | null : T

export type VacancyExperienceType = 'years' | 'months'

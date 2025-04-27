import type { CompanyId } from '@/entities/company'

export type Vacancy = {
  id: VacancyId
  status: VacancyStatus
  title: string
  description: string
  companyId: CompanyId
  city: string
  location: VacancyLocation
  salary: {
    min: number
    max: number
    period: VacancySalaryPeriod
  }
  requirements: {
    skills: string[]
    experience: {
      min: number
      max: number
      type: VacancyExperienceType | null
    }
  }
}

export type VacancyId = string

export type VacancyLocation = 'remote' | 'on-site'

export type VacancyStatus = 'open' | 'closed' | 'archived'

export type VacancyExperienceType = 'years' | 'months'

export type VacancySalaryPeriod = 'year' | 'month'

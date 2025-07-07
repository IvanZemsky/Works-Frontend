import type { VacancyApplicationStatus } from "@/src/entities/vacancy"

export type ChatId = string

export type Chat = {
   id: ChatId
   name: string
   employer: string
   lastMessageDate: string
   applicationStatus: VacancyApplicationStatus
}
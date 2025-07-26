import type { AsyncData, NuxtError } from "#app"
import type { Vacancy } from "~/src/entities/vacancy"
import { useDynamicTitle } from "~/src/shared/lib"

export function useVacancyPageData(
   vacancyRequest: AsyncData<Vacancy | null, NuxtError<unknown> | null>,
) {
   const title = useDynamicTitle(vacancyRequest, (vacancy: Vacancy) => vacancy.title)

   useHead({
      title: title,
   })
}

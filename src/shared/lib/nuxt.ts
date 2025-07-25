import type { AsyncData, NuxtError } from "#app"

type Titles = {
   error: string
   pending: string
   idle: string
   notFound: string
}

const defaultTitles: Titles = {
   error: "Ошибка",
   pending: "Загрузка...",
   idle: "Загрузка...",
   notFound: "Ничего не найдено",
}

export function useDynamicTitle<
   T,
   F extends AsyncData<T | null, NuxtError<unknown> | null>,
>(
   dynamicData: F,
   callback: (data: T) => string,
   customTitles?: Titles,
): ComputedRef<string> {
   const titles = { ...defaultTitles, ...customTitles }

   const title = computed(() => {
      if (
         dynamicData.error.value?.statusCode === 404 ||
         dynamicData.data.value === null
      ) {
         return titles.notFound
      }

      if (dynamicData.data.value) {
         return callback(dynamicData.data.value)
      }
      return titles[dynamicData.status.value as keyof Titles]
   })

   return title
}

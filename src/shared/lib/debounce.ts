// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any) => any>(callback: T, timeout = 1000) {
   let timeoutId: NodeJS.Timeout | undefined
   return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => callback.apply(this, args), timeout)
   }
}

export function useDebouncedValue<T>(initial: T, timeout = 1000) {
   const internal = ref<T>(initial)
   const debounced = ref<T>(initial)

   watch(internal, () => {
      debounced.value = debounce(() => ((debounced.value = internal.value), timeout))
   })

   return [internal, debounced]
}

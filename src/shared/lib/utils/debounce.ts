// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any) => any>(callback: T, timeout = 1000) {
   let timeoutId: NodeJS.Timeout | undefined
   return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => callback.apply(this, args), timeout)
   }
}

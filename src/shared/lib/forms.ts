import { ref } from "vue"
import type { z, ZodObject, ZodRawShape } from "zod"

type FormErrors<T> = {
   [K in keyof T]?: string | null
}

export function useForm<T extends ZodRawShape>(schema: ZodObject<T>) {
   type FormValues = z.infer<typeof schema>

   const errors = ref<FormErrors<FormValues>>({})

   const handleSubmit = (callback: (data: FormValues) => void) => {
      return (e: Event) => {
         e.preventDefault()
         const values = getFormValues(e)
         if (validate(values)) {
            callback(values as FormValues)
         }
      }
   }

   const getFormValues = (event: Event): Record<string, unknown> => {
      const form = event.target as HTMLFormElement
      const formData = new FormData(form)
      const values: Record<string, unknown> = {}

      for (const [key, value] of formData.entries()) {
         values[key] = value
      }

      return values
   }

   const validate = (data: Record<string, unknown>): boolean => {
      const parsed = schema.safeParse(data)
      if (parsed.success) {
         errors.value = {}
         return true
      } else {
         console.log(parsed.error.issues)
         parsed.error.issues.forEach((issue) => {
            const field = issue.path[0] as keyof FormValues
            errors.value[field] = issue.message
         })
         return false
      }
   }

   return {
      errors,
      handleSubmit,
   }
}

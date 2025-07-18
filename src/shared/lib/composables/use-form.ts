type FormFieldsOptions = {
   min?: number
   max?: number
}

type FormErrors<T extends Record<string, unknown>> = {
   [K in keyof T]: string | null
}

export function useForm<T extends Record<string, unknown>>(
   formValues: T,
   fieldsOptions?: Record<keyof T, FormFieldsOptions>,
) {
   const fields = ref<T>(formValues)
   const errors = ref<FormErrors<T>>(getDefaultErrors(formValues))

  
}

function getDefaultErrors<T extends Record<string, unknown>>(
   formValues: T,
): FormErrors<T> {
   const errors = {} as FormErrors<T>
   for (const key in formValues) {
      errors[key] = null
   }
   return errors
}

import type { LocationQueryRaw } from "vue-router"

type Filters = Record<string, string | number | boolean | undefined | null | string[]>

export function parseFiltersToQueryParams(
   filters: Filters,
   rewriteNames?: Record<string, string>,
): LocationQueryRaw {
   const queryFilters: LocationQueryRaw = {}
   const rewriteNameKeys = Object.keys(rewriteNames || {})

   Object.entries(filters).forEach(([key, value]) => {
      let queryKey = key
      if (rewriteNames && rewriteNameKeys.includes(key)) {
         queryKey = rewriteNames[key]
      }

      if (value !== undefined && value !== null) {
         if (typeof value === "boolean" && value) {
            queryFilters[queryKey] = "yes"
            return
         }

         if (value instanceof Array && value.length > 0) {
            queryFilters[queryKey] = value.map((item) => item.toString()).join(",")
            return
         }

         queryFilters[queryKey] = String(value)
      }
   })

   return queryFilters
}

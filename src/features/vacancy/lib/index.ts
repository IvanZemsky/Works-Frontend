import { getExperienceString } from "./helpers/get-experience-string";
import { getSalaryString } from "./helpers/get-salary-string";
import { parseFiltersToQueryParams } from "./helpers/parse-filters-to-query-params";

export const vacancyFeatures = {
   getSalaryString,
   getExperienceString,
   parseFiltersToQueryParams,
}

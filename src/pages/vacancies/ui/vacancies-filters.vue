<script setup lang="ts">
import {
   UiCheck,
   UiInput,
   UiRadioGroup,
   UiRadioGroupItem,
   UiCheckGroup,
   UiCheckGroupItem,
} from "works-ui"
import { INCOME_FILTERS, EXPERIENCE_FILTERS, EDUCATION_FILTERS } from "../model/const"
import { watch } from "vue"
import type { VacancyEducation } from "~/src/entities/vacancy"

const income = ref<number | undefined>(undefined)
const isIncome = ref<boolean>(false)
const education = ref<VacancyEducation[]>(["none"])
const experience = ref<string>("none")

watch(income, () => {
   if (income.value) {
      isIncome.value = true
   }
})
</script>

<template>
   <ui-spacing vertical align="stretch">
      <ui-radio-group v-model="income" name="income" title="Уровень дохода" size="sm">
         <ui-radio-group-item
            v-for="INCOME in INCOME_FILTERS"
            :key="INCOME.id"
            v-bind="INCOME"
         />
      </ui-radio-group>

      <ui-input
         v-model="income"
         size="sm"
         type="number"
         min="0"
         max="10000000"
         placeholder="Своя зарплата"
      />
   </ui-spacing>

   <ui-check
      id="is-income"
      v-model="isIncome"
      name="is-income"
      size="sm"
      label="Указан доход"
   />

   <ui-check-group v-model="education" name="education" title="Образование" size="sm">
      <ui-check-group-item
         v-for="EDUCATION in EDUCATION_FILTERS"
         :key="EDUCATION.id"
         v-bind="EDUCATION"
      />
   </ui-check-group>

   <ui-radio-group v-model="experience" name="experience" title="Опыт работы" size="sm">
      <ui-radio-group-item v-for="EXP in EXPERIENCE_FILTERS" :key="EXP.id" v-bind="EXP" />
   </ui-radio-group>
</template>

<style scoped></style>

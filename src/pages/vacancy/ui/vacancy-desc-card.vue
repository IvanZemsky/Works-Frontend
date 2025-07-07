<script setup lang="ts">
import type { VacancyDescCardProps } from "../model/types";
import { vacancyFeatures } from "@/src/features/vacancy";
import { capitalize } from "@/src/shared/lib";
import { HeartOutlined, EyeOutlined } from "@vicons/antd";

defineProps<VacancyDescCardProps>();
</script>

<template>
   <ui-card>
      <ui-spacing vertical gap="sm">
         <h1 class="title">{{ data.title }}</h1>
         <p class="salary">
            {{ vacancyFeatures.getSalaryString($t, data.salary) }}
         </p>

         <ui-spacing class="description" vertical gap="sm">
            <p>
               Опыт работы:
               {{
                  vacancyFeatures.getExperienceString(
                     $t,
                     data.requirements.experience
                  )
               }}
            </p>
            <p>График: {{ data.schedule }}</p>
            <p>Рабочие часы: {{ data.hoursPerDay }}</p>
            <p>Формат работы: {{ $t(data.location) }}</p>
         </ui-spacing>

         <ui-spacing class="actions" align="center" gap="sm" fill>
            <ui-button class="action-btn" size="lg">
               {{ capitalize($t("apply")) }}
            </ui-button>
            <ui-button class="action-btn" size="lg" variant="light">
               {{ capitalize($t("contacts")) }}
            </ui-button>

            <ui-tooltip
               size="lg"
               :text="capitalize($t('addTo')) + ' ' + $t('favorites')"
               position="top"
            >
               <ui-button size="lg" variant="light">
                  <heart-outlined />
               </ui-button>
            </ui-tooltip>

            <ui-tooltip size="lg" :text="capitalize($t('hide'))" position="top">
               <ui-button size="lg" variant="light">
                  <eye-outlined />
               </ui-button>
            </ui-tooltip>
         </ui-spacing>
      </ui-spacing>
   </ui-card>
</template>

<style scoped>
.title {
   font-size: 1.6rem;
}
.salary {
   font-weight: 500;
}
.description {
   font-weight: 500;
   font-size: 0.85rem;
}
.actions {
   margin-top: 0.6rem;
}
.action-btn {
   font-size: 1rem;
   padding: 0.8rem;
   flex-grow: 1;
}
</style>

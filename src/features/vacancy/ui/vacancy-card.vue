<script setup lang="ts">
import { vacancyFeatures } from "../lib";
import { EyeOutlined, StarFilled, HeartOutlined } from "@vicons/antd";
import type { Vacancy } from "@/src/entities/vacancy";
import type { RouteLocationRaw } from "vue-router";
import { IconBtn } from "@/src/shared/ui";
import { capitalize } from "~/src/shared/lib";

type VacancyCardProps = {
   data: Vacancy;
   link: RouteLocationRaw;
   showDesc?: boolean;
};

withDefaults(defineProps<VacancyCardProps>(), {
   showDesc: false,
});
</script>

<template>
   <NuxtLink :to="link">
      <ui-card hoverable>
         <ui-spacing vertical>
            <ui-spacing fill vertical gap="sm">
               <ui-spacing fill align="center" justify="space-between">
                  <p class="title">
                     {{ data.title }}
                  </p>
                  <ui-spacing class="actions" align="center">
                     <ui-tooltip :text="capitalize($t('hide'))" position="top">
                        <icon-btn class="action-btn" @click.prevent="">
                           <eye-outlined />
                        </icon-btn>
                     </ui-tooltip>
                     <ui-tooltip
                        :text="capitalize($t('addTo')) + ' ' + $t('favorites')"
                        position="top"
                     >
                        <icon-btn class="action-btn" @click.prevent="">
                           <heart-outlined />
                        </icon-btn>
                     </ui-tooltip>
                  </ui-spacing>
               </ui-spacing>

               <ui-spacing align="center" gap="sm">
                  <p class="salary">
                     {{ vacancyFeatures.getSalaryString($t, data.salary) }}
                  </p>
                  <ui-chip size="sm" color="neutral">
                     {{ capitalize($t("experience")) }}
                     {{
                        vacancyFeatures.getExperienceString(
                           $t,
                           data.requirements.experience
                        )
                     }}
                  </ui-chip>
                  <ui-chip size="sm" color="neutral">
                     {{ capitalize($t("remote")) }}
                  </ui-chip>
               </ui-spacing>
            </ui-spacing>

            <ui-spacing vertical :gap="[6, 6]">
               <ui-link
                  as="nuxt-link"
                  :to="`/employers/${data.employer.id}`"
                  color="secondary"
                  hover="fade-light"
                  size="sm"
                  weight="500"
                  @click.prevent=""
               >
                  {{ data.employer.name }}
               </ui-link>
               <ui-spacing class="rating" align="center" :gap="[3, 3]">
                  <star-filled />
                  <span>{{ data.employer.rating }}</span>
               </ui-spacing>
               <p class="location">{{ data.address.city }}</p>
            </ui-spacing>

            <p v-if="showDesc" class="description">
               {{ data.description }}
            </p>

            <ui-spacing gap="sm">
               <ui-button
                  class="apply-btn"
                  size="sm"
                  weight="500"
                  @click.prevent=""
               >
                  {{ capitalize($t("apply")) }}
               </ui-button>
               <ui-button
                  class="contacts-btn"
                  size="sm"
                  weight="500"
                  variant="light"
                  @click.prevent=""
               >
                  {{ capitalize($t("contacts")) }}
               </ui-button>
            </ui-spacing>
         </ui-spacing>
      </ui-card>
   </NuxtLink>
</template>

<style scoped>
.title {
   color: var(--secondary-main);
   font-weight: 600;
   font-size: 1.2rem;
   opacity: 1;
   transition: opacity 0.15s linear;
}
.title:hover {
   opacity: 0.7;
}
.salary {
   font-weight: 500;
}
.location {
   font-size: 0.9rem;
}
.description {
   font-size: 0.8rem;
}
.rating {
   font-size: 0.8rem;
}
.rating svg {
   color: rgb(255, 200, 0);
   height: 21px;
}
.action-btn {
   width: 1.6rem;
   color: var(--secondary-light);
}
.apply-btn,
.contacts-btn {
   padding: 14px;
}
</style>

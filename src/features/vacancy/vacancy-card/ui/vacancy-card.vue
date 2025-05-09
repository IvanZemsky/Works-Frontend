<script setup lang="ts">
import { UiCard, UiSpacing, UiLink, UiButton, UiChip, UiTooltip } from 'works-ui'
import type { VacancyCardProps } from '../model/types'
import { getSalaryString, getExperienceString } from '../lib'
import { EyeOutlined, StarFilled, HeartOutlined } from '@vicons/antd'
import { capitalize } from 'vue'

withDefaults(defineProps<VacancyCardProps>(), {
  showDesc: false,
})
</script>

<template>
  <router-link to="#">
    <ui-card hoverable>
      <ui-spacing vertical>
        <ui-spacing fill vertical gap="sm">
          <ui-spacing fill align="center" justify="space-between">
            <ui-link to="#" class="title" weight="600" color="secondary" hover="fade-light">
              {{ data.title }}
            </ui-link>
            <ui-spacing align="center">
              <ui-tooltip :text="capitalize($t('hide'))" position="top">
                <eye-outlined class="action-btn" />
              </ui-tooltip>
              <ui-tooltip :text="capitalize($t('addTo')) + ' ' + $t('favorites')" position="top">
                <heart-outlined class="action-btn" />
              </ui-tooltip>
            </ui-spacing>
          </ui-spacing>

          <ui-spacing align="center" gap="sm">
            <p class="salary">{{ getSalaryString(data.salary) }}</p>
            <ui-chip size="sm" color="neutral">
              {{ capitalize($t('experience')) }}
              {{ getExperienceString(data.requirements.experience) }}
            </ui-chip>
            <ui-chip size="sm" color="neutral">
              {{ capitalize($t('remote')) }}
            </ui-chip>
          </ui-spacing>
        </ui-spacing>

        <ui-spacing vertical :gap="[6, 6]">
          <ui-link to="#" color="secondary" hover="fade-light" size="sm" weight="500">
            {{ data.company.name }}
          </ui-link>
          <ui-spacing class="rating" align="center" :gap="[3, 3]">
            <star-filled />
            <span>{{ data.company.rating }}</span>
          </ui-spacing>
          <p class="location">{{ data.workLocation }}</p>
        </ui-spacing>

        <p v-if="showDesc" class="description">
          {{ data.description }}
        </p>

        <ui-button class="applyBtn" size="sm">{{ capitalize($t('apply')) }}</ui-button>
      </ui-spacing>
    </ui-card>
  </router-link>
</template>

<style scoped>
.title {
  font-size: 1.2rem;
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
  width: 21px;
}
.action-btn {
  width: 36px;
  color: var(--secondary-light);
}
.applyBtn {
  padding: 14px;
}
</style>

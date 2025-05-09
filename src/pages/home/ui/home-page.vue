<script setup lang="ts">
import { UiButton, UiWrapper, UiSpacing, UiInput } from 'works-ui'
import { SearchOutlined } from '@vicons/antd'
import InteractionCard from './interaction-card.vue'
import LiftResumeCard from './lift-resume-card.vue'
import VacancyCard from '@/features/vacancy/vacancy-card/ui/vacancy-card.vue'
import type { Vacancy } from '@/entities/vacancy'

const vacancy: Vacancy = {
  id: '1',
  title: 'Разработчик',
  description:
    'Разработка торгового терминала, торгового графика. Реализовывать realtime обновления, используя websocket api. Разрабатывать API для мобильного и веб клиента..',
  status: 'open',
  company: {
    id: '1',
    name: 'Google',
    description: 'Google',
    rating: 4.9,
  },
  workLocation: 'Москва',
  location: 'remote',
  salary: {
    min: 100000,
    max: 200000,
    period: 'year',
  },
  requirements: {
    skills: ['React', 'Vue'],
    experience: {
      min: 1.5,
      max: null,
      type: 'years',
    },
  },
  date: new Date(),
}
</script>

<template>
  <ui-wrapper>
    <ui-spacing fill vertical gap="lg">
      <ui-spacing fill>
        <ui-input placeholder="Профессия, должность или компания" class="input">
          <template #icon><search-outlined /></template>
        </ui-input>
        <ui-button class="searchBtn">Найти</ui-button>
      </ui-spacing>

      <ui-spacing class="columns" gap="md">
        <ui-spacing class="actions-column" vertical>
          <InteractionCard class="action-card"/>
          <LiftResumeCard class="action-card"/>
        </ui-spacing>

        <ui-spacing vertical>
          <ui-spacing gap="sm">
            <ui-button color="secondary">Для вас</ui-button>
            <ui-button color="secondary" variant="light" hover="light">Подработка</ui-button>
            <ui-button color="secondary" variant="light">От 16 лет</ui-button>
            <ui-button color="secondary" variant="light">Удалённая работа</ui-button>
            <ui-button color="secondary" variant="light">Стажировка</ui-button>
          </ui-spacing>

          <VacancyCard :data="vacancy" class="vacancy-card" show-desc />
        </ui-spacing>
      </ui-spacing>
    </ui-spacing>
  </ui-wrapper>
</template>

<style scoped>
.input {
  flex-grow: 1;
}
.actions-column {
  position: sticky;
  top: 20px;
  left: 0;
  min-width: 300px;
}
.action-card{
  width: 100%;
}
.searchBtn {
  max-width: 200px;
  width: 100%;
  height: 100%;
}
.vacancy-card {
  width: 100%;
}
</style>

<script setup lang="ts">
import { UiButton, UiWrapper, UiSpacing, UiInput } from 'works-ui'
import { SearchOutlined } from '@vicons/antd'
</script>

<template>
  <ui-wrapper>
    <ui-spacing class="inputWrap">
      <ui-input placeholder="Профессия, должность или компания">
        <template #icon><search-outlined /></template>
      </ui-input>
      <ui-button class="searchBtn">Найти</ui-button>
    </ui-spacing>
  </ui-wrapper>
</template>

<style scoped>
.inputWrap {
  width: 100%;
}
.inputWrap .ui-input{
  flex-grow: 1;
}
.searchBtn {
  max-width: 200px;
  width: 100%;
}
</style>

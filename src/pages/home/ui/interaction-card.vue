<script lang="ts" setup>
import { EnvelopeIcon } from '@/src/shared/ui/icons'
</script>

<template>
  <ui-card>
    <ui-spacing vertical gap="lg">
      <ui-link class="link" to="/applicant/negotiations" color="secondary">
        <ui-spacing align="center" gap="sm" class="interaction">
          <envelope-icon class="icon" />
          <span class="label">Отклики и приглашения</span>
          <span class="count">123</span>
        </ui-spacing>
      </ui-link>
      <ui-link class="link" to="/applicant/negotiations" color="secondary">
        <ui-spacing align="center" gap="sm" class="interaction">
          <envelope-icon class="icon" />
          <span class="label">Просмотры резюме</span>
          <span class="count">123</span>
        </ui-spacing>
      </ui-link>
      <ui-link class="link" to="/applicant/negotiations" color="secondary">
        <ui-spacing align="center" gap="sm" class="interaction">
          <envelope-icon class="icon" />
          <span class="label">Избранные вакансии</span>
          <span class="count">1</span>
        </ui-spacing>
      </ui-link>
    </ui-spacing>
  </ui-card>
</template>

<style scoped>
.link{
  display: block;
  width: 100%;
}
.link:hover{
  text-decoration: none;
}
.interaction {
  font-size: 0.8rem;
}
.interaction svg{
  color: var(--secondary-light);
}
.icon {
  width: 1.3rem;
  flex-shrink: 0;
}
.count {
  margin-left: auto;
  color: var(--secondary-main);
  font-size: 0.9rem;
}
</style>

<script setup lang="ts">
import NavLink from '@/shared/ui/nav-link.vue'
import WLogo from '@/shared/ui/w-logo.vue'
import { UiWrapper, UiSpacing, UiButton } from 'works-ui'
</script>

<template>
  <header class="header">
    <ui-wrapper>
      <ui-spacing class="content" align="center" justify="space-between" gap="md">
        <nav class="navigation">
          <ui-spacing align="center" gap="md">
            <WLogo />

            <ui-spacing align="center" gap="sm">
              <nav-link to="/applicant/resumes" color="secondary" size="sm">Мои резюме</nav-link>
              <nav-link to="/applicant/negotiations" color="secondary" size="sm">Отклики</nav-link>
            </ui-spacing>
          </ui-spacing>
        </nav>

        <ui-spacing align="center" gap="md">
          <ui-button class="createResumeLink" as="router-link" to="/" size="sm" color="secondary">
            Создать резюме
          </ui-button>
        </ui-spacing>
      </ui-spacing>
    </ui-wrapper>
  </header>
</template>

<style scoped>
.header {
  padding: 15px 0;
  background-color: var(--secondary-main);
}
.content {
  width: 100%;
}
.ui-button.createResumeLink {
  background-color: #343c43;
}
</style>

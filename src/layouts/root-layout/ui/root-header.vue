<script setup lang="ts">
import NavLink from '@/shared/ui/nav-link.vue'
import WLogo from '@/shared/ui/w-logo.vue'
import { MessageOutlined } from '@vicons/antd'
import { UiWrapper, UiSpacing, UiButton } from 'works-ui'
</script>

<template>
  <header class="header">
    <ui-wrapper>
      <ui-spacing align="center" justify="space-between" gap="md" fill>
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
          <ui-button class="messageBtn" size="md" color="secondary" variant="ghost">
            <message-outlined />
          </ui-button>
          <ui-button
            class="createResumeLink"
            as="router-link"
            to="/"
            size="md"
            color="secondary"
            variant="light"
          >
            Создать резюме
          </ui-button>
        </ui-spacing>
      </ui-spacing>
    </ui-wrapper>
  </header>
</template>

<style scoped>
.header {
  padding: 0.7rem 0;
  background-color: var(--secondary-main);
}

.ui-button.createResumeLink {
  background-color: #343c43;
  font-size: 0.8rem;
  color: var(--secondary-contrast);
  border-color: #343c43;
}

.ui-button.createResumeLink:hover {
  background-color: #47525b;
  border-color: #47525b;
}

</style>

<script setup lang="ts">
import WLogo from '@/src/shared/ui/w-logo.vue'
</script>

<template>
  <header class="header">
    <ui-wrapper>
      <ui-spacing align="center" justify="space-between" gap="md" fill>
        <nav class="navigation">
          <ui-spacing align="center" gap="md">
            <WLogo />

            
          </ui-spacing>
        </nav>

        <ui-spacing align="center" gap="md">
          
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

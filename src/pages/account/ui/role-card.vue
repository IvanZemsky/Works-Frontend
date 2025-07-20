<script setup lang="ts">
import UserOutlined from "@vicons/antd/UserOutlined"
import { useAccountForm } from "../lib/use-account-form"

defineProps<{ title: string; desc: string; role: "applicant" | "employer" }>()

const { role: currentRole } = useAccountForm()
</script>

<template>
   <ui-card
      :class="['profile-role-card', { active: currentRole === role }]"
      as="button"
      hoverable
      @click="navigateTo({ path: '/account', query: { role, form: 'role-select' } })"
   >
      <ui-spacing align="center" :gap="[10]">
         <div class="profile-role-card-icon">
            <user-outlined />
         </div>
         <ui-spacing vertical :gap="[5]">
            <p class="profile-role-card-title">{{ title }}</p>
            <p class="profile-role-card-desc">{{ desc }}</p>
         </ui-spacing>
      </ui-spacing>
   </ui-card>
</template>

<style scoped>
.profile-role-card {
   transition: all 0.15s linear;
}
.profile-role-card.active {
   border-color: var(--primary-main);
}
.profile-role-card-icon {
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: var(--secondary-extra-light);
   width: 2.5rem;
   height: 2.5rem;
   padding: 0.4rem;
}
.profile-role-card-title {
   font-size: 0.9rem;
}
.profile-role-card-desc {
   font-size: 0.8rem;
   color: var(--secondary-light);
}
</style>

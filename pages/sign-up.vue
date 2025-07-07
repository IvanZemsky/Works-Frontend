<script setup lang="ts">
import {capitalize} from "@/src/shared/lib";
</script>

<template>
  <ui-wrapper class="wrapper">
    <ui-card class="form-card">
      <form>
        <ui-spacing vertical>
          <h1 class="title">{{ capitalize($t('registration')) }}</h1>
          <ui-input placeholder="Email" name="email" />
          <ui-input :placeholder="$t('authPages.password')" name="password" type="password" />
          <ui-button class="submit-btn" size="lg" type="submit">{{ $t('authPages.signUp') }}</ui-button>
          <p>
            {{ $t('authPages.haveAccountMsg') }}
            <ui-link to="/sign-in">{{ $t('authPages.authMsg') }}</ui-link>
          </p>
        </ui-spacing>
      </form>
    </ui-card>
  </ui-wrapper>
</template>

<style scoped>
.wrapper{
  min-height: 100vh;
}
.form-card {
  align-self: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
.form-card .ui-input {
  width: 100%;
}
.title {
  font-size: 1.2rem;
  font-weight: 500;
}
.submit-btn {
  width: 100%;
}
</style>

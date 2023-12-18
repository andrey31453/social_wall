<script setup lang="ts">
import { the_wrapper } from '@ui'
</script>

<template>
  <div class="app_wrapper">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use '@styles/utils';

.app_wrapper {
  @include utils.font();

  min-height: 100vh;
}
</style>

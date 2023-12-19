<script setup lang="ts">
import { the_wrapper, the_background } from '@ui'
</script>

<template>
  <the_background
    class="app_header"
    variant="contrast"
  >
    <v-container>
      <the_wrapper end>
        <slot />
      </the_wrapper>
    </v-container>
  </the_background>
</template>

<style scoped lang="scss">
.app_header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>

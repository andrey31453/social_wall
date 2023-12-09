<script setup>
import { ui_wrapper, ui_image } from '@ui'
</script>

<template>
  <ui_wrapper
    container
    horizontal
    end
    padding="3"
    class="substrate"
  >
    <ui_image
      class="substrate__image"
      :image="{ image: '/assets/icons/logo.svg' }"
    />
  </ui_wrapper>
</template>

<style lang="scss" scoped>
@use '@styles/vars';

.substrate {
  padding-right: calc(3 * vars.$d) !important;

  &__image {
    width: 100px;
  }
}
</style>

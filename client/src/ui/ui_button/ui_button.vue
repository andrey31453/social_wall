<script setup>
import { keys } from '@consts'

const props = defineProps({
  variant: {
    type: String,
    default: 'fill',
  },
})

import ui_icon from '../ui_icon/ui_icon'
</script>

<template>
  <button :class="['ui_button', `--${variant}`]">
    <span>
      <slot />
    </span>

    <template v-if="variant === 'fill'">
      <ui_icon
        icon="chevron_right"
        size="14"
      />
    </template>
  </button>
</template>

<style lang="scss" scoped>
@use '@styles/vars';
@use '@styles/utils';

%hover {
  background-color: vars.$dc;
  color: vars.$bc;
}

.ui_button {
  @include utils.animation();

  width: vars.$button_width;
  height: vars.$button_height;

  padding: 0 vars.$button_padding;
  cursor: pointer;

  // fill
  &.--fill {
    @include utils.f();

    background-color: vars.$bc;

    &:hover {
      @extend %hover;
    }
  }

  // outline
  &.--outline {
    @include utils.f(0, 'jc');

    border-width: vars.$button_border_width;
    border-style: solid;
    border-color: vars.$dc;

    &:hover {
      @extend %hover;
    }
  }
}
</style>

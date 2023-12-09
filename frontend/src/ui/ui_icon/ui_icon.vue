<script setup>
import { icons } from './assets'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },

  size: {
    type: String,
  },

  variant: {
    type: String,
    default: 'current',
  },
})

const svg = icons[props.icon]
const css_size = `${props.size}px`
</script>

<template>
  <template v-if="svg">
    <div
      v-html="svg"
      :class="['ui_icon', `--${variant}`]"
    />
  </template>
</template>

<style lang="scss" scoped>
@use '@styles/utils';
@use '@styles/classes';

.ui_icon {
  @include utils.size(v-bind(css_size), 'min');
  @include utils.f(0, 'c');

  & > :deep(svg) {
    @include utils.size(v-bind(css_size));
  }

  // variants
  &.--default > :deep(svg) {
    @include classes.svg('default');
  }
  &.--alter > :deep(svg) {
    @include classes.svg('alter');
  }
  &.--font > :deep(svg) {
    @include classes.svg('font');
  }
  &.--background > :deep(svg) {
    @include classes.svg('background');
  }
  &.--current > :deep(svg) {
    @include classes.svg('current');
  }
}
</style>

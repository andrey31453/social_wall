<script setup>
const props = defineProps({
  center: {
    type: Boolean,
    default: false,
  },

  end: {
    type: Boolean,
    default: false,
  },

  container: {
    type: Boolean,
    default: false,
  },

  horizontal: {
    type: Boolean,
    default: false,
  },

  fluid: {
    type: Boolean,
    default: false,
  },

  original: {
    type: Boolean,
    default: false,
  },

  padding: {
    type: [Boolean, String],
    default: false,
  },

  gap: {
    type: String,
    default: '1',
  },
})
</script>

<template>
  <div
    :class="[
      'ui_wrapper',
      {
        '--center': center,
        '--end': end,
        '--horizontal': horizontal,
        '--original': original,
        '--fluid': fluid,
        '--container': container,
        '--padding': padding,
      },
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_wrapper {
  // direction
  &:not(.--horizontal) {
    @include utils.f(v-bind(gap), 'col');

    &:not(.--original) > :deep(*) {
      width: 100%;
    }
  }
  &.--horizontal {
    @include utils.f(v-bind(gap));
  }

  // modifiers
  &.--center {
    @include utils.f(v-bind(gap), 'jc');
  }
  &.--end {
    @include utils.f(v-bind(gap), 'je');
  }

  // container
  &.--container {
    @include utils.container();
  }

  &.--fluid {
    height: 100%;
  }

  // padding
  &.--padding {
    @include utils.padding(v-bind(padding));
  }
}
</style>

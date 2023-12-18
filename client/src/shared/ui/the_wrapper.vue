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

  horizontal: {
    type: Boolean,
    default: false,
  },

  fluid: {
    type: Boolean,
    default: false,
  },

  p: {
    type: Boolean,
    default: false,
  },

  px: {
    type: Boolean,
    default: false,
  },

  py: {
    type: Boolean,
    default: false,
  },

  gap: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    :class="[
      'the_wrapper',
      'd-flex justify-start align-center ga-2',
      {
        'justify-center': center,
        'justify-end': end,
        'flex-column': horizontal,
        'h-100': fluid,
        'pa-2': p,
        'px-2': px,
        'py-2': py,
        'ga-3': gap,
      },
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss">
@use '@styles/utils';

.app_record {
  @include utils.font('mark');
}
</style>

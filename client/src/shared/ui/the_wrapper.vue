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

  column: {
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

// flex rules
const get_justify = (center, end, column) => {
  if (column) return ''
  if (center) return `justify-center`
  if (end) return `justify-end`

  return `justify-start`
}

const get_align = (center, end, column) => {
  if (column) return ''

  return `align-center`
}

const justify_class = get_justify(props.center, props.end, props.column)

const align_class = get_align(props.center, props.end, props.column)
</script>

<template>
  <div
    :class="[
      'the_wrapper',
      'd-flex ga-2',
      justify_class,
      align_class,
      {
        'justify-center': center,
        'justify-end': end,
        'flex-column': column,
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

<script setup>
const props = defineProps({
  between: {
    type: Boolean,
    default: false,
  },

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
const get_justify = ({ between, center, end, column }) => {
  if (column) return ''
  if (between) return `justify-space-between`
  if (center) return `justify-center`
  if (end) return `justify-end`

  return `justify-start`
}

const get_align = ({ center, end, column }) => {
  if (column) return ''

  return `align-center`
}

const justify_class = get_justify({
  between: props.between,
  center: props.center,
  end: props.end,
  column: props.column,
})

const align_class = get_align({
  center: props.center,
  end: props.end,
  column: props.column,
})
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
  width: 100%;
  @include utils.font('mark');
}
</style>

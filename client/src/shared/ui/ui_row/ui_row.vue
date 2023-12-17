<script setup>
import { use_breakpoint_props } from '@composables'
import { vars } from '@consts'

const props = defineProps({
  xs: {
    type: String,
    default: vars.cols,
  },

  sm: {
    type: String,
  },

  md: {
    type: String,
  },

  lg: {
    type: String,
  },

  xl: {
    type: String,
  },

  xxl: {
    type: String,
  },

  gap: {
    type: String,
    default: '1',
  },
})

const { xs, sm, md, lg, xl, xxl } = use_breakpoint_props(props)
</script>

<template>
  <div class="ui_row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_row {
  @include utils.row(
    v-bind(gap),
    v-bind(xs),
    v-bind(sm),
    v-bind(md),
    v-bind(lg),
    v-bind(xl),
    v-bind(xxl)
  );
}
</style>

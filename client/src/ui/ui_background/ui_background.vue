<script setup>
import { vars } from '@consts'
import { use_color_style, use_background_style } from './composables'
import { use_car_store } from '@store'

const props = defineProps({
  color: {
    type: [Boolean, String],
    default: false,
  },

  background: {
    type: [Boolean, String],
    default: false,
  },

  size: {
    type: String,
    default: vars.background_size,
  },

  repeat: {
    type: String,
    default: vars.background_repeat,
  },

  position: {
    type: String,
    default: vars.background_position,
  },
})

const color_style = use_color_style(props.color)

const car_store = use_car_store()
const background_style = use_background_style(
  props.background,
  car_store.current_model
)
</script>

<template>
  <div
    class="ui_background"
    :style="color_style || background_style"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui_background {
  width: 100%;
  height: 100%;

  background-size: v-bind(size);
  background-position: v-bind(position);
  background-repeat: v-bind(repeat);
}
</style>

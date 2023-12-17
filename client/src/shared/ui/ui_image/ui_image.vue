<script setup>
import { keys } from '@consts'

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },

  domain: {
    type: [Boolean, String],
    default: false,
  },
})

// image props
const src = props.domain
  ? `${props.domain}${props.image[keys.src]}`
  : props.image[keys.src]
const alt = props.image[keys.alt]
</script>

<template>
  <div class="ui_image">
    <img
      class="ui_image__img"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.ui_image {
  @include utils.size(100%, 'max');

  &__img {
    @include utils.size(100%, 'max');
  }
}
</style>

<script setup>
import { use_render } from './composables'

const props = defineProps({
  h1: {
    type: Boolean,
    default: false,
  },

  h2: {
    type: Boolean,
    default: false,
  },

  h3: {
    type: Boolean,
    default: true,
  },

  highlight: {
    type: Boolean,
    default: false,
  },
})

const render = use_render(props)
</script>

<template>
  <render
    :class="[
      'ui_h',
      {
        '--highlight': highlight,
      },
    ]"
  />
</template>

<style lang="scss" scoped>
@use '@styles/utils';
@use '@styles/vars';

.ui_h {
  h1:is(&) {
    @include utils.font('h1');
  }
  h2:is(&) {
    @include utils.font('h2');
  }
  h3:is(&) {
    @include utils.font('h3');
  }

  &.--highlight {
    padding-top: calc(2 * vars.$d);

    :deep(span:first-child) {
      @include utils.before();

      &::before {
        height: 4px;
        background-color: vars.$dc;

        top: calc(2 * vars.$dN);
      }
    }
  }
}
</style>

<script setup>
import { ref } from 'vue'

import { use_breakpoint_props } from '@composables'
import { banner_breakpoint_props } from './assets'

// banner_sizes

const banner_breakpoints = use_breakpoint_props(banner_breakpoint_props)

const banner_height = ref(null)
const banner_content_height = ref(null)

const on_breakpoint = (b) => {
  banner_height.value = banner_breakpoints[b].height
  banner_content_height.value = banner_breakpoints[b].content_height
}

//

import { vBreakpoint } from '@directives'
import { b_overlay, b_substrate, b_content, b_image } from './components'
</script>

<template>
  <div
    class="banner"
    v-breakpoint:init="on_breakpoint"
  >
    <b_overlay class="banner__overlay" />
    <b_content class="banner__content" />
    <b_substrate class="banner__substrate" />
    <b_image class="banner__image" />
  </div>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.banner {
  @include utils.z(0);

  &__overlay {
    @include utils.z(1);
    height: v-bind(banner_height);
  }

  &__content {
    @include utils.absolute(4);

    top: v-bind(banner_content_height);
  }

  &__substrate {
    @include utils.z(3);
  }

  &__image {
    @include utils.absolute(2);
  }
}
</style>

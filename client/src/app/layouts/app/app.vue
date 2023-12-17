<script setup>
import { storeToRefs } from 'pinia'

import { use_title, use_vars, use_resize } from '@composables'
import { vars } from '@consts'
import { use_app_store } from '@store'

use_title()
use_vars(vars)
use_resize()

const app_store = use_app_store()
const { window_width, breakpoint } = storeToRefs(app_store)

// template

import { ui_wrapper } from '@ui'
</script>

<template>
  <ui_wrapper
    class="app_wrapper"
    gap="2"
    :data-window_width="window_width"
    :data-breakpoint="breakpoint"
  >
    <template v-if="app_store.breakpoint">
      <slot />
    </template>
  </ui_wrapper>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.app_wrapper {
  @include utils.font();

  min-height: 100vh;
}
</style>

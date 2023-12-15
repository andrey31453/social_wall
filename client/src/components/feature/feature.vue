<script setup>
import { keys } from '@consts'

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },

  domain: {
    type: String,
    required: true,
  },
})

import { vOverflow } from '@directives'
import { ui_wrapper, ui_image } from '@ui'
</script>

<template>
  <ui_wrapper gap="3">
    <div v-overflow:init="1.92">
      <ui_image
        :image="feature"
        :domain="feature[keys.domain] || domain"
      />
    </div>

    <span>
      {{ feature.description }}
    </span>
  </ui_wrapper>
</template>

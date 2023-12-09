<script setup>
import { keys } from '@consts'

const props = defineProps({
  benefit: {
    type: Object,
    required: true,
    validate: (b) => b.image && b.title && b.text,
  },
})

//

import { vMark, vTextCenter } from '@directives'
import { ui_wrapper, ui_h, ui_icon } from '@ui'
</script>

<template>
  <ui_wrapper
    gap="3"
    center
    original
    v-text-center
  >
    <ui_icon
      :icon="benefit[keys.src]"
      variant="default"
      size="177"
    />

    <ui_h>
      {{ benefit.title }}
    </ui_h>

    <div v-mark>
      {{ benefit.text }}
    </div>
  </ui_wrapper>
</template>

<style lang="scss" scoped>
.benefit {
  text-align: center;
}
</style>

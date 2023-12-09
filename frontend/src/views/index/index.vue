<script setup>
import { banner, benefits, features } from '@components'
import { ui_async } from '@ui'
</script>

<template>
  <banner />
  <benefits />

  <ui_async>
    <features />
  </ui_async>
</template>

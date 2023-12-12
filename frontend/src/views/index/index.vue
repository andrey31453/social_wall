<script setup>
import { banner, benefits, features } from '@components'
import { ui_async } from '@ui'
import { onMounted } from 'vue'

const test = async () => {
  const data = await fetch('/api')
  console.log('data: ', data)
}
onMounted(test)
</script>

<template>
  <banner />
  <benefits />
  <ui_async>
    <features />
  </ui_async>
</template>

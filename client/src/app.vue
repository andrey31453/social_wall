<script setup>
import { app } from '@layouts'
import { index } from '@views'

import { onMounted } from 'vue'

const test = async () => {
  const data = await fetch('/api/message').then((d) => d.json())
  console.log('data: ', data)
}
onMounted(test)
</script>

<template>
  <app>
    <index />
  </app>
</template>

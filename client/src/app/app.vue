<script setup lang="ts">
import { onMounted } from 'vue'

const test = async () => {
  const data = await fetch('/api/message').then((d) => d.json())
  console.log('data: ', data)
}
onMounted(test)
const msg: string = 'fsfsfsfsds'
</script>

<template>
  <div>
    {{ msg }}
    test
    <!-- <index /> -->
  </div>
</template>

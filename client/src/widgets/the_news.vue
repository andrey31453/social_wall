<script setup lang="ts">
import { use_message_store } from '@store'
import { storeToRefs } from 'pinia'

const message_store = use_message_store()
const { messages } = storeToRefs(message_store)
</script>

<template>
  <div v-for="message in messages">
    {{ message.message }}
  </div>
</template>

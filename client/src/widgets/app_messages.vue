<script setup lang="ts">
import { use_message_store } from '@store'
import { storeToRefs } from 'pinia'

const message_store = use_message_store()
const { extend_messages } = storeToRefs(message_store)

import { the_message } from '@widgets'
</script>

<template>
  <template v-for="message in extend_messages">
    <the_message :data="message" />
  </template>
</template>

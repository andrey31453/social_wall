<script setup lang="ts">
import { use_message_store } from '@store'
import { storeToRefs } from 'pinia'

const message_store = use_message_store()
const { extend_messages, news_reactive_key } = storeToRefs(message_store)

import { the_message } from '@widgets'
import { the_wrapper } from '@ui'
</script>

<template>
  <the_wrapper
    column
    :key="news_reactive_key"
  >
    <template v-for="message in extend_messages">
      <the_message :data="message" />
    </template>
  </the_wrapper>
</template>

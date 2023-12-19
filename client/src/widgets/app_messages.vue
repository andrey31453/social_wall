<script setup lang="ts">
import { use_message_store } from '@store'
import { storeToRefs } from 'pinia'

const message_store = use_message_store()
const { extend_messages } = storeToRefs(message_store)

import { the_message } from '@widgets'
import { the_wrapper } from '@ui'
</script>

<template>
  <the_wrapper column>
    <template v-for="message in extend_messages">
      <the_message :data="message" />
    </template>
  </the_wrapper>
</template>

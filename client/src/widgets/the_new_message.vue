<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  reply_to: {
    type: String,
    default: '',
  },

  level: {
    type: Number,
    default: 0,
  },

  clear: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['close'])

// message value

import { create_message } from '@api'
import { delay } from '@libs'
import { use_user_store, use_message_store } from '@store'
import { storeToRefs } from 'pinia'

const user_store = use_user_store()
const message_store = use_message_store()
const { current_user } = storeToRefs(user_store)

const message_value = ref('')

const clear_new_message = () => {
  message_value.value = ''
}
const on_close = () => {
  emits('close')
}

const on_submit = async () => {
  create_message({
    author: current_user.value,
    message: message_value.value,
    level: props.level,
    reply_to: props.reply_to,
  })
  clear_new_message()
  on_close()
  await delay(300)
  message_store.init()
}

// components

import { the_btn, the_wrapper } from '@ui'
</script>

<template>
  <v-text-field
    class="ma-3"
    v-model="message_value"
    placeholder="Текст сообщения"
    variant="underlined"
    @keydown.enter="on_submit"
  />

  <the_wrapper end>
    <template v-if="clear">
      <the_btn @click="clear_new_message">очистить</the_btn>
    </template>

    <template v-else>
      <the_btn @click="on_close">отменить</the_btn>
    </template>

    <the_btn
      submit
      @click="on_submit"
    >
      отправить
    </the_btn>
  </the_wrapper>
</template>

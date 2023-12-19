<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  reply_to: {
    type: String,
  },
})
defineEmits(['close'])

const message_value = ref('')

const on_submit = () => {
  console.log(message_value.value)
}

import { the_btn, the_wrapper } from '@ui'
</script>

<template>
  <v-text-field
    v-model="message_value"
    placeholder="Текст сообщения"
    variant="underlined"
  />

  <the_wrapper end>
    <the_btn @click="$emit('close')">отменить</the_btn>
    <the_btn
      variant="submit"
      @click="on_submit"
    >
      отправить
    </the_btn>
  </the_wrapper>
</template>

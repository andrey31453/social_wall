<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Object,
  },
})

// features

import { use_user_name, use_active } from '@features'

const author_name = use_user_name(props.data.author)
const is_active = use_active(props.data.author)

// message_store

import { use_message_store } from '@store'
const message_store = use_message_store()
const { is_displayed, change_visible_news } = message_store

const is_new_message_displayed = ref(false)
const toggle_new_message_displayed = () => {
  is_new_message_displayed.value = !is_new_message_displayed.value
}

// components

import { the_new_message } from '@widgets'
import { the_btn, the_wrapper } from '@ui'
</script>

<template>
  <template v-if="is_displayed(data.reply_to)">
    <div
      :style="`margin: 0 ${1.25 * (4 - data.level)}rem 0 ${
        2.5 * data.level
      }rem`"
    >
      <!-- the_message -->
      <v-card>
        <v-card-title>
          <span
            :class="[
              {
                'text-indigo-lighten-1': is_active,
              },
            ]"
          >
            {{ author_name }}&nbsp;
          </span>

          <!-- <the_date :date="data.updated_at" /> -->
        </v-card-title>
        <v-card-text> {{ data.message }} </v-card-text>

        <v-card-actions>
          <the_wrapper gap>
            <the_btn @click="toggle_new_message_displayed"> Ответить </the_btn>

            <template v-if="data.answers">
              <the_btn @click="change_visible_news(data._id)">
                {{ data.answers }} ответов
              </the_btn>
            </template>
          </the_wrapper>
        </v-card-actions>
      </v-card>
      <!-- /the_message -->

      <!-- the_new_message -->
      <template v-if="is_new_message_displayed">
        <the_new_message
          :style="`margin-right: ${6 * data.level}rem`"
          :reply_to="data._id"
          :level="data.level + 1"
          @close="toggle_new_message_displayed"
        />
      </template>
      <!-- /the_new_message -->
    </div>
  </template>
</template>

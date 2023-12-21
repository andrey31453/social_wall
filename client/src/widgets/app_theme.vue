<script setup lang="ts">
import { computed, Ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggle_theme = (): void => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const theme_name: Ref<string> = computed(() =>
  theme.global.current.value.dark ? 'Салуса Секундус' : 'Дюна'
)

import { the_wrapper, the_background, the_btn } from '@ui'
</script>

<template>
  <the_btn
    active
    @click="toggle_theme"
    >{{ theme_name }}</the_btn
  >
</template>

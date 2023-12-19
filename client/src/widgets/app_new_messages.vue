<script setup lang="ts">
import { the_wrapper } from '@ui'
import { the_new_message } from '@widgets'
</script>

<template>
  <div class="mb-5">
    <v-card variant="outlined">
      <v-card-title> Добавить хайпа </v-card-title>

      <v-card-text>
        <the_new_message clear />
      </v-card-text>
    </v-card>
  </div>
</template>

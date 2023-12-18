<script setup lang="ts">
import { the_wrapper, the_background } from '@ui'
</script>

<template>
  <the_background variant="contrast">
    <v-container>
      <the_wrapper end>
        <slot />
      </the_wrapper>
    </v-container>
  </the_background>
</template>

<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
  },
})

import { use_author_name } from '@features'
const author_name = use_author_name(props.data.author)
</script>

<template>
  <div>
    {{ data.message }} | {{ author_name }}
    <hr />
  </div>
</template>

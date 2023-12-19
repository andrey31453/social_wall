<script setup lang="ts">
const props = defineProps({
  date: {
    type: Date,
  },
})
</script>

<template>
  <span class="the_date">
    {{ date }}
  </span>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.the_date {
  @include utils.font('small');
  @include utils.opacity();
}
</style>

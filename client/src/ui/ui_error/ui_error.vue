<script setup>
const props = defineProps({
  error: {
    type: [String, null],
    required: true,
  },
})
</script>

<template>
  <template v-if="error">
    <div class="error">
      Произошла ошибка:
      <span> {{ error }} </span>
    </div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.error {
  @include utils.font('mark');

  span {
    @include utils.font('h3');
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: '',
  },
})

const v_variants = {
  submit: 'tonal',
}

const v_variant = v_variants[props.variant] || 'default'
</script>

<template>
  <v-btn
    :variant="v_variant"
    class="the_btn"
  >
    <slot />
  </v-btn>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.the_btn {
  cursor: pointer;
  @include utils.animation();
  @include utils.opacity();

  &:hover {
    @include utils.opacity('false');
  }
}
</style>

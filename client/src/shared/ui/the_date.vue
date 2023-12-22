<script setup lang="ts">
import moment from 'moment'

const props = defineProps({
  date: {
    type: String,
  },
})

const date_format = moment(props.date).locale('ru').format('hh:mm DD MMMM')
</script>

<template>
  <span class="the_date"> {{ date_format }}</span>
</template>

<style lang="scss" scoped>
@use '@styles/utils';

.the_date {
  @include utils.font('small');
  @include utils.opacity();
}
</style>

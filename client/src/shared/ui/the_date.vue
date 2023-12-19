<script setup lang="ts">
import moment from 'moment'

const props = defineProps({
  date: {
    type: Date,
  },
})

const date_format = moment(props.date).locale('ru').format('DD MMMM YY')
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

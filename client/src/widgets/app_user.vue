<script setup lang="ts">
import { use_user_store } from '@store'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const user_store = use_user_store()
const { users, current_user } = storeToRefs(user_store)

const current_user_data = computed(() =>
  users.value.find((user) => user._id === current_user.value)
)

import { the_wrapper } from '@ui'
</script>

<template>
  <the_wrapper
    class="choise_user"
    gap
  >
    <template v-if="current_user_data">
      <v-img
        class="choise_user__avatar rounded"
        v-if="current_user_data"
        aspect-ratio="1/1"
        cover
        :src="`/assets/users/${current_user_data.photo_id}.jpg`"
        :alt="current_user_data.name"
      />
    </template>

    <v-select
      class="choise_user__select"
      label="Пользователь"
      v-model="current_user"
      :items="users"
      item-value="_id"
      item-title="name"
      variant="underlined"
    />
  </the_wrapper>
</template>

<style scoped lang="scss">
@use '@styles/utils';
$avatar_size: 48px;

.choise_user {
  max-width: 100%;
  &__avatar {
    width: $avatar_size;
    height: $avatar_size;
  }

  &__select {
    height: $avatar_size;
    width: 300px;

    :deep(.v-select__selection-text) {
      @include utils.font('mark');
    }
  }
}
</style>

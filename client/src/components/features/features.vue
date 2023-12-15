<script setup>
import { api, keys } from '@consts'
import { use_fetch, use_id } from '@composables'
import { use_locale_features } from './composables'
import { use_car_store } from '@store'

// features api

const car_store = use_car_store()
const [error, features, title, domain] = await use_fetch(
  api.features,
  {
    key: 'features',
    filters: [
      (v) => v.model_name === car_store.current_model,
      (v) => v.image && v.description,
    ],
    sort: (a, b) => a.sorting - b.sorting,
  },
  'block_heading',
  `${keys.domain}`
)

use_id(features)

// locale features

const { has_locale_features, add_locale_feature } =
  use_locale_features(features)

// components

import { ui_wrapper, ui_h, ui_slider, ui_error, ui_row, ui_button } from '@ui'
import feature from '../feature/feature'
</script>

<template>
  <ui_wrapper
    gap="6"
    container
    padding="8"
  >
    <ui_h h2> {{ title }} </ui_h>

    <ui_error :error="error">
      <ui_wrapper gap="6">
        <ui_row
          xs="1"
          sm="2"
          lg="3"
          gap="3"
        >
          <template
            v-for="(feature, idx) in features"
            :key="feature"
          >
            <feature
              :feature="feature"
              :domain="domain"
            />
          </template>
        </ui_row>

        <template v-if="has_locale_features">
          <ui_wrapper
            center
            horizontal
          >
            <ui_button
              variant="outline"
              @click="add_locale_feature"
            >
              Добавить особенность
            </ui_button>
          </ui_wrapper>
        </template>
      </ui_wrapper>
    </ui_error>
  </ui_wrapper>
</template>

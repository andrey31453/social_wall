import { computed } from 'vue'
import { use_locale_image } from '@composables'

import { locale_features, locale_folder } from '../assets'

export default (features) => {
  use_locale_image(locale_features.value, locale_folder)

  const has_locale_features = computed(() => locale_features.value.length)

  const add_locale_feature = () => {
    const current_feature = locale_features.value.shift()
    features.value.splice(1, 0, current_feature)
  }

  return {
    has_locale_features,
    add_locale_feature,
  }
}

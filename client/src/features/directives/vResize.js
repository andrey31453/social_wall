import { ref } from 'vue'

import {
  add_resize_listener,
  remove_resize_listener,
} from '@directives:helpers'

const resize_cb = ref(null)

// helpers

const get_resize_cb = (binding) => () =>
  binding.value(document.documentElement.clientWidth)

// general

export default {
  mounted: (_, binding) => {
    resize_cb.value = get_resize_cb(binding)

    add_resize_listener(binding.arg, resize_cb.value)
  },

  beforeUnmount: () => {
    remove_resize_listener(resize_cb.value)
  },
}

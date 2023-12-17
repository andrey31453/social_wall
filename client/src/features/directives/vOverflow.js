import { ref } from 'vue'

import {
  add_resize_listener,
  remove_resize_listener,
} from '@directives:helpers'

const resize_cb = ref(null)

const get_resize_cb = (el, binding) => () => {
  el.style.height = `${el.clientWidth / binding.value}px`
  el.style.overflow = 'hidden'
}

export default {
  mounted: (el, binding) => {
    resize_cb.value = get_resize_cb(el, binding)

    add_resize_listener(binding.arg, resize_cb.value)
  },

  beforeUnmount: () => {
    remove_resize_listener(resize_cb.value)
  },
}

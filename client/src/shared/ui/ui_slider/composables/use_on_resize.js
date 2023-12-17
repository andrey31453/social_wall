import { ref } from 'vue'
import { vars } from '@consts'

const slids = ref(null)
const wrapper = ref(null)

const elem_width = ref(null)
const elem_width_value = ref(null)
const slider_height = ref(null)

const get_elem_width = (count) => {
  elem_width_value.value =
    (slids.value.offsetWidth -
      (count.value - 1) * 4 * +vars.distance.replace(/\D/g, ' ')) /
    +count.value

  return `calc((${slids.value.offsetWidth}px - ${count.value - 1} * 4 * ${
    vars.distance
  })/ ${count.value})`
}

const get_slider_height = () => {
  const result = [...wrapper.value.children].reduce(
    (acc, slide_node) => Math.max(acc, slide_node.offsetHeight),
    0
  )
  return `${result}px`
}

const get_on_resize = (count) => () => {
  elem_width.value = get_elem_width(count)
  slider_height.value = get_slider_height()
}

export default (count) => {
  const on_resize = get_on_resize(count)

  return {
    slids,
    wrapper,

    elem_width,
    elem_width_value,
    slider_height,

    on_resize,
  }
}

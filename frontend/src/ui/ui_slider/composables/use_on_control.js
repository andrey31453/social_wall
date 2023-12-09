import { ref } from 'vue'

const active_elem = ref(0)

const get_is_visible = (visible_count) => (elem_index) => {
  if (active_elem.value > elem_index) return false
  if (active_elem.value + +visible_count.value <= elem_index) return false

  return true
}

const get_limit_elem_index = (limits, elem_index) => {
  if (elem_index < limits.value.start) return limits.value.start
  if (elem_index > limits.value.end) return limits.value.end

  return elem_index
}

const get_on_cntrl_elem = (limits) => (elem_index) => {
  active_elem.value = get_limit_elem_index(limits, elem_index)
}

export default ({ limits, visible_count }) => {
  const is_visible = get_is_visible(visible_count)
  const on_cntrl_elem = get_on_cntrl_elem(limits)

  return {
    active_elem,
    is_visible,
    on_cntrl_elem,
  }
}

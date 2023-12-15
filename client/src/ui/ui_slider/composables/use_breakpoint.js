import { ref, computed, useSlots } from 'vue'

const visible_count = ref(null)
const elem_count = ref(null)
const limits = ref(null)

const get_on_breakpoint =
  ({ set_visible_count, set_limits }) =>
  (b) => {
    set_visible_count(b)
    set_limits()
  }

export default (breakpoints) => {
  const set_elem_count = () => {
    const slot = useSlots().default()
    elem_count.value = slot[0].children.length
  }
  set_elem_count()

  const set_visible_count = (breakpoint) => {
    visible_count.value = breakpoints[breakpoint]
  }
  const set_limits = () => {
    limits.value = {
      start: 1 - visible_count.value,
      end: elem_count.value - visible_count.value + 1,
    }
  }
  const on_breakpoint = get_on_breakpoint({ set_visible_count, set_limits })

  const has_slider = computed(() => visible_count.value < elem_count.value)

  return {
    on_breakpoint,
    limits,
    has_slider,
    visible_count,
    elem_count,
  }
}

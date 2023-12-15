import { watch } from 'vue'

import { vars } from '@consts'

export default ({
  left,
  left_cash,
  active_elem,
  elem_width_value: elem_width,
  is_drag,
}) => {
  const on_active_elem = () => {
    if (is_drag.value) return

    left.value = `calc(-${active_elem.value} * ${elem_width.value}px - ${active_elem.value} * 4 * ${vars.distance})`

    const new_drag_left =
      -active_elem.value * elem_width.value -
      active_elem.value * 4 * +vars.distance.replace(/\D/g, ' ')
    left_cash.value = new_drag_left
  }

  const on_left = (v) => {
    active_elem.value = Math.round(-left_cash.value / elem_width.value)
  }

  watch(active_elem, on_active_elem)
  watch(left, on_left)
}

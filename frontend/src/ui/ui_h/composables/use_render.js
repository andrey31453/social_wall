import { h, useSlots } from 'vue'

const get_wrapper_tag = ({ h1, h2, h3 }) => {
  if (h1) return 'h1'
  if (h2) return 'h2'
  if (h3) return 'h3'

  return 'div'
}

const get_span_slot_elems = (slot_elem) => {
  return slot_elem.children
    .trim()
    .split(' ')
    .reduce((acc, word) => {
      acc.push(h('span', word))
      acc.push(h('span', ' '))

      return acc
    }, [])
}

const get_split_slot = (slot) => {
  return slot.reduce((acc, slot_elem) => {
    if (!slot_elem.children) {
      acc.push(slot_elem)
    } else {
      acc.push(...get_span_slot_elems(slot_elem))
    }

    return acc
  }, [])
}

const get_ui_h_render = (slot, wrapper_tag) => {
  const split_slot = get_split_slot(slot)
  return () => h(wrapper_tag, split_slot)
}

export default (props) => {
  const slot = useSlots().default()
  const wrapper_tag = get_wrapper_tag(props)

  return get_ui_h_render(slot, wrapper_tag)
}

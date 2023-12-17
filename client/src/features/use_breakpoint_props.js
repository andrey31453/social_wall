import { vars } from '@consts'

const get_breakpoint = ({ acc, keys, props, breakpoint, breakpoints_idx }) => {
  if (!breakpoints_idx) return props[breakpoint]

  if (props[breakpoint]) return props[breakpoint]

  const pre_breakpoint = keys[breakpoints_idx - 1]
  return acc[pre_breakpoint]
}

export default (props) => {
  const keys = Object.keys(vars.breakpoints)

  return keys.reduce((acc, breakpoint, breakpoints_idx) => {
    acc[breakpoint] = get_breakpoint({
      acc,
      props,
      keys,
      breakpoint,
      breakpoints_idx,
    })

    return acc
  }, {})
}

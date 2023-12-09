import { use_app_store } from '@store'
import { vars } from '@consts'
import { use_event_listener } from '@composables'

const { breakpoints } = vars

const get_window_breakpoint = (width) => {
  return Object.keys(breakpoints).reduce((acc, breakpoint_key) => {
    if (width > breakpoints[breakpoint_key]) {
      acc = breakpoint_key
    }

    return acc
  }, null)
}

const set_breakpoint = ({ app_store, window_breakpoint }) => {
  if (app_store.breakpoint === window_breakpoint) return void 0

  app_store.breakpoint = window_breakpoint
}

const set_window_width = ({ app_store, width }) => {
  app_store.window_width = width
}

const on_resize = (app_store) => {
  const width = document.documentElement.clientWidth
  const window_breakpoint = get_window_breakpoint(width)

  set_breakpoint({ app_store, window_breakpoint })
  set_window_width({ app_store, width })
}

export default () => {
  const app_store = use_app_store()
  const call_on_resize = () => on_resize(app_store)

  use_event_listener('resize', call_on_resize)
}

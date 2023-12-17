import { on_init } from '@directives:helpers'

export default (arg, cb, init = true) => {
  window.addEventListener('resize', cb)
  on_init(arg, cb, init)
}

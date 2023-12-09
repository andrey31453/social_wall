import { onMounted, onBeforeUnmount } from 'vue'

export default (listener, cb, init = true) => {
  const add_listener = () => {
    window.addEventListener(listener, cb)
  }
  const remove_listener = () => {
    window.removeEventListener(listener, cb)
  }

  onMounted(add_listener)
  onBeforeUnmount(remove_listener)

  if (init) cb()
}

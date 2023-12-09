import { use_app_store } from '@store'
import { storeToRefs } from 'pinia'

export default (cb) => {
  const app_store = use_app_store()

  const { window_width } = storeToRefs(app_store)

  watch(window_width, cb)
}

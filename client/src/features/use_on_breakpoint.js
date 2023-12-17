import { use_app_store } from '@store'
import { storeToRefs } from 'pinia'

export default (cb) => {
  const app_store = use_app_store()

  const { breakpoint } = storeToRefs(app_store)

  watch(breakpoint, cb)
}

import { watch } from 'vue'
import { storeToRefs } from 'pinia'

import { on_init } from '@directives:helpers'
import { use_app_store } from '@store'

export default {
  mounted: (_, binding) => {
    const app_store = use_app_store()
    const cb = () => binding.value(app_store.breakpoint)
    const { breakpoint } = storeToRefs(app_store)

    watch(breakpoint, cb)
    on_init(binding.arg, cb)
  },
}

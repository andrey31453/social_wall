import { use_car_store } from '@store'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

export default () => {
  const car_store = use_car_store()
  const { current_model } = storeToRefs(car_store)

  const set_title = () => {
    document.title = `nisssan ${car_store.current_model}`
  }

  watch(current_model, set_title, { immediate: true })
}

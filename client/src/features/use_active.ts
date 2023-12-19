import { use_user_store } from '@store'
import { computed } from 'vue'

export const use_active = (user_id) => {
  const user_store = use_user_store()
  const is_active_user = computed(() => user_store.current_user === user_id)

  return is_active_user
}

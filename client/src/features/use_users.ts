import { use_user_store } from '@store'

export const use_users = () => {
  const user_store = use_user_store()
  user_store.fetch_users()
}

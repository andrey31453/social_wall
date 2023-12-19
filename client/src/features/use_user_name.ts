import { use_user_store } from '@store'

export const use_user_name = (user_id) => {
  const user_store = use_user_store()

  return user_store.users.find((user) => user._id === user_id).name
}

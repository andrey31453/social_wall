import { use_user_store } from '@store'

export const use_author_name = (author_id) => {
  const user_store = use_user_store()

  return user_store.users.find((user) => user._id === author_id).name
}

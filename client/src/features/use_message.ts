import { use_message_store } from '@store'

export const use_message = () => {
  const message_store = use_message_store()
  message_store.init()
}

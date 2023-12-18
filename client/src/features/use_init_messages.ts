import {
  i_message,
  i_create_message,
  i_user,
  i_create_init_message,
} from '@types'

import { create_message, update_message } from '@api'
import { init_messages } from '@consts'
import { delay } from '@libs'
import { use_user_store } from '@store'

interface i_message_store {
  messages: i_message[]
}
interface i_user_store {
  users: i_user[]
  get_user_id(user_name: string): string
}
type i_message_cash = null

const new_messages_cash: i_message_cash[] = []

const get_message_id = (fake_id: number): string | undefined => {
  const current_reply_message = init_messages.find((m) => m.fake_id === fake_id)

  return current_reply_message._id ? current_reply_message._id : undefined
}

const create_init_message = async (message): Promise<void | i_message> => {
  if (!message.author) return await void 0

  return await create_message(message)
}

const set_new_message = (new_message: i_message | void): void => {
  if (!new_message) return void 0

  new_messages_cash.push(null)
}

const set_init_message = async (
  init_message: i_create_init_message,
  user_store: i_user_store
) => {
  const [author] = [user_store.get_user_id(init_message.author_name)]

  const message = Object.assign(init_message, { author })
  const new_message = await create_init_message(message)
  set_new_message(new_message)

  return true
}

const set_init_messages = (
  ctx: i_message_store,
  user_store: i_user_store
): void => {
  init_messages.forEach((init_message) => {
    set_init_message(init_message, user_store)
  })
}

const end_updates = async () => {
  if (!new_messages_cash.length) return void 0

  await delay(50)
  return end_updates()
}

const end_creates = async () => {
  if (init_messages.length === new_messages_cash.length) return void 0

  await delay(50)
  return end_creates()
}

const initialize_users = async (user_store: i_user_store) => {
  if (user_store.users.length) return void 0

  await delay(50)
  return initialize_users(user_store)
}

const update_messages = () => {
  init_messages.forEach(do_update_message)
}

const end_update_message = () => {
  new_messages_cash.pop()
}

const do_update_message = async (init_message) => {
  if (!init_message.reply_to_fake_id) return end_update_message()

  const reply_to: string | undefined = get_message_id(
    init_message.reply_to_fake_id
  )
  const update_data = await update_message(
    Object.assign(init_message, { reply_to })
  )

  console.log('update_data: ', update_data)

  end_update_message()
}

export const use_init_messages = async (
  ctx: i_message_store,
  cb: Function
): Promise<void> => {
  if (ctx.messages.length) return void 0

  const user_store: i_user_store = use_user_store()

  await initialize_users(user_store)
  set_init_messages(ctx, user_store)

  await end_creates()
  update_messages()
  await end_updates()

  return void cb()
}

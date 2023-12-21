import { use_fetch } from '@libs'
import { i_create_message, i_message } from '@types'

export const create_message = async (
  message: i_create_message
): Promise<i_message> => {
  const data = await use_fetch('/api/message', 'post', message)
  return Object.assign(message, data)
}

export const get_messages = async (): Promise<i_message[]> =>
  await use_fetch('/api/message')

export const update_message = async (
  message: i_message
): Promise<i_message> => {
  const data = await use_fetch('/api/message/' + message._id, 'put', message)
  return Object.assign(message, data)
}

export const delete_message = async (message_id: string): Promise<void> =>
  await use_fetch('/api/message/', 'delete', message_id)

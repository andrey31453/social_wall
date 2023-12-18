import { use_fetch } from '@libs'
import { i_create_message } from '@types'

export const create_message = async (
  message: i_create_message
): Promise<any> => {
  const data = await use_fetch('/api/message', 'post', message)
  return Object.assign(message, data)
}

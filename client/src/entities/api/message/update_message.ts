import { use_fetch } from '@libs'
import { i_message } from '@types'

export const update_message = async (message: i_message): Promise<any> => {
  const data = await use_fetch('/api/message/' + message._id, 'put', message)
  return Object.assign(message, data)
}

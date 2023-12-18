import { use_fetch } from '@libs'
import { i_message } from '@types'

export const get_messages = async (): Promise<i_message[]> =>
  await use_fetch('/api/message')

import { use_fetch } from '@libs'

export const delete_message = async (message_id: string): Promise<void> =>
  await use_fetch('/api/message/', 'delete', message_id)

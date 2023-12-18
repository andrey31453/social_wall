import { use_fetch } from '@libs'

export const delete_user = async (user_id: string): Promise<void> => {
  return await use_fetch('/api/user/', 'delete', user_id)
}

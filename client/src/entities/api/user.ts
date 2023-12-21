import { use_fetch } from '@libs'
import { i_create_user, i_user } from '@types'

export const create_user = async (user: i_create_user): Promise<i_user> =>
  await use_fetch('/api/user', 'post', user)

export const get_users = async (): Promise<i_user[]> =>
  await use_fetch('/api/user')

export const delete_user = async (user_id: string): Promise<void> =>
  await use_fetch('/api/user/', 'delete', user_id)

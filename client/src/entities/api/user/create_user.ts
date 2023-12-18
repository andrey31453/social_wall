import { use_fetch } from '@libs'
import { i_create_user } from '@types'

export const create_user = async (user: i_create_user): Promise<any> =>
  await use_fetch('/api/user', 'post', user)

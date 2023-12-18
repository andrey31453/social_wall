import { use_fetch } from '@libs'
import { i_user } from '@types'

export const get_users = async (): Promise<i_user[]> => {
  return await use_fetch('/api/user')
}

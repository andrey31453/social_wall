import { init_users } from '@consts'
import { create_user } from '@api'
import { i_user } from '@types'

interface i_user_store {
  users: i_user[]
}

export const use_init_users = async (
  ctx: i_user_store,
  cb: Function
): Promise<void> => {
  if (ctx.users.length) return void 0

  await init_users.map(async (init_user) => await create_user(init_user))

  cb()
}

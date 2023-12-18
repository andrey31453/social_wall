import { get_users, create_user, delete_user } from '@api'
import { init_users } from '@consts'
import { i_user } from '@types'

export default {
  // state
  state: () => {
    return {
      current_user: null as string,
      users: [] as i_user[],
    }
  },

  // actions
  actions: {
    async init(): Promise<void> {
      await this.set_users()
      this.set_init_users()

      // this.delete_users(this.users)
    },

    async set_users(): Promise<void> {
      this.users = await get_users()
      this.set_current_user()
    },

    async set_init_users(): Promise<void> {
      if (this.users.length) return void 0

      await init_users.map(async (init_user) => await create_user(init_user))

      await this.set_users()
    },

    set_current_user(): void {
      if (!this.users.length) return void 0

      this.current_user = this.users[0]._id
    },

    delete_users(users): void {
      users.forEach((user) => delete_user(user._id))
    },

    get_user_id(user_name: string): string {
      return this.users.find((user) => user.name === user_name)?._id
    },
  },
}

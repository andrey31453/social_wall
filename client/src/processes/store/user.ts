import { get_users, delete_user } from '@api'
import { i_user } from '@types'
import { use_init_users } from '@features'

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
      use_init_users(this, this.set_users)

      // this.delete_users(this.users)
    },

    async set_users(): Promise<void> {
      this.users = await get_users()
      this.set_current_user()
    },

    set_current_user(): void {
      if (!this.users.length) return void 0

      this.current_user = this.users[0]._id
    },

    delete_users(users: i_user[]): void {
      users.forEach(({ _id }) => delete_user(_id))
    },

    get_user_id(user_name: string): string {
      return this.users.find((user) => user.name === user_name)?._id
    },
  },
}

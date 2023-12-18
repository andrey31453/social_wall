import { get_messages, create_message, delete_message } from '@api'
import { use_init_messages } from '@features'

import { i_message } from '@types'

export default {
  // state
  state: () => {
    return {
      messages: [] as i_message[],
    }
  },

  // actions
  actions: {
    async init(): Promise<void> {
      await this.set_messages()

      await use_init_messages(this, this.set_messages)

      // this.delete_messages(this.messages)
    },

    async set_messages(): Promise<void> {
      this.messages = await get_messages()
    },

    // async set_init_messages(): Promise<void> {
    //   if (this.messages.length) return void 0

    //   console.log('init_messages: ', init_messages)

    // await init_messages.map(
    //   async (init_message) => await create_message(init_message)
    // )

    // await this.set_messages()
    // },

    delete_messages(messages: i_message[]): void {
      messages.forEach((message) => delete_message(message._id))
    },
  },
}

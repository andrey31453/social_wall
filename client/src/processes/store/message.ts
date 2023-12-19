import { get_messages, create_message, delete_message } from '@api'
import { use_init_messages } from '@features'

import { i_message, i_extend_message } from '@types'

export default {
  // state
  state: () => {
    return {
      messages: [] as i_message[],
      extend_messages: [] as i_extend_message[],
    }
  },

  // actions
  actions: {
    async init(): Promise<void> {
      await this.set_messages()
      await use_init_messages(this, this.set_messages)
      this.set_extend_messages()

      // this.delete_messages(this.messages)
    },

    async set_messages(): Promise<void> {
      this.messages = await get_messages()
    },

    delete_messages(messages: i_message[]): void {
      messages.forEach((message) => delete_message(message._id))
    },

    //
    // extend_messages
    //

    set_extend_messages(): void {
      this.sort_extend_messages_by_date()
      const is_messages_need_change_pos = this.get_messages_need_change_pos()
      this.change_messages_pos(is_messages_need_change_pos)
    },

    change_message_pos(message, idx) {
      const old_pos = this.extend_messages.findIndex(
        (extend_message) => extend_message._id === message._id
      )
      const new_pos = this.extend_messages.findIndex(
        (extend_message) => extend_message._id === message.reply_to
      )

      this.extend_messages.splice(old_pos, 1)
      this.extend_messages.splice(new_pos, 0, message)
    },

    change_messages_pos(messages) {
      messages.forEach(this.change_message_pos, this)
    },

    get_messages_need_change_pos() {
      return this.extend_messages.filter((m) => m.level).reverse()
    },

    sort_extend_messages_by_date(): void {
      this.extend_messages = this.messages.sort(
        (a, b) =>
          new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf()
      )
    },
  },
}

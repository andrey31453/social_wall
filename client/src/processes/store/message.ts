import { get_messages, delete_message } from '@api'
import { use_init_messages, use_reply_hash } from '@features'

import { i_message, i_extend_message } from '@types'

export default {
  // state
  state: () => {
    return {
      messages: [] as i_message[],
      extend_messages: [] as i_extend_message[],
      displayed_news: new Set() as Set<string>,
      news_reactive_key: 0 as number,
    }
  },

  // actions
  actions: {
    async init(): Promise<void> {
      await this.set_messages()
      await use_init_messages(this, this.set_messages)
      this.set_extend_messages()
      this.reactive_news()

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
      const reply_hash = use_reply_hash(this.extend_messages, 'reply_to')
      this.set_answers(reply_hash)
    },

    set_answers(reply_hash) {
      this.extend_messages.forEach((extend_message) =>
        this.set_answer(extend_message, reply_hash)
      )
    },

    set_answer(extend_message, reply_hash): void {
      const replyes = reply_hash.get(extend_message._id)
      if (!replyes) return void 0

      return void (extend_message.answers = replyes.length)
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

    //
    // visible
    //

    is_displayed(reply_to) {
      return !reply_to || this.displayed_news.has(reply_to)
    },

    change_visible_news(news_id: string): void {
      this.displayed_news.has(news_id)
        ? this.displayed_news.delete(news_id)
        : this.displayed_news.add(news_id)
    },

    reactive_news() {
      this.news_reactive_key++
    },
  },
}

import { init_messages } from '@consts'
import { i_create_init_message, i_reply_to_hash } from '@types'
import { use_reply_hash } from '@features'

interface i_init_messages_creater {
  get(): void
}

export class Init_Messages_Creater implements i_init_messages_creater {
  private readonly no_reply_key = 'no_reply'
  private reply_to_hash: i_reply_to_hash<number, i_create_init_message>
  private messages: i_create_init_message[]
  j
  constructor() {
    this.messages = init_messages

    this.create_reply_to_hash()
    this.create_levels()
  }

  private create_reply_to_hash(): void {
    this.reply_to_hash = use_reply_hash<number, i_create_init_message>(
      this.messages,
      this.no_reply_key,
      'reply_to_fake_id'
    )
  }

  private create_levels(): void {
    this.reply_to_hash.get(this.no_reply_key).forEach((message) => {
      this.set_level(message, 0)
    })
  }

  private set_level(message: i_create_init_message, level: number): void {
    message.level = level
    const reply_messages = this.reply_to_hash.get(message.fake_id)

    this.set_level_to_reply_messages(reply_messages, level)
  }

  set_level_to_reply_messages(
    reply_messages: i_create_init_message[],
    level: number
  ): void {
    if (!reply_messages) return void 0

    reply_messages.forEach((reply_message) => {
      this.set_level(reply_message, level + 1)
    })
  }

  get(): i_create_init_message[] {
    return this.messages
  }
}

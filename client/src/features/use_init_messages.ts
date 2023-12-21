import { i_message, i_user, i_create_init_message } from '@types'

import { create_message, update_message } from '@api'

import { wait_condition } from '@libs'
import { use_user_store } from '@store'
import { Init_Messages_Creater } from '@features'

interface i_message_store {
  messages: i_message[]
}
interface i_user_store {
  users: i_user[]
  get_user_id(user_name: string): string
}

interface i_init_messages {
  wait_initialize_users(): Promise<void>
  create_messages(): void
  wait_end_creates(): Promise<void>
  update_messages(): void
  wait_end_updates(): Promise<void>
}

class Init_Messages implements i_init_messages {
  private user_store: i_user_store = use_user_store()
  private messages: i_create_init_message[] = new Init_Messages_Creater().get()
  private create_message_counter: number = 0

  constructor(private ctx: i_message_store, private cb: Function) {}

  async wait_initialize_users(): Promise<void> {
    return wait_condition(() => this.user_store.users.length)
  }

  create_messages(): void {
    this.messages.forEach(this.create_message, this)
  }

  async create_message(message: i_create_init_message): Promise<void> {
    const author: string = this.user_store.get_user_id(message.author_name)

    const message_for_back = Object.assign(message, { author })
    await this.create_message_to_bd(message_for_back)
    this.create_message_counter++
  }

  async create_message_to_bd(message): Promise<void> {
    if (!message.author) return await void 0

    Object.assign(message, await create_message(message))
  }

  async wait_end_creates(): Promise<void> {
    return wait_condition(
      () => this.messages.length === this.create_message_counter
    )
  }

  update_messages(): void {
    this.messages.forEach(this.update_message, this)
  }

  async update_message(message): Promise<void> {
    if (!message.reply_to_fake_id) return this.end_update_message()

    const reply_to: string | undefined = this.get_message_id(
      message.reply_to_fake_id,
      'fake_id'
    )
    await update_message(Object.assign(message, { reply_to }))

    this.end_update_message()
  }

  get_message_id<search_value>(
    search_value: search_value,
    search_key: string
  ): string | undefined {
    const reply_message = this.messages.find(
      (m) => m[search_key] === search_value
    )

    return reply_message ? reply_message._id : undefined
  }

  end_update_message() {
    this.create_message_counter--
  }

  async wait_end_updates(): Promise<void> {
    return wait_condition(() => !this.create_message_counter)
  }
}

const has_messages = (ctx: i_message_store): boolean => {
  return Boolean(ctx.messages.length)
}

export const use_init_messages = async (
  ctx: i_message_store,
  cb: Function
): Promise<void> => {
  if (has_messages(ctx)) return void 0

  const init_messages = new Init_Messages(ctx, cb)
  await init_messages.wait_initialize_users()

  init_messages.create_messages()
  await init_messages.wait_end_creates()

  init_messages.update_messages()
  await init_messages.wait_end_updates()

  return void cb()
}

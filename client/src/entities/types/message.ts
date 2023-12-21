interface i_message_base {
  message: string
  reply_to?: string
}

export interface i_create_message extends i_message_base {
  author: string
  level: number
}

export interface i_create_init_message extends i_message_base {
  author_name: string
  fake_id: number
  reply_to_fake_id?: number
  _id?: string
  level?: number
}

export interface i_message extends i_create_message {
  _id: string
  created_at: Date
  updated_at: Date
}

export interface i_extend_message extends i_message {
  answers: number
}

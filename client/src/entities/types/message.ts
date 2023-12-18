export interface i_message {
  _id: string
  author: string
  message: string
  created_at: Date
  updated_at: Date
  reply_to?: string
}

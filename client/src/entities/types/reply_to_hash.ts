import { i_message } from '@types'

export type i_reply_to_hash<key_type, message_type> = Map<
  key_type | string,
  message_type[]
>

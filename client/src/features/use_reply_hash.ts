import { i_reply_to_hash } from '@types'

const add_message_hash = <key_type, message_type>(
  hash: i_reply_to_hash<key_type, message_type>,
  message: message_type,
  reply_to: string | key_type
): i_reply_to_hash<key_type, message_type> => {
  const current_hash_value = hash.get(reply_to)
  const new_hash_value = current_hash_value
    ? [...current_hash_value, message]
    : [message]

  hash.set(reply_to, new_hash_value)

  return hash
}

export const use_reply_hash = <key_type, message_type>(
  messages: message_type[],
  no_reply_key: string,
  reply_key: string
): i_reply_to_hash<key_type, message_type> => {
  return messages.reduce((hash, message) => {
    const reply_value: undefined | key_type = message[reply_key]

    if (!reply_value)
      return add_message_hash<key_type, message_type>(
        hash,
        message,
        no_reply_key
      )

    return add_message_hash<key_type, message_type>(hash, message, reply_value)
  }, new Map())
}

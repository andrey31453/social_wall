const add_message_hash = (hash, init_message, reply_to) => {
  const current_hash_value = hash.get(reply_to)
  const new_hash_value = current_hash_value
    ? [...current_hash_value, init_message]
    : [init_message]

  hash.set(reply_to, new_hash_value)

  return hash
}

export const use_reply_hash = (messages, reply_key) => {
  return messages.reduce((hash, message) => {
    const reply_value = message[reply_key]

    if (!reply_value) return add_message_hash(hash, message, 'no_reply')

    return add_message_hash(hash, message, reply_value)
  }, new Map())
}

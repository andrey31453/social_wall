import { defineStore } from 'pinia'

// message

import message_store from './message'
const use_message_store = defineStore('message', message_store)

// user

import user_store from './user'
const use_user_store = defineStore('user', user_store)

// export

export { use_message_store, use_user_store }

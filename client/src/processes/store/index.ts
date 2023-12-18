import { defineStore } from 'pinia'

// app

import app_store from './app'
const use_app_store = defineStore('app', app_store)

// user

import user_store from './user'
const use_user_store = defineStore('user', user_store)

// export

export { use_app_store, use_user_store }

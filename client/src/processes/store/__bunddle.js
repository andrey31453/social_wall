import { defineStore } from 'pinia'

import car_store from './car/car'
import app_store from './app/app'

const use_car_store = defineStore('car', car_store)
const use_app_store = defineStore('app', app_store)

export { use_car_store, use_app_store }

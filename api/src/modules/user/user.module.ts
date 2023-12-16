import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User, user_schema } from './user.schema'
import { User_Controller } from './user.controller'
import { User_Service } from './user.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: user_schema }]),
  ],

  controllers: [User_Controller],

  providers: [User_Service],
})
export class User_Module {}

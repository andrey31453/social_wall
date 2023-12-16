import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Message, Message_schema } from './message.schema'
import { Message_Controller } from './message.controller'
import { Message_Service } from './message.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: Message_schema }]),
  ],

  controllers: [Message_Controller],

  providers: [Message_Service],
})
export class Message_Module {}

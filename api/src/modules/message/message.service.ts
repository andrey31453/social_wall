import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Create_Message_Dto } from './message.dto'
import { Message } from './message.schema'

@Injectable()
export class Message_Service {
  constructor(
    @InjectModel(Message.name) private readonly Message_model: Model<Message>
  ) {}

  async create_message(
    Create_Message_Dto: Create_Message_Dto
  ): Promise<Message> {
    return await this.Message_model.create(Create_Message_Dto)
  }

  async get_messages(): Promise<Message[]> {
    return this.Message_model.find().exec()
  }
}

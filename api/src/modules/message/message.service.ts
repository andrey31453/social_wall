import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Create_Message_Dto } from './message.dto'
import { Message } from './message.schema'

@Injectable()
export class Message_Service {
  constructor(
    @InjectModel(Message.name) private readonly message_model: Model<Message>
  ) {}

  async get_messages(): Promise<Message[]> {
    return this.message_model.find().exec()
  }

  async create_message(
    create_message_dto: Create_Message_Dto
  ): Promise<Message> {
    return await this.message_model.create(create_message_dto)
  }

  delete_message(message_id): void {
    this.message_model.findByIdAndDelete({ _id: message_id }).exec()
  }
}

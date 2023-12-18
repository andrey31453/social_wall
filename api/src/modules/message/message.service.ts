import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Create_Message_Dto, Update_Message_Dto } from './message.dto'
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

  update_message(
    message_id: string,
    update_message_dto: Update_Message_Dto
  ): Promise<any> {
    return this.message_model
      .find({ _id: message_id })
      .updateOne({ _id: message_id }, update_message_dto)
      .exec()
  }

  delete_message(message_id: string): Promise<Message> {
    return this.message_model.find({ _id: message_id }).deleteOne().exec()
  }
}

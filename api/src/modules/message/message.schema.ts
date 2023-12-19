import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type message_document = HydratedDocument<Message>

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Message {
  @Prop()
  author: string

  @Prop()
  message: string

  @Prop()
  level: number

  @Prop()
  reply_to?: string

  @Prop()
  created_at?: Date

  @Prop()
  updated_at?: Date
}

export const Message_schema = SchemaFactory.createForClass(Message)

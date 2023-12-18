import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Message {
  @Prop()
  author: number

  @Prop()
  message: string

  @Prop()
  reply_to?: number

  @Prop()
  created_at: Date

  @Prop()
  updated_at: Date
}

export const Message_schema = SchemaFactory.createForClass(Message)

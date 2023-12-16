import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Message {
  @Prop()
  author: number

  @Prop()
  message: string

  @Prop()
  timestamp: number

  @Prop()
  reply_to?: number
}

export const Message_schema = SchemaFactory.createForClass(Message)

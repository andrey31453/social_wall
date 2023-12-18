import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type user_document = HydratedDocument<User>

@Schema()
export class User {
  @Prop()
  name: string

  @Prop()
  photo_id: number
}

export const user_schema = SchemaFactory.createForClass(User)

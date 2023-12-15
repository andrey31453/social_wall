import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

@Schema()
export class User {
  @Prop()
  first_name: string

  @Prop()
  second_name: string

  @Prop()
  photo_id: number
}

export type user_document = HydratedDocument<User>
export const user_schema = SchemaFactory.createForClass(User)

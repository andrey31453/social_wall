import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class User {
  @Prop()
  first_name: string

  @Prop()
  second_name: string

  @Prop()
  photo_id: number
}

export const user_schema = SchemaFactory.createForClass(User)

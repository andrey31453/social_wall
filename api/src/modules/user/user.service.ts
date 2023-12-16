import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Create_User_Dto } from './user.dto'
import { User } from './user.schema'

@Injectable()
export class User_Service {
  constructor(
    @InjectModel(User.name) private readonly user_model: Model<User>
  ) {}

  async create_user(create_user_dto: Create_User_Dto): Promise<User> {
    return await this.user_model.create(create_user_dto)
  }

  async get_users(): Promise<User[]> {
    return this.user_model.find().exec()
  }
}

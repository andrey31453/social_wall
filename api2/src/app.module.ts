import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User_Module } from './user/user.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/social_wall'),

    User_Module,
  ],
})
export class AppModule {}

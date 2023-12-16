import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User_Module, Message_Module } from './modules'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/social_wall'),

    User_Module,
    Message_Module,
  ],
})
export class AppModule {}

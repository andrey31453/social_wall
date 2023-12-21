import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common'

import { Create_User_Dto } from './user.dto'
import { User } from './user.schema'
import { User_Service } from './user.service'

@Controller('api/user')
export class User_Controller {
  constructor(private readonly user_service: User_Service) {}

  @Post()
  async create(@Body() create_user_dto: Create_User_Dto) {
    return await this.user_service.create_user(create_user_dto)
  }

  @Get()
  async get_users(): Promise<User[]> {
    return this.user_service.get_users()
  }

  @Delete(':id')
  delete_user(@Param('id') id: string): void {
    this.user_service.delete_user(id)
  }
}

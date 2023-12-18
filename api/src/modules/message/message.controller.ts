import { Body, Controller, Get, Post, Delete, Param, Put } from '@nestjs/common'

import { Create_Message_Dto, Update_Message_Dto } from './message.dto'
import { Message } from './message.schema'
import { Message_Service } from './message.service'

@Controller('api/message')
export class Message_Controller {
  constructor(private readonly message_service: Message_Service) {}

  @Get()
  async get_messages(): Promise<Message[]> {
    return this.message_service.get_messages()
  }

  @Post()
  async create(
    @Body() create_message_dto: Create_Message_Dto
  ): Promise<Message> {
    return await this.message_service.create_message(create_message_dto)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() update_message_dto: Update_Message_Dto
  ): Promise<Message> {
    return await this.message_service.update_message(id, update_message_dto)
  }

  @Delete(':id')
  async delete_messages(@Param('id') message_id: string) {
    return this.message_service.delete_message(message_id)
  }
}

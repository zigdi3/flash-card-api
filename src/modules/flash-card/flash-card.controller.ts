/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFlashCardDto } from './dtos/create-flash-card.dto';
import { FlashCardService } from './flash-card.service';

@ApiTags('flash-card')
@Controller('flash-card')
@Controller()
export class FlashCardController {
  constructor(private service: FlashCardService) {

  }

  @Post('/save')
  save(@Body() data: CreateFlashCardDto) {

    return this.service.save(data);
  }

  @Get('/create-qr')
  toqrCode(@Query() name: string): Promise<any> {
    return this.service.toQuantumRead(name);
  }

  @Get('/list')
  getAllFlashCards() {
    return this.service.getAllFlashCards();
  }
  @Get(':id')
  getById(@Param('id') flashCardId: string) {
    return this.service.getById(flashCardId);
  }


}

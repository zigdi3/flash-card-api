/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post,Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFlashCardDto } from './dtos/create-flash-card.dto';
import { FlashCardService } from './flash-card.service';

@ApiTags('flash-card')
@Controller('flash-card')
@Controller()
export class FlashCardController {
constructor( private service : FlashCardService){

}

  @Post('save')
  save(@Body() data: CreateFlashCardDto ){

    return this.service.save(data);
  }

  @Get()
  getAllFlashCards( ){

    return this.service.getAllFlashCards();
  }


}

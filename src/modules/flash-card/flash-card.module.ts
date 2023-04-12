/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { FlashCardService } from './flash-card.service';
import { FlashCardController } from './flash-card.controller';
import { FlashCardRepository } from './flash-card.repository';

@Module({
    controllers: [FlashCardController],
    providers: [FlashCardRepository, FlashCardService
      ],
})
export class FlashCardModule { }

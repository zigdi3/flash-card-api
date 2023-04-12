/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { CreateFlashCardDto } from './dtos/create-flash-card.dto';
import { FlashCard } from '@prisma/client';
import { FlashCardRepository } from './flash-card.repository';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class FlashCardService {
  constructor(private service: FlashCardRepository) {


  }

  async getAllFlashCards(): Promise<FlashCard[]> {
    return this.service.findAll();
  }

  save(data: CreateFlashCardDto): Promise<FlashCard> {
    const uuid = uuidv4();
    return this.service.create({
      id: uuid,
      name: data?.name,
      linkedlnUrl: data?.linkedlnUrl,
      gitHubUrl: data?.gitHubUrl,
      createAt: new Date(),
      updateAt: null
    })

  }
}

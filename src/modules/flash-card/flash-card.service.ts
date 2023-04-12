/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { CreateFlashCardDto } from './dtos/create-flash-card.dto';
import { FlashCard } from '@prisma/client';
import { FlashCardRepository } from './flash-card.repository';
import { ObjectId } from 'bson';

@Injectable()
export class FlashCardService {
  constructor(private service: FlashCardRepository) { }

  async getAllFlashCards(): Promise<FlashCard[]> {
    return this.service.findAll();
  }

  save(data: CreateFlashCardDto): Promise<FlashCard> {
    const id = new ObjectId().toString();

    return this.service.create({
      id: id,
      name: data?.name,
      linkedlnUrl: data?.linkedinUrl,
      gitHubUrl: data?.gitHubUrl,
      createAt: new Date(),
      updateAt: null,
    });
  }
}

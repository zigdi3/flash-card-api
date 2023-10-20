/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { CreateFlashCardDto } from './dtos/create-flash-card.dto';
import { FlashCard } from '@prisma/client';
import { FlashCardRepository } from './flash-card.repository';
import { ObjectId, UUID } from 'bson';
import { QRCode } from 'qrcode';
import { uuid } from 'uuidv4';
@Injectable()
export class FlashCardService {
  constructor(private service: FlashCardRepository) { }

  async getAllFlashCards(): Promise<FlashCard[]> {
    return this.service.findAll();
  }

  async getById(id: string): Promise<FlashCard[]> {
    return this.service.findById(id);
  }

  save(data: CreateFlashCardDto): Promise<FlashCard> {
    let newId = new ObjectId();
    return this.service.create({
      id: newId.toString(),
      name: data?.name,
      linkedlnUrl: data?.linkedlnUrl,
      gitHubUrl: data?.gitHubUrl,
      createAt: new Date(),
      updateAt: null,
      qrCodeData: null
    });
  }

  async toQuantumRead(name: string): Promise<string> {
    const data = await this.service.findByName(name);
    const result = QRCode.toDataURL(data);
    return result;
  }
}
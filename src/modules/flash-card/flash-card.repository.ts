import { Injectable } from '@nestjs/common';
import { FlashCard } from '@prisma/client';
import { PrismaService } from '../infra';

@Injectable()
export class FlashCardRepository {
  constructor(private repo: PrismaService) { }

  async findAll(): Promise<FlashCard[]> {
    return this.repo.prisma.flashCard.findMany();
  }

  async create(data: FlashCard): Promise<FlashCard> {
    return this.repo.prisma.flashCard.create({
      data,
    });
  }

  async delete(id: string): Promise<FlashCard> {
    return this.repo.prisma.flashCard.delete({
      where: { id },
    });
  }
}

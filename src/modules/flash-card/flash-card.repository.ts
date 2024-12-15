import { Injectable } from '@nestjs/common';
import { FlashCard } from '@prisma/client';
import { PrismaService } from '../infra';

@Injectable()
export class FlashCardRepository {
  constructor(private repo: PrismaService) {}

  async findById(id: string): Promise<FlashCard[]> {
    const result = [];
    result.push(
      await this.repo.flashCard.findUnique({
        where: { id: id },
      })
    );
    return result;
  }

  async findByName(name: string): Promise<FlashCard[]> {
    const result = await this.repo.flashCard.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
    return result;
  }

  async findAll(): Promise<FlashCard[]> {
    return await this.repo.flashCard.findMany();
  }

  async create(data: FlashCard): Promise<FlashCard> {
    // const new_id = new ObjectId();
    return await this.repo.flashCard.create({
      data,
    });
  }

  async delete(id: any): Promise<FlashCard> {
    return await this.repo.flashCard.delete({
      where: { id },
    });
  }
}

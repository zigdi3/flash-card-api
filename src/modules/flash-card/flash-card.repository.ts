import { Injectable } from '@nestjs/common';
import { FlashCard } from '@prisma/client';
import { PrismaService } from '../infra';
import { ObjectId } from 'bson';

@Injectable()
export class FlashCardRepository {
  constructor(private repo: PrismaService) { }

  async findById(id: string): Promise<FlashCard[]> {
    const result = [];
    result.push(await this.repo.prisma.flashCard.findUnique(
      {
        where: { id: id }
      }
    ));
    return result;
  }

  async findByName(name: string): Promise<FlashCard[]> {
    const result = await this.repo.prisma.flashCard.findMany({

      where: {
        name: {
          contains: name
        }
      }
    });
    return result;
  }

  async findAll(): Promise<FlashCard[]> {
    return await this.repo.prisma.flashCard.findMany();
  }

  async create(data: FlashCard): Promise<FlashCard> {
    // const new_id = new ObjectId();
    return await this.repo.prisma.flashCard.create({
      data
    }
    );
  }

  async delete(id: any): Promise<FlashCard> {
    return await this.repo.prisma.flashCard.delete({
      where: { id },
    });
  }
}

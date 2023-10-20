import { ObjectId } from 'bson';

export class CreateFlashCardDto {
  id?: ObjectId;
  name?: string;
  linkedlnUrl?: string;
  gitHubUrl?: string;
  createAt: Date;
  updateAt?: Date;
}

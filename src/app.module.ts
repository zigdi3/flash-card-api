import { FlashCardService } from './modules/flash-card/flash-card.service';
import { FlashCardModule } from './modules/flash-card/flash-card.module';
import { FlashCardController } from './modules/flash-card/flash-card.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/infra';

@Module({
  imports: [
    FlashCardModule, PrismaModule, ],
  controllers: [
    FlashCardController, AppController],
  providers: [
    FlashCardService, AppService],
})
export class AppModule { }
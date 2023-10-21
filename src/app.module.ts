import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/infra';
import { FlashCardModule } from './modules/flash-card/flash-card.module';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { HttpInterceptor } from './shared/http-response-interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    //Http request
    HttpModule,
    FlashCardModule,
    PrismaModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: HttpInterceptor
    }],
})
export class AppModule { }
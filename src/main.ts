import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppService } from './app.service';


//pre initialiaze
const core = new AppService();

/**
 * Start app
 */
async function bootstrap() {

  // create app
  const app = await NestFactory.create(AppModule);

  //start app
  const port = 3131;
  await app.listen(port, () =>
    // logger.log(`Application is running on: ${await app.getUrl()}`);
    console.log(
      `API running on port: ${port} `,
    ),
  );
}
//run app
bootstrap();
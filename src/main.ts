import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { initializeMiddlewares } from './core/middlewares';

//pre initialiaze
const core = new AppService();

// const spin = new SpinUpService();
/**
 * Start app
 */
async function bootstrap() {
  // create app
  const app = await NestFactory.create(AppModule, { cors: true });
  //app.useGlobalInterceptors(new TimeoutInterceptor());

  //config middlwares
  initializeMiddlewares(app);

  //start app
  const port = 3131;
  await app.listen(port, () => {
    // logger.log(`Application is running on: ${await app.getUrl()}`);
     console.log(`API running on port: ${port} `);
     console.log(`API docs on : http://localhost:3131/api-docs/# `);
      // spin.onModuleInit();
  });
}
//run app
bootstrap();
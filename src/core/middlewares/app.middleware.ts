import { INestApplication } from '@nestjs/common';
import * as express from 'express';

import { SwaggerDoc } from '../../docs/swagger.doc';
/**
 * Initialize app middlewares
 * @param app Application
 */
export function initializeMiddlewares(app: INestApplication) {
  //application prefix
  app.setGlobalPrefix('v1'); //ignore (internal app)
  //versioning
  app.enableVersioning();
  //filter error

  //express parsing content request
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ limit: '10mb', extended: false }));
  app.enableCors({ origin: '*' });
  //swagger docs
  new SwaggerDoc().setupDocs(app);
}

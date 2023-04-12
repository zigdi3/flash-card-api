import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  ExpressSwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import * as fs from 'fs';
import * as path from 'path';
/**
 * Swagger doc builder
 */
export class SwaggerDoc {
  /**
   * Configure summary for API Tags
   */
  setupDocs = (app: INestApplication) => {
    const title = 'API Cartao Elegante QR';
    const description = `Prova de conceito Buzzvel`;
    const version = '1.0.0';
    //tags must be order manually
    //order by A-Z

    const config = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addTag('flash-card', 'FlashCard')


      .build();
    const document = SwaggerModule.createDocument(app, config);
    //customize swagger
    // const favicon = 'https://icon-library.com/images/rest-api-icon/rest-api-icon-26.jpg';
    const cssFile = path.join(
      __dirname,
      '../../assets/swagger/theme-flattop.css',
    );
    const options = {
      // explorer: false, //must be disable manually,
      customCss: fs.readFileSync(cssFile, { encoding: 'utf-8' }),
      // customfavIcon: favicon,
      customSiteTitle: 'API Buzzvel',
    } as ExpressSwaggerCustomOptions;

    SwaggerModule.setup('docs', app, document, options);
    // generate swagger json
    // fs.writeFileSync('./swagger-docs.json', JSON.stringify(document));
  };
}

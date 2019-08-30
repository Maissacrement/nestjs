import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './endpoints/app.module';
import { Logger } from '@nestjs/common';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, (): void => {
    Logger.log(`Your app turn on http://localhost:${port}\n`, 'Boostrap');
  });
}
bootstrap();

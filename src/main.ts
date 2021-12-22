import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { db } from './Config/orm.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*'
  })
  await app.listen(db.port);
}
bootstrap();

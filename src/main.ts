import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NestJs CRUD')
    .setDescription('NestJs CRUD Application')
    .setVersion('1.0.0')
    .addTag('nestjs')
    .build();

  const documents = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('docs', app, documents);

  await app.listen(3000);
}
bootstrap();

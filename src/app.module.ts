import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';

const DatabaseModule = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});

@Module({
  imports: [DatabaseModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TamponModule } from './tampon/tampon.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TamponModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

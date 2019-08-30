import { Module } from '@nestjs/common';
import { TamponService } from './tampon.service';
import { TamponController } from './tampon.controller';

@Module({
  providers: [TamponService],
  controllers: [TamponController]
})
export class TamponModule {}

import { Module } from '@nestjs/common';
import { StaticsService } from './statics.service';
import { StaticsController } from './statics.controller';

@Module({
  providers: [StaticsService],
  controllers: [StaticsController]
})
export class StaticsModule { }
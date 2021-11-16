import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { Lecture } from './models/lecture.model';

@Module({
  imports: [SequelizeModule.forFeature([Lecture])],
  providers: [],
})
export class UserModule {}

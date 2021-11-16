import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { Answer } from './models/answer.model';
import { Attendance } from './models/attendance.model';

@Module({
  imports: [SequelizeModule.forFeature([Answer, Attendance])],
  providers: [],
})
export class UserModule {}

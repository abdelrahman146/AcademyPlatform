import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { AnswerDTO } from './dtos/answer/answer.dto';
import { AttendanceDTO } from './dtos/attendance/attendance.dto';

// Models
import { AnswerEntity } from './entities/answer.entity';
import { AttendanceEntity } from './entities/attendance.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([AnswerEntity, AttendanceEntity])],
      resolvers: [
        { DTOClass: AnswerDTO, EntityClass: AnswerEntity },
        { DTOClass: AttendanceDTO, EntityClass: AttendanceEntity },
      ],
    }),
  ],
  providers: [],
})
export class AttendanceModule {}

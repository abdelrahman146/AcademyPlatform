import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql.jwt.guard';
import { AnswerCreateInputDTO } from './dtos/answer/answer.create.dto';
import { AnswerDTO } from './dtos/answer/answer.dto';
import { AnswerUpdateInputDTO } from './dtos/answer/answer.update.dto';
import { AttendanceCreateInputDTO } from './dtos/attendance/attendance.create.dto';
import { AttendanceDTO } from './dtos/attendance/attendance.dto';

// Models
import { AnswerEntity } from './entities/answer.entity';
import { AttendanceEntity } from './entities/attendance.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([AnswerEntity, AttendanceEntity])],
      resolvers: [
        {
          DTOClass: AnswerDTO,
          EntityClass: AnswerEntity,
          CreateDTOClass: AnswerCreateInputDTO,
          UpdateDTOClass: AnswerUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: AttendanceDTO,
          EntityClass: AttendanceEntity,
          CreateDTOClass: AttendanceCreateInputDTO,
          update: { disabled: true },
          guards: [GqlAuthGuard],
        },
      ],
    }),
  ],
  providers: [],
})
export class AttendanceModule {}

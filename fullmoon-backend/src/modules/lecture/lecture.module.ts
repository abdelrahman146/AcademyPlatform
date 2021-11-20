import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { LectureCreateInputDTO } from './dtos/lecture/lecture.create.dto';
import { LectureDTO } from './dtos/lecture/lecture.read.dto';
import { LectureUpdateInputDTO } from './dtos/lecture/lecture.update.dto';

// Models
import { LectureEntity } from './entities/lecture.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([LectureEntity])],
      resolvers: [{ DTOClass: LectureDTO, EntityClass: LectureEntity, CreateDTOClass: LectureCreateInputDTO, UpdateDTOClass: LectureUpdateInputDTO }],
    }),
  ],
  providers: [],
})
export class LectureModule {}

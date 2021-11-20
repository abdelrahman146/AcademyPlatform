import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { LectureDTO } from './dtos/lecture/lecture.read.dto';

// Models
import { LectureEntity } from './entities/lecture.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([LectureEntity])],
      resolvers: [{ DTOClass: LectureDTO, EntityClass: LectureEntity }],
    }),
  ],
  providers: [],
})
export class LectureModule {}

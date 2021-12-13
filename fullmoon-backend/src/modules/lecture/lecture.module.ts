import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql.jwt.guard';
import { LectureCreateInputDTO } from './dtos/lecture/lecture.create.dto';
import { LectureDTO } from './dtos/lecture/lecture.dto';
import { LectureUpdateInputDTO } from './dtos/lecture/lecture.update.dto';
import { LectureContentCreateInputDTO } from './dtos/lectureContent/lectureContent.create.dto';
import { LectureContentDTO } from './dtos/lectureContent/lectureContent.dto';
import { LectureContentUpdateInputDTO } from './dtos/lectureContent/lectureContent.update.dto';

// Models
import { LectureEntity } from './entities/lecture.entity';
import { LectureContentEntity } from './entities/lectureContent.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([LectureEntity, LectureContentEntity])],
      resolvers: [
        {
          DTOClass: LectureDTO,
          EntityClass: LectureEntity,
          CreateDTOClass: LectureCreateInputDTO,
          UpdateDTOClass: LectureUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: LectureContentDTO,
          EntityClass: LectureContentEntity,
          CreateDTOClass: LectureContentCreateInputDTO,
          UpdateDTOClass: LectureContentUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
      ],
    }),
  ],
  providers: [],
})
export class LectureModule {}

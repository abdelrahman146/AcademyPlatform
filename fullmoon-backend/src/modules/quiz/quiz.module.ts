import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AttendanceModule } from '../attendance/attendance.module';
import { CourseModule } from '../course/course.module';
import { OptionDTO } from './dtos/option.dto';
import { QuestionDTO } from './dtos/question.dto';
import { QuizDTO } from './dtos/quiz.dto';

// Models
import { OptionEntity } from './entities/option.entity';
import { QuestionEntity } from './entities/question.entity';
import { QuizEntity } from './entities/quiz.entity';

@Module({
  imports: [
    ,
    AttendanceModule,
    CourseModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([QuizEntity, QuestionEntity, OptionEntity])],
      resolvers: [
        { DTOClass: QuizDTO, EntityClass: QuizEntity },
        { DTOClass: QuestionDTO, EntityClass: QuestionEntity },
        { DTOClass: OptionDTO, EntityClass: OptionEntity },
      ],
    }),
  ],
  exports: [SequelizeModule],
  providers: [],
})
export class QuizModule {}

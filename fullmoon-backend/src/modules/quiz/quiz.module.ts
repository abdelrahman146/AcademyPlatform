import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { OptionDTO } from './dtos/option/option.dto';
import { QuestionDTO } from './dtos/question/question.read.dto';
import { QuizDTO } from './dtos/quiz/quiz.read.dto';

// Models
import { OptionEntity } from './entities/option.entity';
import { QuestionEntity } from './entities/question.entity';
import { QuizEntity } from './entities/quiz.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([QuizEntity, QuestionEntity, OptionEntity])],
      resolvers: [
        { DTOClass: QuizDTO, EntityClass: QuizEntity },
        { DTOClass: QuestionDTO, EntityClass: QuestionEntity },
        { DTOClass: OptionDTO, EntityClass: OptionEntity },
      ],
    }),
  ],
  providers: [],
})
export class QuizModule {}

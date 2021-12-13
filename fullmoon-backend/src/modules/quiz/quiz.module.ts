import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql.jwt.guard';
import { OptionCreateInputDTO } from './dtos/option/option.create.dto';
import { OptionDTO } from './dtos/option/option.dto';
import { OptionUpdateInputDTO } from './dtos/option/option.update.dto';
import { QuestionCreateInputDTO } from './dtos/question/question.create.dto';
import { QuestionDTO } from './dtos/question/question.dto';
import { QuestionUpdateInputDTO } from './dtos/question/question.update.dto';
import { QuizCreateInputDTO } from './dtos/quiz/quiz.create.dto';
import { QuizDTO } from './dtos/quiz/quiz.dto';
import { QuizUpdateInputDTO } from './dtos/quiz/quiz.update.dto';

// Models
import { OptionEntity } from './entities/option.entity';
import { QuestionEntity } from './entities/question.entity';
import { QuizEntity } from './entities/quiz.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([QuizEntity, QuestionEntity, OptionEntity])],
      resolvers: [
        {
          DTOClass: QuizDTO,
          EntityClass: QuizEntity,
          CreateDTOClass: QuizCreateInputDTO,
          UpdateDTOClass: QuizUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: QuestionDTO,
          EntityClass: QuestionEntity,
          CreateDTOClass: QuestionCreateInputDTO,
          UpdateDTOClass: QuestionUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
        {
          DTOClass: OptionDTO,
          EntityClass: OptionEntity,
          CreateDTOClass: OptionCreateInputDTO,
          UpdateDTOClass: OptionUpdateInputDTO,
          guards: [GqlAuthGuard],
        },
      ],
    }),
  ],
  providers: [],
})
export class QuizModule {}

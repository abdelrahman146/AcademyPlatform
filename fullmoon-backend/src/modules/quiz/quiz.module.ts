import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { OptionCreateInputDTO } from './dtos/option/option.create.dto';
import { OptionDTO } from './dtos/option/option.dto';
import { OptionUpdateInputDTO } from './dtos/option/option.update.dto';
import { QuestionCreateInputDTO } from './dtos/question/question.create.dto';
import { QuestionDTO } from './dtos/question/question.read.dto';
import { QuestionUpdateInputDTO } from './dtos/question/question.update.dto';
import { QuizCreateInputDTO } from './dtos/quiz/quiz.create.dto';
import { QuizDTO } from './dtos/quiz/quiz.read.dto';
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
        { DTOClass: QuizDTO, EntityClass: QuizEntity, CreateDTOClass: QuizCreateInputDTO, UpdateDTOClass: QuizUpdateInputDTO },
        { DTOClass: QuestionDTO, EntityClass: QuestionEntity, CreateDTOClass: QuestionCreateInputDTO, UpdateDTOClass: QuestionUpdateInputDTO },
        { DTOClass: OptionDTO, EntityClass: OptionEntity, CreateDTOClass: OptionCreateInputDTO, UpdateDTOClass: OptionUpdateInputDTO },
      ],
    }),
  ],
  providers: [],
})
export class QuizModule {}

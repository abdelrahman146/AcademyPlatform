import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Models
import { Option } from './models/option.model';
import { Question } from './models/question.model';
import { Quiz } from './models/quiz.model';

@Module({
  imports: [SequelizeModule.forFeature([Quiz, Question, Option])],
  providers: [],
})
export class QuizModule {}

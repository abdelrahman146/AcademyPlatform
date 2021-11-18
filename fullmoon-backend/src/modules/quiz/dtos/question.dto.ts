import { FilterableCursorConnection, FilterableField, Relation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { OptionDTO } from './option.dto';
import { QuizDTO } from './quiz.dto';

@ObjectType('Question')
@Relation('quiz', () => QuizDTO, { disableRemove: true })
@FilterableCursorConnection('options', () => OptionDTO, { disableRemove: true })
export class QuestionDTO {
  @Field()
  statement!: string;

  @Field()
  hint: string;

  @Field()
  points!: number;

  @FilterableField()
  quizId!: number;
}

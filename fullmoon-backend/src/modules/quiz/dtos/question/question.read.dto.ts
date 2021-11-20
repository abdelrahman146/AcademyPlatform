import { FilterableField, Relation, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { OptionDTO } from '../option/option.dto';
import { QuizDTO } from '../quiz/quiz.read.dto';

@ObjectType('Question')
@Relation('quiz', () => QuizDTO, { disableRemove: true })
@UnPagedRelation('options', () => OptionDTO, { enableTotalCount: true })
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

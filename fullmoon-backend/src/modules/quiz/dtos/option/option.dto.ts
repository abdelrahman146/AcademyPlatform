import { FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { QuestionDTO } from '../question/question.read.dto';

@ObjectType('Option')
@Relation('question', () => QuestionDTO, { disableRemove: true })
export class OptionDTO {
  @IDField(() => ID)
  id: number;

  @Field()
  statement: string;

  @FilterableField()
  isCorrect: boolean;

  @FilterableField()
  questionId: number;
}

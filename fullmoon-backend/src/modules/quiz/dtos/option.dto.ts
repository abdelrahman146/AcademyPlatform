import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { QuestionDTO } from './question.dto';

@ObjectType('Option')
@Relation('question', () => QuestionDTO, { disableRemove: true })
export class OptionDTO {
  @Field()
  statement!: string;

  @FilterableField()
  isCorrect!: boolean;

  @FilterableField()
  questionId!: number;
}

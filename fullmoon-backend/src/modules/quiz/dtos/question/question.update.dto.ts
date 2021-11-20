import { Field, InputType } from '@nestjs/graphql';

@InputType('QuestionUpdateInput')
export class QuestionUpdateInputDTO {
  @Field({ nullable: true })
  statement?: string;

  @Field({ nullable: true })
  hint?: string;

  @Field({ nullable: true })
  points?: number;
}

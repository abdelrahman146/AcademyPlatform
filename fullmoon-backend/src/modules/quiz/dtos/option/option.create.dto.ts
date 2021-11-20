import { Field, InputType } from '@nestjs/graphql';

@InputType('OptionCreateInput')
export class OptionCreateInputDTO {
  @Field()
  statement!: string;

  @Field()
  isCorrect!: boolean;

  @Field()
  questionId!: number;
}

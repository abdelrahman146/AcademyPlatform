import { Field, InputType } from '@nestjs/graphql';

@InputType('OptionUpdateInput')
export class OptionUpdateInputDTO {
  @Field()
  statement?: string;

  @Field()
  isCorrect?: boolean;
}

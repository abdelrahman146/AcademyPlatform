import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('AnswerUpdateInput')
export class AnswerUpdateInputDTO {
  @Field({ nullable: true })
  choosedOptionEntityId?: number;

  @Field({ nullable: true })
  answer?: string;
}

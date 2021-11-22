import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ObjectType('AnswerUpdateInput')
export class AnswerUpdateInputDTO {
  @Field({ nullable: true })
  @IsOptional()
  choosedOptionEntityId?: number;

  @Field({ nullable: true })
  @IsOptional()
  answer?: string;
}

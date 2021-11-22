import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, NotEquals } from 'class-validator';

@InputType('QuestionUpdateInput')
export class QuestionUpdateInputDTO {
  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  statement?: string;

  @Field({ nullable: true })
  @IsOptional()
  hint?: string;

  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  points?: number;
}

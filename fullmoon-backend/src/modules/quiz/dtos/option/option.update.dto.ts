import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, NotEquals } from 'class-validator';

@InputType('OptionUpdateInput')
export class OptionUpdateInputDTO {
  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  statement?: string;

  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  isCorrect?: boolean;
}

import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString, NotEquals } from 'class-validator';

@InputType('SectionUpdateInput')
export class SectionUpdateInputDTO {
  @Field({ nullable: true })
  @IsNumber()
  @NotEquals(null)
  @IsOptional()
  order?: number;

  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  headline?: string;
}

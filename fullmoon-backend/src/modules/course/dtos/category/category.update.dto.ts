import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, NotEquals } from 'class-validator';

@InputType('CategoryUpdateInput')
export class CategoryUpdateInputDTO {
  @Field()
  @IsString()
  @NotEquals(null)
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  headline?: string;

  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  image?: string;
}

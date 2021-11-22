import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, NotEquals } from 'class-validator';

@InputType('SubCategoryUpdateInput')
export class SubCategoryUpdateInputDTO {
  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  headline?: string;

  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  parentId?: number;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType('SubCategoryUpdateInput')
export class SubCategoryUpdateInputDTO {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  headline?: string;

  @Field({ nullable: true })
  parentId?: number;
}

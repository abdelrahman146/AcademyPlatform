import { Field, InputType } from '@nestjs/graphql';

@InputType('SubCategoryCreateInput')
export class SubCategoryCreateInputDTO {
  @Field()
  title!: string;

  @Field({ nullable: true })
  headline?: string;

  @Field()
  parentId!: number;
}

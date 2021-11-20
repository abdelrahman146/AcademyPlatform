import { Field, InputType } from '@nestjs/graphql';

@InputType('CategoryUpdateInput')
export class CategoryUpdateInputDTO {
  @Field()
  name?: string;

  @Field({ nullable: true })
  headline?: string;

  @Field({ nullable: true })
  image?: string;
}

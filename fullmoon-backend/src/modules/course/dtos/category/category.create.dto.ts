import { Field, InputType } from '@nestjs/graphql';

@InputType('CategoryCreateInput')
export class CategoryCreateInputDTO {
  @Field()
  name!: string;

  @Field({ nullable: true })
  headline?: string;

  @Field({ nullable: true })
  image?: string;
}

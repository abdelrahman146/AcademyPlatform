import { Field, InputType } from '@nestjs/graphql';

@InputType('CartItemCreateInput')
export class CartItemCreateInputDTO {
  @Field()
  userId!: number;

  @Field()
  courseId!: number;
}

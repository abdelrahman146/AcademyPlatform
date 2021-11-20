import { Field, InputType } from '@nestjs/graphql';

@InputType('WishlistItemCreateInput')
export class WishlistItemCreateInputDTO {
  @Field()
  userId!: number;

  @Field()
  courseId!: number;
}

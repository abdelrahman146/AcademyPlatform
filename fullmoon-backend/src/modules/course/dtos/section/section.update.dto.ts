import { Field, InputType } from '@nestjs/graphql';

@InputType('SectionUpdateInput')
export class SectionUpdateInputDTO {
  @Field({ nullable: true })
  order?: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  headline?: string;

  @Field({ nullable: true })
  courseId?: number;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType('SectionCreateInput')
export class SectionCreateInputDTO {
  @Field({ nullable: true })
  order?: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  headline?: string;

  @Field()
  courseId!: number;

  @Field()
  teacherId!: number;
}

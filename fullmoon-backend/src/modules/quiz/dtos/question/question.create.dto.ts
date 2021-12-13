import { Field, InputType } from '@nestjs/graphql';

@InputType('QuestionCreateInput')
export class QuestionCreateInputDTO {
  @Field()
  statement!: string;

  @Field({ nullable: true })
  hint?: string;

  @Field()
  points!: number;

  @Field()
  quizId!: number;

  @Field()
  teacherId!: number;

  @Field()
  courseId!: number;
}

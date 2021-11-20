import { Field, InputType } from '@nestjs/graphql';

@InputType('EnrollmentCreateInput')
export class EnrollmentCreateInputDTO {
  @Field()
  studentId!: number;

  @Field()
  courseId!: number;
}

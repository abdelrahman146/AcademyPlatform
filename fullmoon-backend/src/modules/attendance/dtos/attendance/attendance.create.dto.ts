import { Field, InputType } from '@nestjs/graphql';

@InputType('AttendanceCreateInput')
export class AttendanceCreateInputDTO {
  @Field()
  studentId!: number;

  @Field()
  teacherId!: number;

  @Field({ nullable: true })
  lectureId?: number;

  @Field()
  enrollmentId!: number;

  @Field({ nullable: true })
  quizId?: number;
}

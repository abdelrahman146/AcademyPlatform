import { Field, InputType } from '@nestjs/graphql';

@InputType('AttendanceCreateInput')
export class AttendanceCreateInputDTO {
  @Field()
  studentId!: number;

  @Field({ nullable: true })
  lectureId?: number;

  @Field()
  enrolledId!: number;

  @Field({ nullable: true })
  quizId?: number;
}

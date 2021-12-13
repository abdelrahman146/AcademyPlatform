import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('AnswerCreateInput')
export class AnswerCreateInputDTO {
  @Field()
  studentId!: number;

  @Field()
  questionId!: number;

  @Field()
  teacherId!: number;

  @Field({ nullable: true })
  choosedOptionId?: number;

  @Field()
  attendanceId!: number;

  @Field({ nullable: true })
  answer?: string;
}

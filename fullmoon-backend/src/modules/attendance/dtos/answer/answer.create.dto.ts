import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('AnswerCreateInput')
export class AnswerCreateInputDTO {
  @Field()
  studentId!: number;

  @Field()
  questionId!: number;

  @Field({ nullable: true })
  choosedOptionEntityId?: number;

  @Field()
  attendanceId!: number;

  @Field({ nullable: true })
  answer?: string;
}

import { Field, InputType } from '@nestjs/graphql';

@InputType('LectureContentCreateInput')
export class LectureContentCreateInputDTO {
  @Field({ nullable: true })
  article?: string;

  @Field({ nullable: true })
  streamLink?: string;

  @Field({ nullable: true })
  videoLink?: string;

  @Field({ nullable: true })
  conferenceId?: string;

  @Field()
  teacherId!: number;

  @Field()
  courseId!: number;

  @Field()
  lectureId!: number;
}

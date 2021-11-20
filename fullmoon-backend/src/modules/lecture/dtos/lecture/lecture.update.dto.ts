import { Field, InputType } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { LectureType } from '../../types/lecture.types';

@InputType('LectureUpdateInput')
export class LectureUpdateInputDTO {
  @Field(() => LectureType)
  @IsEnum(LectureType)
  type?: LectureType;

  @Field()
  title?: string;

  @Field({ nullable: true })
  startingDate?: Date;

  @Field({ nullable: true })
  endingDate?: Date;

  @Field({ nullable: true })
  article?: string;

  @Field({ nullable: true })
  isLocked?: boolean;

  @Field({ nullable: true })
  streamLink?: string;

  @Field({ nullable: true })
  videoLink?: string;

  @Field({ nullable: true })
  conferenceId?: string;

  @Field()
  sectionId!: number;
}

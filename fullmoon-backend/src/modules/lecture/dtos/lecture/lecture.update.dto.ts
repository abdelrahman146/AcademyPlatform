import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsEnum, IsOptional, IsString, NotEquals } from 'class-validator';
import { LectureType } from '../../types/lecture.types';

@InputType('LectureUpdateInput')
export class LectureUpdateInputDTO {
  @Field(() => LectureType)
  @IsEnum(LectureType)
  @NotEquals(null)
  @IsOptional()
  type?: LectureType;

  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  startingDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  endingDate?: Date;

  @Field({ nullable: true })
  @IsOptional()
  article?: string;

  @Field({ nullable: true })
  @IsBoolean()
  @NotEquals(null)
  @IsOptional()
  isLocked?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  streamLink?: string;

  @Field({ nullable: true })
  @IsOptional()
  videoLink?: string;

  @Field({ nullable: true })
  @IsOptional()
  conferenceId?: string;

  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  sectionId?: number;
}

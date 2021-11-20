import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';
import { CourseType } from '../../types/course.types';
import { IsEnum } from 'class-validator';

@InputType('CourseUpdateInput')
export class CourseUpdateInputDTO {
  @Field(() => CourseType, { nullable: true })
  @IsEnum(CourseType)
  type?: CourseType;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  headline?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  introVideo?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  startingDate?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  endingDate?: Date;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  teacherId?: number;

  @Field({ nullable: true })
  subCategoryId?: number;
}

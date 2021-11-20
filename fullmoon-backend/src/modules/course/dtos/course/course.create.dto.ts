import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';
import { CourseType } from '../../types/course.types';
import { IsEnum } from 'class-validator';

@InputType('CourseCreateInput')
export class CourseCreateInputDTO {
  @Field(() => CourseType)
  @IsEnum(CourseType)
  type!: CourseType;

  @Field()
  title!: string;

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

  @Field()
  price!: number;

  @Field()
  teacherId!: number;

  @Field()
  subCategoryId!: number;
}

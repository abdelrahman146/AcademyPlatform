import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';
import { CourseType } from '../../types/course.types';
import { IsEnum, IsOptional, IsString, NotEquals } from 'class-validator';

@InputType('CourseUpdateInput')
export class CourseUpdateInputDTO {
  @Field(() => CourseType, { nullable: true })
  @IsEnum(CourseType)
  @NotEquals(null)
  @IsOptional()
  type?: CourseType;

  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  headline?: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;

  @Field({ nullable: true })
  @IsOptional()
  image?: string;

  @Field({ nullable: true })
  @IsOptional()
  introVideo?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  startingDate?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  endingDate?: Date;

  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  price?: number;

  @Field({ nullable: true })
  @IsString()
  @NotEquals(null)
  @IsOptional()
  subCategoryId?: number;
}

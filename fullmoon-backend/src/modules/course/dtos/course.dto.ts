import { FilterableCursorConnection, FilterableField, FilterableRelation, IDField, Relation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { UserDTO } from 'src/modules/user/dtos/user.dto';
import { SubCategoryDTO } from './subcategory.dto';
import { CourseType } from '../types/course.types';
import { SectionDTO } from './sections.dto';

@ObjectType('Course')
@FilterableRelation('teacher', () => UserDTO, { disableRemove: true })
@Relation('subcategory', () => SubCategoryDTO, { disableRemove: true })
@FilterableCursorConnection('sections', () => SectionDTO)
export class CourseDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => CourseType)
  type: CourseType;

  @FilterableField()
  title: string;

  @Field()
  headline: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  introVideo: string;

  @FilterableField(() => GraphQLISODateTime)
  startingDate: Date;

  @FilterableField(() => GraphQLISODateTime)
  endingDate: Date;

  @FilterableField()
  price: number;

  @FilterableField()
  teacherId: number;

  @FilterableField()
  subcategoryId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}

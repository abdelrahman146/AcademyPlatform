import { FilterableField, IDField, Relation, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { UserDTO } from 'src/modules/user/dtos/user.dto';
import { SubCategoryDTO } from './subcategory.dto';
import { CourseType } from '../types/course.types';
import { SectionDTO } from './sections.dto';

@ObjectType('Course')
@Relation('teacher', () => UserDTO, { disableRemove: true, disableUpdate: true })
@Relation('subCategory', () => SubCategoryDTO, { disableRemove: true })
@UnPagedRelation('sections', () => SectionDTO, { enableTotalCount: true })
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
  subCategoryId: number;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}

import { FilterableField, IDField, Relation, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { SubCategoryDTO } from '../subCategory/subCategory.dto';
import { CourseType } from '../../types/course.types';
import { SectionDTO } from '../section/section.dto';
import { UserDTO } from 'src/modules/user/dtos/user/user.read.dto';

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
import { FilterableCursorConnection, FilterableField, FilterableRelation, IDField } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryDTO } from './category.dto';
import { CourseDTO } from './course.dto';

@ObjectType('SubCategory')
@FilterableRelation('parent', () => CategoryDTO, { disableRemove: true })
@FilterableCursorConnection('courses', () => CourseDTO, { enableTotalCount: true })
export class SubCategoryDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  title: string;

  @Field()
  headline: string;

  @FilterableField()
  parentId: number;
}

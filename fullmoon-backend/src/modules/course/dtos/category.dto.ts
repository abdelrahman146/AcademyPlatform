import { FilterableCursorConnection, FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SubCategoryDTO } from './subcategory.dto';

@ObjectType('Category')
@FilterableCursorConnection('subcategories', () => SubCategoryDTO)
export class CategoryDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name: string;

  @Field()
  headline: string;

  @Field()
  image: string;
}

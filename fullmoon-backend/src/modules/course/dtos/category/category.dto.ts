import { FilterableCursorConnection, FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SubCategoryDTO } from '../subCategory/subCategory.dto';

@ObjectType('Category')
@FilterableCursorConnection('subCategories', () => SubCategoryDTO, { enableTotalCount: true })
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

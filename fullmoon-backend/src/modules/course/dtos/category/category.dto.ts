import { AuthorizationContext, Authorize, FilterableCursorConnection, FilterableField, IDField } from '@nestjs-query/query-graphql';
import { UnauthorizedException } from '@nestjs/common';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';
import { SubCategoryDTO } from '../subCategory/subCategory.dto';

@ObjectType('Category')
@Authorize({
  authorize: (context: UserContext, authContext?: AuthorizationContext) => {
    if (!authContext?.readonly && context.req.user.role !== UserRole.admin) throw new UnauthorizedException();
    return {};
  },
})
@FilterableCursorConnection('subCategories', () => SubCategoryDTO, { enableTotalCount: true })
export class CategoryDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  headline?: string;

  @Field()
  image: string;
}

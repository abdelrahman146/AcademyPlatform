import {
  AuthorizationContext,
  Authorize,
  FilterableCursorConnection,
  FilterableField,
  FilterableRelation,
  IDField,
} from '@nestjs-query/query-graphql';
import { UnauthorizedException } from '@nestjs/common';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { UserContext } from 'src/modules/user/types/auth.types';
import { UserRole } from 'src/modules/user/types/user.types';
import { CategoryDTO } from '../category/category.dto';
import { CourseDTO } from '../course/course.dto';

@ObjectType('SubCategory')
@Authorize({
  authorize: (context: UserContext, authContext?: AuthorizationContext) => {
    if (!authContext?.readonly && context.req.user.role !== UserRole.admin) throw new UnauthorizedException();
    return {};
  },
})
@FilterableRelation('parent', () => CategoryDTO, { disableRemove: true })
@FilterableCursorConnection('courses', () => CourseDTO, { enableTotalCount: true })
export class SubCategoryDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  headline?: string;

  @FilterableField()
  parentId: number;
}

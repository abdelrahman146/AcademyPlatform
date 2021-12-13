import {
  AuthorizationContext,
  Authorize,
  CursorConnection,
  FilterableCursorConnection,
  FilterableField,
  IDField,
  OperationGroup,
  UnPagedRelation,
} from '@nestjs-query/query-graphql';
import { UnauthorizedException } from '@nestjs/common';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { CourseDTO } from 'src/modules/course/dtos/course/course.dto';
import { UserContext } from '../../types/auth.types';
import { UserGender, UserRole } from '../../types/user.types';
import { CartItemDTO } from '../cartitem/cartitem.dto';
import { EnrollmentDTO } from '../enrollment/enrollment.dto';
import { WishlistItemDTO } from '../wishlistitem/wishlistitem.dto';

@ObjectType('User')
@Authorize({
  authorize: (context: UserContext, authContext?: AuthorizationContext) => {
    if (context.req.user.role === UserRole.admin) return {};
    if (authContext.operationGroup === OperationGroup.CREATE && context.req.user.id) throw new UnauthorizedException();
    if (!authContext?.readonly) return { id: { eq: context.req.user.id } };
    return {};
  },
})
@UnPagedRelation('cart', () => CartItemDTO, {
  enableTotalCount: true,
  relationName: 'cart',
})
@CursorConnection('wishlist', () => WishlistItemDTO, {
  enableTotalCount: true,
  relationName: 'wishlist',
})
@FilterableCursorConnection(
  'enrollments',
  () => {
    @ObjectType('UserEnrolledCourses')
    class UserEnrolledCourses extends CourseDTO {
      @Field()
      enrollmentInfo: EnrollmentDTO;
    }
    return UserEnrolledCourses;
  },
  {
    relationName: 'enrollments',
    enableTotalCount: true,
    disableRemove: true,
  },
)
export class UserDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => UserRole)
  role!: UserRole;

  @FilterableField({ nullable: true })
  @IsOptional()
  firstName: string;

  @FilterableField({ nullable: true })
  @IsOptional()
  lastName: string;

  @FilterableField({ nullable: true })
  @IsOptional()
  title: string;

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  dob: Date;

  @FilterableField(() => UserGender)
  gender: UserGender;

  @FilterableField()
  email!: string;

  @FilterableField({ nullable: true })
  @IsOptional()
  country: string;

  @Field({ nullable: true })
  @IsOptional()
  avatar: string;

  @FilterableField({ nullable: true })
  @IsOptional()
  mobile: string;

  @Field({ nullable: true })
  @IsOptional()
  bio: string;

  @FilterableField()
  isActive: boolean;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}

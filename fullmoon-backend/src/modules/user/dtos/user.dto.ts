import { CursorConnection, FilterableCursorConnection, FilterableField, IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { UserRole } from '../types/user.types';
import { CartItemDTO } from './cartitem.dto';
import { EnrollmentDTO } from './enrollment.dto';
import { WishlistItemDTO } from './wishlistitem.dto';

@ObjectType('User')
@UnPagedRelation('cart', () => CartItemDTO, { enableTotalCount: true })
@CursorConnection('wishlist', () => WishlistItemDTO, { enableTotalCount: true })
@FilterableCursorConnection('enrolledCourses', () => EnrollmentDTO, { relationName: 'enrollments', enableTotalCount: true, disableRemove: true })
export class UserDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => UserRole)
  role!: UserRole;

  @FilterableField()
  firstName: string;

  @FilterableField()
  lastname: string;

  @FilterableField()
  title: string;

  @FilterableField(() => GraphQLISODateTime)
  dob: Date;

  @FilterableField()
  email!: string;

  @FilterableField()
  country: string;

  @Field()
  avatar: string;

  @FilterableField()
  mobile: string;

  @Field()
  bio: string;

  @FilterableField()
  isActive: boolean;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}

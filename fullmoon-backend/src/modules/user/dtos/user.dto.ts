import { CursorConnection, FilterableCursorConnection, FilterableField, IDField, UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { UserGender, UserRole } from '../types/user.types';
import { CartItemDTO } from './cartitem.dto';
import { EnrollmentDTO } from './enrollment.dto';
import { WishlistItemDTO } from './wishlistitem.dto';

@ObjectType('User')
@UnPagedRelation('cartItems', () => CartItemDTO, { enableTotalCount: true, relationName: 'cart' })
@CursorConnection('wishlistItems', () => WishlistItemDTO, { enableTotalCount: true, relationName: 'wishlist' })
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

  @FilterableField(() => UserGender)
  gender: UserGender;

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

import { FilterableField, FilterableRelation, IDField } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { CourseDTO } from 'src/modules/course/dtos/course.dto';
import { UserDTO } from './user.dto';

@ObjectType('CartItem')
@FilterableRelation('user', () => UserDTO, { disableRemove: true })
@FilterableRelation('course', () => CourseDTO, { disableRemove: true })
export class CartItemDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  userId!: number;

  @FilterableField()
  courseId!: number;
}

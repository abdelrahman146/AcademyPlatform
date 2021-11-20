import { FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { CourseDTO } from 'src/modules/course/dtos/course/course.dto';
import { UserDTO } from '../user/user.read.dto';

@ObjectType('CartItem')
@Relation('user', () => UserDTO, { disableRemove: true, disableUpdate: true })
@Relation('course', () => CourseDTO, { disableRemove: true, disableUpdate: true })
export class CartItemDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  userId!: number;

  @FilterableField()
  courseId!: number;
}

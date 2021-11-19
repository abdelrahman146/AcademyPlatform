import { FilterableField, IDField, Relation } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { CourseDTO } from 'src/modules/course/dtos/course.dto';
import { UserDTO } from './user.dto';

@ObjectType('WishlistItem')
@Relation('user', () => UserDTO, { disableRemove: true, disableUpdate: true })
@Relation('course', () => CourseDTO, { disableRemove: true, disableUpdate: true })
export class WishlistItemDTO {
  @IDField(() => ID)
  id!: number;

  @FilterableField()
  userId!: number;

  @FilterableField()
  courseId!: number;
}
